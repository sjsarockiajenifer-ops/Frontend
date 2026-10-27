# AI Expense Tracker

A beginner-friendly full-stack expense tracker using HTML/CSS/JavaScript, FastAPI, SQLAlchemy, PostgreSQL, and an optional OpenAI API integration.

## 1. Create the environment

In the VS Code terminal:

```powershell
cd d:\frontend1\tailwind\day4\projectantigravity
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

If PowerShell blocks activation, run `Set-ExecutionPolicy -Scope Process Bypass` once in that terminal.

## 2. Configure PostgreSQL

Install PostgreSQL, then open `psql` as the postgres administrator:

```sql
CREATE USER expense_user WITH PASSWORD 'choose-a-password';
CREATE DATABASE ai_expense_tracker OWNER expense_user;
```

Create `backend/.env`:

```env
DATABASE_URL=postgresql+psycopg2://expense_user:choose-a-password@localhost:5432/ai_expense_tracker
SECRET_KEY=replace-with-a-long-random-string
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
```

The application creates the three tables on startup. If `DATABASE_URL` is omitted, it uses a local SQLite file for quick learning and testing.

## 3. Start the backend

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn main:app --reload
```

Open `http://127.0.0.1:8000/docs` to explore the REST API.

## 4. Start the frontend

Open a second VS Code terminal:

```powershell
cd d:\frontend1\tailwind\day4\projectantigravity\frontend
python -m http.server 5500
```

Open `http://127.0.0.1:5500/login.html`.

## 5. Test the app

1. Register a user.
2. Add `250`, `Lunch at restaurant`, today's date, and `UPI`. AI should suggest `Food`.
3. Add `Uber to college`, `Bought a shirt`, `Electricity bill`, and `Movie ticket` to test the category rules.
4. Review the dashboard, transaction filters, AI analysis, and reports.

## API overview

- `POST /register`, `POST /login`, `GET /me`
- `POST /expenses`, `GET /expenses`, `GET /expenses/{id}`, `PUT /expenses/{id}`, `DELETE /expenses/{id}`
- `GET /dashboard`, `GET /analysis`, `GET /reports`
- `POST /ai/categorize`, `POST /ai/analyze`, `POST /ai/suggestions`

The frontend stores only the JWT in local storage. The AI key remains server-side in `.env`. The keyword classifier works without an API key; adding `OPENAI_API_KEY` enables the fallback AI request for descriptions that do not match a keyword.
