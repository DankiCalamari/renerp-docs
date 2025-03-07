---
sidebar_position: 6
---

# Contributing Guide

Thank you for your interest in contributing to RENERP! This guide will help you get started with contributing to the project.

## Getting Started

### 1. Fork the Repository

1. Visit [RENERP on GitHub](https://github.com/DankiCalamari/renerp)
2. Click the "Fork" button in the top-right corner
3. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/renerp.git
   cd renerp
   ```

### 2. Set Up Development Environment

1. Install dependencies:
   ```bash
   # Backend
   cd backend
   python -m venv venv
   source venv/bin/activate  # or .\venv\Scripts\activate on Windows
   pip install -r requirements.txt

   # Frontend
   cd frontend
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Backend
   cp backend/.env.example backend/.env

   # Frontend
   cp frontend/.env.example frontend/.env
   ```

3. Start development servers:
   ```bash
   # Backend
   cd backend
   uvicorn app.main:app --reload --port 8000

   # Frontend
   cd frontend
   npm start
   ```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

1. Write your code
2. Add tests
3. Update documentation
4. Follow code style guidelines

### 3. Commit Changes

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format
<type>(<scope>): <description>

# Examples
git commit -m "feat(auth): add JWT authentication"
git commit -m "fix(api): resolve CORS issues"
git commit -m "docs(readme): update installation instructions"
```

### 4. Push Changes

```bash
git push origin feature/your-feature-name
```

### 5. Create a Pull Request

1. Visit your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template
4. Request reviews from maintainers

## Code Style

### Frontend

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

### Backend

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

## Testing

### Frontend Testing

1. Write unit tests:
```typescript
import { render, screen } from '@testing-library/react';
import { UserList } from './UserList';

describe('UserList', () => {
  it('renders user list', () => {
    const mockUsers = [
      { id: 1, username: 'test1' },
      { id: 2, username: 'test2' }
    ];
    
    render(<UserList users={mockUsers} onSelectUser={() => {}} />);
    
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
  });
});
```

2. Run tests:
```bash
cd frontend
npm test
```

### Backend Testing

1. Write unit tests:
```python
import pytest
from app.services import user_service

def test_get_user_by_id():
    user = user_service.get_user_by_id(1)
    assert user is not None
    assert user.id == 1
```

2. Run tests:
```bash
cd backend
pytest
```

## Documentation

1. Update relevant documentation
2. Add comments for complex logic
3. Keep API documentation up to date
4. Update README.md if needed

## Review Process

1. Ensure all tests pass
2. Update documentation
3. Address review comments
4. Squash commits if needed
5. Merge after approval

## Getting Help

- Check the [Development Guide](/development)
- Review the [Troubleshooting Guide](/troubleshooting)
- Ask questions in the [Community Discord](https://discord.gg/renerp)
- Create an issue on [GitHub](https://github.com/DankiCalamari/renerp/issues)

## Code of Conduct

Please read and follow our [Code of Conduct](/CODE_OF_CONDUCT) to help maintain a positive and inclusive community. 