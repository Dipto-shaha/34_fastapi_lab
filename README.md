# User Registration System

This project consists of a React frontend application and a FastAPI backend server to facilitate user registration. The frontend allows users to register with unique usernames, passwords, email addresses, and phone numbers. The backend validates the provided data and stores it in a MongoDB database.

## Frontend (React)

The React frontend application provides a user-friendly interface for user registration. It includes the following fields:

- Username: Must be unique and have more than five characters.
- Password: Must have more than six characters.
- Confirm Password: Must match the password field.
- Email: Must be unique.
- Phone Number: Must be unique and have exactly 11 digits.

Frontend validations ensure that minimum character constraints are met without contacting the backend.

## Backend (FastAPI)

The FastAPI backend server receives registration form data from the frontend and performs necessary validations. It interacts with a MongoDB database using the Pymongo package to store user data.

### Endpoints:

- **POST /register**: Receives registration data from the frontend, validates it, and stores it in the database if the data is valid.

## Database
MongoDB database

## Installation and Setup

1. Clone the repository.
2. Install dependencies for both frontend and backend.
4. Run the frontend and backend applications.

### Frontend Installation:

```bash
cd frontend
npm install
```
### Running the Application
## Frontend
```bash
cd frontend
npm rn dev
```
## Backend
```bash
cd backend
uvicorn main:app --reload
```

