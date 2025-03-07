---
sidebar_position: 2
---

# Installation Guide

This guide will help you install and set up RENERP on your system.

## Prerequisites

Before installing RENERP, ensure you have the following prerequisites installed:

- Python 3.8 or higher
- Node.js 14 or higher
- MySQL 8.0 or higher
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/DankiCalamari/renerp.git
cd renerp
```

### 2. Backend Setup

1. Create and activate a virtual environment:

```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# Linux/MacOS
python3 -m venv venv
source venv/bin/activate
```

2. Install Python dependencies:

```bash
cd backend
pip install -r requirements.txt
```

3. Configure environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# DATABASE_URL=mysql://user:password@localhost:3306/renerp
# SECRET_KEY=your-secret-key
# ALGORITHM=HS256
# ACCESS_TOKEN_EXPIRE_MINUTES=30
```

4. Initialize the database:

```bash
# Create database migrations
alembic revision --autogenerate -m "Initial migration"

# Apply migrations
alembic upgrade head
```

### 3. Frontend Setup

1. Install Node.js dependencies:

```bash
cd frontend
npm install
```

2. Configure environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# REACT_APP_API_URL=http://localhost:8000
```

### 4. Start the Application

1. Start the backend server:

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

2. Start the frontend development server:

```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Docker Installation

Alternatively, you can use Docker to run RENERP:

1. Build and start the containers:

```bash
docker-compose up --build
```

2. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Verification

To verify your installation:

1. Visit http://localhost:3000 in your browser
2. Log in with the default admin credentials:
   - Username: admin
   - Password: admin123

## Troubleshooting

If you encounter any issues during installation:

1. Check the logs:
   - Backend: `backend/logs/app.log`
   - Frontend: Browser console

2. Verify database connection:
   - Check MySQL is running
   - Verify database credentials in `.env`

3. Common issues:
   - Port conflicts: Ensure ports 3000 and 8000 are available
   - Database connection: Check MySQL service and credentials
   - Node.js version: Ensure you're using Node.js 14 or higher

For more help, visit our [Troubleshooting Guide](/troubleshooting) or [GitHub Issues](https://github.com/DankiCalamari/renerp/issues). 