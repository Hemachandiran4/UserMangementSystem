# Frontend - User Management System

## Overview
This is the frontend for the User Management System built with React.js (Vite). It implements the Presentation Layer of the three-tier architecture.

## Features
- Combined Login/Registration page with validation
- Dashboard with full CRUD capabilities for User Management
- Protected Routing using React Router DOM
- Premium modern UI using Vanilla CSS (Glassmorphism, animations)
- Mobile Responsive Design

## Folder Structure
```
frontend/
├── package.json            # Node dependencies
├── .env                    # Environment variables
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── UserForm.jsx
│   │   └── UserList.jsx
│   ├── pages/              # Main page components
│   │   ├── LoginPage.jsx
│   │   └── HomePage.jsx
│   ├── services/           # Axios API services
│   │   ├── authService.js
│   │   └── userService.js
│   ├── routes/             # Routing configuration
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   ├── utils/              # Helper utilities
│   │   └── storage.js      # LocalStorage helper
│   ├── App.jsx             # Main application wrapper
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and theme
```

## Setup Instructions

1. Ensure you have Node.js installed (v18+ recommended).
2. Navigate to the `frontend` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Verify the `.env` file points to the correct backend URL:
   ```
   VITE_API_URL=http://127.0.0.1:8000
   ```

## Run Command
Start the Vite development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## Testing Instructions
1. Start both the backend and frontend servers.
2. Visit `http://localhost:5173`.
3. Try logging in with a valid email and password. If the email is not found in the DB, an account will be created.
4. On the dashboard, try creating, editing, and deleting users to test the CRUD endpoints.
5. Click "Logout" in the navbar to clear the session and return to the login page.
