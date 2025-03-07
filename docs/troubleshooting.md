---
sidebar_position: 5
---

# Troubleshooting Guide

This guide will help you resolve common issues that may arise while using RENERP.

## Frontend Issues

### Application Not Loading

**Symptoms:**
- White screen or blank page
- Console errors
- Network errors

**Solutions:**
1. Check browser console for errors
2. Verify API connection:
   ```javascript
   // Check API URL in .env
   REACT_APP_API_URL=http://localhost:8000
   ```
3. Check environment variables
4. Clear browser cache and reload

### Authentication Issues

**Symptoms:**
- Login failures
- Token expiration
- Session timeouts

**Solutions:**
1. Check token storage:
   ```javascript
   // Verify token in localStorage
   localStorage.getItem('token')
   ```
2. Verify token format
3. Check token expiration
4. Clear browser data and re-login

## Backend Issues

### Database Connection Errors

**Symptoms:**
- Connection timeouts
- Authentication failures
- Query errors

**Solutions:**
1. Check database connection:
   ```python
   # Verify DATABASE_URL in .env
   DATABASE_URL=mysql://user:password@localhost:3306/renerp
   ```
2. Verify MySQL service is running
3. Check database credentials
4. Verify network connectivity

### API Errors

**Symptoms:**
- 500 Internal Server Error
- 404 Not Found
- 401 Unauthorized

**Solutions:**
1. Check API logs:
   ```bash
   # View backend logs
   docker-compose logs backend
   ```
2. Verify API routes
3. Check request/response format
4. Verify authentication headers

## Docker Issues

### Container Not Starting

**Symptoms:**
- Container exits immediately
- Port conflicts
- Volume mounting errors

**Solutions:**
1. Check container logs:
   ```bash
   docker-compose logs
   ```
2. Verify port availability
3. Check volume permissions
4. Verify Docker service status

### Network Issues

**Symptoms:**
- Services not communicating
- Connection refused
- DNS resolution errors

**Solutions:**
1. Check network configuration:
   ```bash
   # List networks
   docker network ls
   ```
2. Verify service connectivity
3. Check firewall settings
4. Test network connectivity

## Performance Issues

### Slow Database Queries

**Solutions:**
1. Add indexes to frequently queried columns
2. Optimize query structure
3. Implement caching
4. Monitor query performance

### Frontend Performance

**Solutions:**
1. Implement code splitting
2. Optimize bundle size
3. Use lazy loading
4. Implement caching strategies

## Getting Help

If you're still experiencing issues:

1. Check [GitHub Issues](https://github.com/DankiCalamari/renerp/issues)
2. Review the [Development Guide](/development)
3. Review the [Deployment Guide](/deployment)
4. Join our [Community Discord](https://discord.gg/renerp)

## Common Error Messages

### Frontend Errors

1. **"Failed to fetch"**
   - Check API URL configuration
   - Verify network connectivity
   - Check CORS settings

2. **"Invalid token"**
   - Clear browser storage
   - Re-authenticate
   - Check token format

### Backend Errors

1. **"Database connection failed"**
   - Verify database credentials
   - Check MySQL service
   - Verify network connectivity

2. **"Authentication failed"**
   - Check JWT configuration
   - Verify token format
   - Check user permissions

## Logging

### Frontend Logging

```javascript
// Add logging to API calls
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);
```

### Backend Logging

```python
# Configure logging in main.py
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/app.log'),
        logging.StreamHandler()
    ]
)
```

## Debug Mode

### Frontend Debug

1. Enable React Developer Tools
2. Use browser DevTools
3. Add console logging
4. Use React DevTools Profiler

### Backend Debug

1. Enable debug mode:
   ```bash
   uvicorn app.main:app --reload --log-level debug
   ```
2. Use Python debugger
3. Add logging statements
4. Use FastAPI debug mode

## System Requirements

Ensure your system meets these requirements:

1. **Frontend:**
   - Node.js 14 or higher
   - Modern web browser
   - 4GB RAM minimum

2. **Backend:**
   - Python 3.8 or higher
   - MySQL 8.0 or higher
   - 8GB RAM minimum

3. **Docker:**
   - Docker 20.10 or higher
   - Docker Compose 2.0 or higher
   - 16GB RAM minimum 