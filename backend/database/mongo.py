# pyrefly: ignore [missing-import]
from pymongo import MongoClient
import os
# pyrefly: ignore [missing-import]
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "user_management_db")

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]

credentials_collection = db["credentials"]
users_collection = db["users"]
