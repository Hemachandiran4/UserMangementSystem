# pyrefly: ignore [missing-import]
from fastapi import HTTPException
# pyrefly: ignore [missing-import]
from bson import ObjectId
from database.mongo import users_collection
from models.user_model import UserRequest
from utils.serializer import serialize_docs, serialize_doc

def get_all_users():
    users = list(users_collection.find())
    return serialize_docs(users)

def get_user_by_id(user_id: str):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID format")
    
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return serialize_doc(user)

def create_user(user_data: UserRequest):
    # Convert Pydantic model to dict, saving all fields
    new_user = user_data.model_dump()
    result = users_collection.insert_one(new_user)
    created_user = users_collection.find_one({"_id": result.inserted_id})
    return serialize_doc(created_user)

def update_user(user_id: str, user_data: UserRequest):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID format")
    
    # Convert Pydantic model to dict, saving all fields
    update_data = user_data.model_dump()
    result = users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": update_data}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
        
    updated_user = users_collection.find_one({"_id": ObjectId(user_id)})
    return serialize_doc(updated_user)

def delete_user(user_id: str):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user ID format")
        
    result = users_collection.delete_one({"_id": ObjectId(user_id)})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
        
    return {"message": "User deleted successfully"}
