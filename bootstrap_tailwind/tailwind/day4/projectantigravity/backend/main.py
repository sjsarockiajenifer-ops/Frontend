from datetime import date, timedelta
from fastapi import Depends, FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db
from models import AIAnalysis, Transaction, User
from schemas import CategorizeRequest, CategorizeResponse, ExpenseCreate, ExpenseOut, ExpenseUpdate, Token, UserCreate, UserLogin
from auth import create_token, get_current_user, hash_password, verify_password
from ai_service import build_insights, categorize
from crud import create_expense, summary, update_expense, user_expenses

Base.metadata.create_all(bind=engine)
app = FastAPI(title="AI Expense Tracker API", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/")
def health(): return {"message": "AI Expense Tracker API is running"}

@app.post("/register", response_model=Token, status_code=status.HTTP_201_CREATED)
def register(data: UserCreate, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == data.email).first(): raise HTTPException(409, "Email is already registered")
    user = User(name=data.name, email=data.email, password=hash_password(data.password))
    db.add(user); db.commit(); db.refresh(user)
    return {"access_token": create_token(user.id), "user": {"id": user.id, "name": user.name, "email": user.email}}

@app.post("/login", response_model=Token)
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_password(data.password, user.password): raise HTTPException(401, "Email or password is incorrect")
    return {"access_token": create_token(user.id), "user": {"id": user.id, "name": user.name, "email": user.email}}

@app.get("/me")
def me(user: User = Depends(get_current_user)): return {"id": user.id, "name": user.name, "email": user.email}

@app.post("/expenses", response_model=ExpenseOut, status_code=201)
def add_expense(data: ExpenseCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)): return create_expense(db, user, data)

@app.get("/expenses", response_model=list[ExpenseOut])
def get_expenses(search: str | None = None, category: str | None = None, db: Session = Depends(get_db), user: User = Depends(get_current_user)): return user_expenses(db, user.id, search, category)

@app.get("/expenses/{expense_id}", response_model=ExpenseOut)
def get_expense(expense_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    item = db.query(Transaction).filter(Transaction.id == expense_id, Transaction.user_id == user.id).first()
    if not item: raise HTTPException(404, "Expense not found")
    return item

@app.put("/expenses/{expense_id}", response_model=ExpenseOut)
def edit_expense(expense_id: int, data: ExpenseUpdate, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    item = db.query(Transaction).filter(Transaction.id == expense_id, Transaction.user_id == user.id).first()
    if not item: raise HTTPException(404, "Expense not found")
    return update_expense(db, item, data)

@app.delete("/expenses/{expense_id}")
def delete_expense(expense_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    item = db.query(Transaction).filter(Transaction.id == expense_id, Transaction.user_id == user.id).first()
    if not item: raise HTTPException(404, "Expense not found")
    db.delete(item); db.commit(); return {"message": "Expense deleted"}

@app.get("/dashboard")
def dashboard(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    data = summary(db, user.id); data["recent"] = [ExpenseOut.model_validate(x).model_dump(mode="json") for x in data["recent"]]; return data

@app.post("/ai/categorize", response_model=CategorizeResponse)
def ai_categorize(data: CategorizeRequest):
    category, confidence = categorize(data.description); return {"category": category, "confidence": confidence}

@app.get("/analysis")
def analysis(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    result = build_insights(user_expenses(db, user.id)); return result

@app.post("/ai/analyze")
def ai_analyze(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    result = build_insights(user_expenses(db, user.id)); record = AIAnalysis(user_id=user.id, analysis=result["analysis"], suggestions="\n".join(result["suggestions"])); db.add(record); db.commit(); return result

@app.post("/ai/suggestions")
def ai_suggestions(db: Session = Depends(get_db), user: User = Depends(get_current_user)): return {"suggestions": build_insights(user_expenses(db, user.id))["suggestions"]}

@app.get("/reports")
def reports(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    items = user_expenses(db, user.id); daily = {}; weekly = {}; monthly = {}; categories = {}
    for item in items:
        amount = float(item.amount); day = item.date.isoformat(); month = item.date.strftime("%b %Y"); week = (item.date - timedelta(days=item.date.weekday())).isoformat()
        daily[day] = daily.get(day, 0) + amount; weekly[week] = weekly.get(week, 0) + amount; monthly[month] = monthly.get(month, 0) + amount; categories[item.category] = categories.get(item.category, 0) + amount
    return {"daily": daily, "weekly": weekly, "monthly": monthly, "categories": categories}
