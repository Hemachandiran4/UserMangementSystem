# pyrefly: ignore [missing-import]
from fastapi import APIRouter
from models.user_model import UserRequest, UserResponse
from controllers.user_controller import (
    get_all_users,
    get_user_by_id,
    create_user,
    update_user,
    delete_user
)

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/", response_model=list[UserResponse])
def fetch_users():
    return get_all_users()

@router.get("/{id}", response_model=UserResponse)
def fetch_user(id: str):
    return get_user_by_id(id)

@router.post("/", response_model=UserResponse)
def add_user(user: UserRequest):
    return create_user(user)

@router.put("/{id}", response_model=UserResponse)
def modify_user(id: str, user: UserRequest):
    return update_user(id, user)

@router.delete("/{id}")
def remove_user(id: str):
    return delete_user(id)
