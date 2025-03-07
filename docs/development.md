---
sidebar_position: 3
---

# Development Guide

This guide will help you understand the development workflow and architecture of RENERP.

## Project Structure

```
renerp/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # FastAPI backend application
│   ├── app/         # Application code
│   ├── tests/       # Test files
│   └── alembic/     # Database migrations
├── docs/            # Documentation website
└── docker-compose.yml # Container orchestration
```

## Development Workflow

### 1. Setting Up Development Environment

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/DankiCalamari/renerp.git
cd renerp
```

2. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt
```

3. Set up the frontend:
```bash
cd frontend
npm install
```

### 2. Running Development Servers

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

The development servers will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

### 3. Database Migrations

When making changes to the database models:

1. Create a new migration:
```bash
cd backend
alembic revision --autogenerate -m "Description of changes"
```

2. Apply the migration:
```bash
alembic upgrade head
```

## Code Style

### Backend (Python)

- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Use meaningful variable names

Example:
```python
from typing import List, Optional
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    email: str
    is_active: bool = True

def get_user_by_id(user_id: int) -> Optional[User]:
    """
    Retrieve a user by their ID.
    
    Args:
        user_id: The ID of the user to retrieve
        
    Returns:
        Optional[User]: The user if found, None otherwise
    """
    # Implementation
```

### Frontend (TypeScript)

- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components with hooks
- Implement proper error handling

Example:
```typescript
import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface UserListProps {
  onSelectUser: (user: User) => void;
}

export const UserList: React.FC<UserListProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## Testing

### Backend Testing

1. Run unit tests:
```bash
cd backend
pytest
```

2. Run with coverage:
```bash
pytest --cov=app tests/
```

### Frontend Testing

1. Run unit tests:
```bash
cd frontend
npm test
```

2. Run with coverage:
```bash
npm test -- --coverage
```

## Git Workflow

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make changes and commit:
```bash
git add .
git commit -m "feat: add new feature"
```

3. Push changes:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

## Documentation

- Update relevant documentation when making changes
- Add comments for complex logic
- Keep API documentation up to date
- Update README.md if needed

## Getting Help

- Check the [Troubleshooting Guide](/troubleshooting)
- Review [GitHub Issues](https://github.com/DankiCalamari/renerp/issues)
- Ask questions in the [Community Discord](https://discord.gg/renerp) 