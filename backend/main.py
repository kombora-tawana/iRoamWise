from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Change to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stores")
def get_stores():
    db_file = r"malls.db"
    if not os.path.exists(db_file):

        return {"detail": "Database file not found", "status_code": 500}

    try:
        print(f"Connecting to database: {db_file}")
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        cursor.execute("SELECT Store_Name, Category, Floor_Level, Contact_Number, Opening_Hours, Closing_Hours FROM mall")
        rows = cursor.fetchall()
        conn.close()

        stores = [
            {
                "name": row[0],
                "category": row[1],
                "floor": row[2],
                "open_times": row[3],
                "close_times": row[4]
            } for row in rows
        ]
        return stores
    except sqlite3.OperationalError as e:
        print(f"Error: {e}")

        return {"detail": f"Internal Server Error: {e}", "status_code": 500}
