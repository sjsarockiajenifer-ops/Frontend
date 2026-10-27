import json
import os
from collections import Counter
from decimal import Decimal
from openai import OpenAI

CATEGORIES = ["Food", "Transportation", "Shopping", "Bills", "Entertainment", "Education", "Healthcare", "Travel", "Rent", "Other"]
KEYWORDS = {
    "Food": ["lunch", "dinner", "breakfast", "restaurant", "food", "grocery", "cafe", "coffee", "swiggy", "zomato"],
    "Transportation": ["uber", "ola", "bus", "train", "metro", "fuel", "petrol", "taxi", "transport"],
    "Shopping": ["shirt", "clothes", "shopping", "shoes", "amazon", "flipkart", "purchase"],
    "Bills": ["electricity", "water bill", "internet", "phone bill", "recharge", "bill"],
    "Entertainment": ["movie", "cinema", "concert", "game", "netflix", "music"],
    "Education": ["book", "course", "tuition", "college", "school", "exam"],
    "Healthcare": ["doctor", "medicine", "hospital", "pharmacy", "health"],
    "Travel": ["hotel", "flight", "trip", "vacation", "travel"],
    "Rent": ["rent", "hostel", "lease"]
}

def categorize(description: str) -> tuple[str, int]:
    text = description.lower()
    for category, words in KEYWORDS.items():
        if any(word in text for word in words):
            return category, 94
    api_key = os.getenv("OPENAI_API_KEY")
    if api_key:
        try:
            client = OpenAI(api_key=api_key)
            response = client.chat.completions.create(model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"), temperature=0, messages=[
                {"role": "system", "content": f"Return only JSON with category from {CATEGORIES} and confidence integer."},
                {"role": "user", "content": description}
            ])
            result = json.loads(response.choices[0].message.content)
            category = result.get("category", "Other")
            return (category if category in CATEGORIES else "Other", int(result.get("confidence", 80)))
        except Exception:
            pass
    return "Other", 55

def build_insights(expenses: list) -> dict:
    if not expenses:
        return {"analysis": "Add a few expenses to unlock a personalized spending story.", "suggestions": ["Start by recording every purchase for one week."], "metrics": {}}
    totals = Counter()
    for item in expenses:
        totals[item.category] += float(item.amount)
    total = sum(totals.values())
    top = totals.most_common(3)
    leader, leader_value = top[0]
    share = round(leader_value / total * 100)
    analysis = f"You have tracked ₹{total:,.0f} across {len(expenses)} transactions. {leader} is your largest category at {share}% of spending."
    suggestions = [f"Review your {leader.lower()} spending of ₹{leader_value:,.0f} and set a weekly limit."]
    if totals.get("Food", 0) > total * 0.25:
        suggestions.append("Plan two extra meals at home each week to bring down restaurant and delivery costs.")
    if len(expenses) >= 4:
        suggestions.append("Use the Reports page each Sunday to spot categories that are trending upward.")
    return {"analysis": analysis, "suggestions": suggestions, "metrics": {"total": total, "by_category": dict(totals), "top_category": leader}}
