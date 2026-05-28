# pyrefly: ignore [missing-import]
from fastapi import HTTPException
from database.mongo import credentials_collection
from models.auth_model import AuthRequest
from utils.serializer import serialize_doc

def login_or_register(request: AuthRequest):
    PREDEFINED_EMAIL = "Virtualanadmin@gmail.com"
    PREDEFINED_PASSWORD = "password123"

    if request.email == PREDEFINED_EMAIL and request.password == PREDEFINED_PASSWORD:
        # Check if the user exists in DB to provide a valid ID for frontend
        existing_user = credentials_collection.find_one({"email": request.email})
        if not existing_user:
            new_user = {
                "email": request.email,
                "password": request.password
            }
            result = credentials_collection.insert_one(new_user)
            user_doc = credentials_collection.find_one({"_id": result.inserted_id})
        else:
            user_doc = existing_user
        
        return {"message": "Login successful", "user": serialize_doc(user_doc)}
    else:
        raise HTTPException(status_code=401, detail="Invalid Email or Password")
