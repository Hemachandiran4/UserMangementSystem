# pyrefly: ignore [missing-import]
from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class UserRequest(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    age: int = Field(..., gt=0)
    role: str = Field(..., min_length=1)
    contact_number: str = Field(..., pattern=r"^\d{10,15}$")
    state: str = Field(..., min_length=1)
    country: str = Field(..., min_length=1)
    date_of_birth: str = Field(..., min_length=1) # Validated via frontend date picker, but can add stricter regex if needed

class UserResponse(BaseModel):
    id: str
    name: str = "Unknown"
    email: str = "unknown@example.com"
    age: int = 0
    role: str = "Unknown"
    contact_number: str = "Unknown"
    state: str = "Unknown"
    country: str = "Unknown"
    date_of_birth: str = "Unknown"
