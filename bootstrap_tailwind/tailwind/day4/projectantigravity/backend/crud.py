from datetime import date, timedelta
from sqlalchemy import desc
from sqlalchemy.orm import Session
from models import Transaction, User
from schemas import ExpenseCreate, ExpenseUpdate
from ai_service import categorize

def create_expense(db: Session, user: User, data: ExpenseCreate):
    category = data.category or categorize(data.description)[0]
    expense = Transaction(user_id=user.id, category=category, **data.model_dump(exclude={"category"}))
    db.add(expense); db.commit(); db.refresh(expense)
    return expense

def update_expense(db: Session, expense: Transaction, data: ExpenseUpdate):
    values = data.model_dump()
    if not values.get("category"):
        values["category"] = categorize(values["description"])[0]
    for key, value in values.items(): setattr(expense, key, value)
    db.commit(); db.refresh(expense)
    return expense

def user_expenses(db: Session, user_id: int, search: str | None = None, category: str | None = None):
    query = db.query(Transaction).filter(Transaction.user_id == user_id)
    if search: query = query.filter(Transaction.description.ilike(f"%{search}%"))
    if category and category != "All": query = query.filter(Transaction.category == category)
    return query.order_by(desc(Transaction.date), desc(Transaction.created_at)).all()

def summary(db: Session, user_id: int):
    all_items = user_expenses(db, user_id)
    today = date.today(); month_start = today.replace(day=1)
    month_items = [x for x in all_items if x.date >= month_start]
    today_items = [x for x in all_items if x.date == today]
    by_category = {}
    for item in all_items: by_category[item.category] = by_category.get(item.category, 0) + float(item.amount)
    top = max(by_category, key=by_category.get) if by_category else "No data"
    return {"total": sum(float(x.amount) for x in all_items), "month_total": sum(float(x.amount) for x in month_items), "today_total": sum(float(x.amount) for x in today_items), "top_category": top, "transaction_count": len(all_items), "recent": all_items[:5], "by_category": by_category}
