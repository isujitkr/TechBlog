# Blog Web Application - TECH BLOG

This is a full-stack blog web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows 
users to create, read, update, and delete blog posts.

## Features

- User authentication (signup, login, logout)
- Create, edit, and delete blog posts by admin user
- View all posts or individual posts
- Like and Comment on blog posts
- Dark mode
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible via a remote server.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/isujitkr/TechBlog.git

2. Navigate to the project directory:
   ```bash
   cd TechBlog
3. Set up environment variables in the .env file for MongoDB connection string , jwt key and Firebase API keys.
   ```bash
   MONGODB_URI=
   JWT_SECRET_KEY = 
   VITE_FIREBASE_API_KEY=
4. Install dependencies for frontend, backend and admin:
   ```bash
   cd client
   npm install
   cd ../api
   npm install
   
5. Run both the client and server:
   ```bash
   # From the backend directory
   npm run dev

   # From the frontend directory
   npm run dev

6. Access the application through the provided URL (typically http://localhost:5173)
