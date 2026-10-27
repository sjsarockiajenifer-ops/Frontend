from datetime import date, datetime
from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, Numeric, String, Text, func
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String(120), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password = Column(String(255), nullable=False)
    created_at = Column(DateTime, server_default=func.now())
    transactions = relationship("Transaction", back_populates="user", cascade="all, delete-orphan")
    analyses = relationship("AIAnalysis", back_populates="user", cascade="all, delete-orphan")

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    type = Column(String(20), default="expense", nullable=False)
    category = Column(String(40), default="Other", nullable=False)
    amount = Column(Numeric(12, 2), nullable=False)
    description = Column(String(255), nullable=False)
    payment_method = Column(String(40), nullable=False)
    date = Column(Date, default=date.today, nullable=False, index=True)
    created_at = Column(DateTime, server_default=func.now())
    user = relationship("User", back_populates="transactions")

class AIAnalysis(Base):
    __tablename__ = "ai_analysis"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    analysis = Column(Text, nullable=False)
    suggestions = Column(Text, nullable=False)
    created_at = Column(DateTime, server_default=func.now())
    user = relationship("User", back_populates="analyses")
