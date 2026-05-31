# User Management System

A full-stack User Management System built with **React (Vite)**, **FastAPI**, and **MongoDB**. This application provides user authentication and complete CRUD (Create, Read, Update, Delete) operations for managing users.

## Features

### Authentication

* Secure login system
* Protected routes
* Session management using Local Storage
* Automatic redirect for unauthorized users

### User Management

* Create new users
* View all users
* Search users by name or email
* Update existing users
* Delete users
* Form validation

### User Details

* Name
* Email
* Age
* Role
* Contact Number
* State
* Country
* Date of Birth

## Technology Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS

### Backend

* FastAPI
* Pydantic
* MongoDB
* PyMongo

### Database

* MongoDB

---

## Project Structure

### Frontend

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── UserForm.jsx
│   │   └── UserList.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── LoginPage.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── userService.js
│   │
│   ├── utils/
│   │   └── storage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── .env
```

### Backend

```text
backend/
│
├── database/
│   └── mongo.py
│
├── models/
│   ├── auth_model.py
│   └── user_model.py
│
├── routes/
│   ├── auth_routes.py
│   └── user_routes.py
│
├── services/
│   ├── auth_service.py
│   └── user_service.py
│
├── utils/
│   └── serializer.py
│
└── main.py
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```

---

## Backend Setup

### Create Virtual Environment

```bash
python -m venv myenv
```

### Activate Environment

Windows:

```bash
myenv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure MongoDB

Create a `.env` file:

```env
MONGO_URL=mongodb://localhost:27017
DATABASE_NAME=user_management
```

### Start FastAPI Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8001
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
VITE_API_URL=http://127.0.0.1:8001
```

Start React application:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

#### Login

```http
POST /auth/login
```

Request:

```json
{
  "email": "Virtualanadmin@gmail.com",
  "password": "password123"
}
```

Response:

```json
{
  "message": "Login successful",
  "user": {
    "id": "123456"
  }
}
```

---

### Users

#### Get All Users

```http
GET /users/
```

#### Get User By ID

```http
GET /users/{id}
```

#### Create User

```http
POST /users/
```

#### Update User

```http
PUT /users/{id}
```

#### Delete User

```http
DELETE /users/{id}
```

---

## Authentication Flow

1. User enters email and password.
2. Frontend sends login request to FastAPI.
3. Backend validates credentials.
4. User information is stored in Local Storage.
5. Protected routes become accessible.
6. Logout removes authentication data.

---

## CRUD Flow

### Create

User fills form and submits.

### Read

Users are loaded from MongoDB and displayed in a table.

### Update

User edits existing data and saves changes.

### Delete

User confirms deletion and record is removed.

---

## Validation

### Frontend Validation

* Required fields
* Email format validation
* Positive age validation
* Contact number validation
* Date of birth validation
  
### Backend Validation

* Pydantic model validation
* MongoDB ObjectId validation
* HTTP exception handling
