from datetime import date
from decimal import Decimal
from pydantic import BaseModel, ConfigDict, EmailStr, Field

CATEGORIES = ["Food", "Transportation", "Shopping", "Bills", "Entertainment", "Education", "Healthcare", "Travel", "Rent", "Other"]

class UserCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    password: str = Field(min_length=6, max_length=100)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict

class ExpenseCreate(BaseModel):
    amount: Decimal = Field(gt=0)
    description: str = Field(min_length=2, max_length=255)
    date: date
    payment_method: str = Field(min_length=2, max_length=40)
    category: str | None = None

class ExpenseUpdate(ExpenseCreate):
    pass

class ExpenseOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    amount: Decimal
    description: str
    date: date
    payment_method: str
    category: str
    type: str

class CategorizeRequest(BaseModel):
    description: str = Field(min_length=2)

class CategorizeResponse(BaseModel):
    category: str
    confidence: int
