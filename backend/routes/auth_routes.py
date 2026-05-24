# pyrefly: ignore [missing-import]
from fastapi import APIRouter
from models.auth_model import AuthRequest
from controllers.auth_controller import login_or_register

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login")
def auth_login(request: AuthRequest):
    # Combined Login/Register endpoint as requested
    return login_or_register(request)

@router.post("/register")
def auth_register(request: AuthRequest):
    # Combined Login/Register endpoint as requested
    return login_or_register(request)
