# Backend - User Management System

## Overview
This is the backend for the User Management System built with FastAPI and MongoDB. It implements the Business Logic and Data Access layers of the three-tier architecture.

## Features
- Combined Login/Registration endpoint
- Full CRUD operations for Users
- Pydantic models for data validation
- CORS enabled for frontend integration

## Folder Structure
```
backend/
├── main.py                 # FastAPI application entry point
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables
├── database/
│   └── mongo.py            # MongoDB connection
├── models/
│   ├── auth_model.py       # Auth Pydantic models
│   └── user_model.py       # User Pydantic models
├── controllers/
│   ├── auth_controller.py  # Auth business logic
│   └── user_controller.py  # User business logic
├── routes/
│   ├── auth_routes.py      # API endpoints for auth
│   └── user_routes.py      # API endpoints for users
└── utils/
    └── serializer.py       # Utility for MongoDB ObjectId serialization
```

## Setup Instructions

1. Ensure you have Python 3.8+ and MongoDB installed.
2. Navigate to the `backend` folder.
3. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
4. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`
5. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
6. Ensure MongoDB is running locally on port 27017, or update the `MONGO_URI` in `.env`.

## Run Command
Start the FastAPI server:
```bash
uvicorn main:app --reload
```
The API will be available at `http://127.0.0.1:8000`. You can view the interactive documentation at `http://127.0.0.1:8000/docs`.

## API Documentation
- `POST /auth/login`: Login or register a user.
- `POST /auth/register`: Alias for login/register.
- `GET /users`: Get all users.
- `GET /users/{id}`: Get user by ID.
- `POST /users`: Create a new user.
- `PUT /users/{id}`: Update an existing user.
- `DELETE /users/{id}`: Delete a user.
