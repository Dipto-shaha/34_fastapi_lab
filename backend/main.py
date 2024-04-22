from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, constr
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
allow_origins=["http://localhost", "http://localhost:3000"]

# MongoDB connection
uri = "mongodb+srv://IP_Lab:in3JffMHPrAdlzM3@cluster0.bnmqd0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri)
db = client["user_db"]
collection = db["users"]

# User model
class User(BaseModel):
    username: constr(min_length=6, max_length=50)
    password: constr(min_length=7, max_length=50)
    email: EmailStr
    phone_number: constr(regex=r'^\d{11}$')

@app.post("/register")
async def register_user(user: User, request: Request):
    print(await request.body())
    # Check if username already exists
    if collection.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="Username already exists")
    
    # Check if email already exists
    if collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already exists")
    
    # Check if phone number already exists
    if collection.find_one({"phone_number": user.phone_number}):
        raise HTTPException(status_code=400, detail="Phone number already exists")
    
    # Save user data to MongoDB
    user_dict = user.dict()
    collection.insert_one(user_dict)
    
    return {"message": "User registered successfully"}

@app.get('/health')
def hello():
    return "Server is running"
