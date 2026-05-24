# pyrefly: ignore [missing-import]
from fastapi import HTTPException
from database.mongo import credentials_collection
from models.auth_model import AuthRequest
from utils.serializer import serialize_doc

def login_or_register(request: AuthRequest):
    # Check if the user already exists in credentials collection
    existing_user = credentials_collection.find_one({"email": request.email})
    
    if existing_user:
        # If user exists, check password
        # NOTE: In production, use passlib and bcrypt to verify hashed passwords
        if existing_user["password"] == request.password:
            return {"message": "Login successful", "user": serialize_doc(existing_user)}
        else:
            raise HTTPException(status_code=401, detail="Incorrect password")
    else:
        # If user does not exist, create a new account
        # NOTE: In production, hash the password before saving
        new_user = {
            "email": request.email,
            "password": request.password
        }
        result = credentials_collection.insert_one(new_user)
        created_user = credentials_collection.find_one({"_id": result.inserted_id})
        return {"message": "Registration and login successful", "user": serialize_doc(created_user)}
