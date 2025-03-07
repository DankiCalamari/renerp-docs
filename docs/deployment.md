---
sidebar_position: 4
---

# Deployment Guide

This guide will help you deploy RENERP to a production environment.

## Production Requirements

- Docker and Docker Compose
- MySQL 8.0 or higher
- Node.js 14 or higher
- Nginx (recommended for reverse proxy)

## Deployment Steps

### 1. Prepare the Environment

1. Clone the repository:
```bash
git clone https://github.com/DankiCalamari/renerp.git
cd renerp
```

2. Create a production environment file:
```bash
# backend/.env.prod
DATABASE_URL=mysql://user:password@db:3306/renerp
SECRET_KEY=your-secure-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
CORS_ORIGINS=https://your-domain.com

# frontend/.env.prod
REACT_APP_API_URL=https://api.your-domain.com
```

### 2. Build the Frontend

```bash
cd frontend
npm install
npm run build
```

### 3. Configure Nginx

Create an Nginx configuration file:

```nginx
# /etc/nginx/sites-available/renerp
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/renerp/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://backend:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # SSL configuration (recommended)
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
}
```

### 4. Deploy with Docker Compose

Create a production Docker Compose file:

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    volumes:
      - frontend-build:/app/build
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - SECRET_KEY=${SECRET_KEY}
      - ALGORITHM=${ALGORITHM}
      - ACCESS_TOKEN_EXPIRE_MINUTES=${ACCESS_TOKEN_EXPIRE_MINUTES}
      - CORS_ORIGINS=${CORS_ORIGINS}
    volumes:
      - backend-logs:/app/logs
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD}
      - MYSQL_DATABASE=renerp
      - MYSQL_USER=${DB_USER}
      - MYSQL_PASSWORD=${DB_PASSWORD}
    volumes:
      - db-data:/var/lib/mysql

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./ssl:/etc/letsencrypt
      - frontend-build:/var/www/renerp/frontend/build
    depends_on:
      - frontend
      - backend

volumes:
  frontend-build:
  backend-logs:
  db-data:
```

### 5. Start the Application

1. Build and start the containers:
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

2. Run database migrations:
```bash
docker-compose -f docker-compose.prod.yml exec backend alembic upgrade head
```

## Dockerfiles

### Frontend Dockerfile

```dockerfile
# frontend/Dockerfile.prod
FROM node:14-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile

```dockerfile
# backend/Dockerfile.prod
FROM python:3.8-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN mkdir -p logs

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Monitoring and Maintenance

### View Logs

```bash
# View all logs
docker-compose -f docker-compose.prod.yml logs -f

# View specific service logs
docker-compose -f docker-compose.prod.yml logs -f backend
docker-compose -f docker-compose.prod.yml logs -f frontend
```

### Database Backups

```bash
# Create a backup
docker-compose -f docker-compose.prod.yml exec db mysqldump -u root -p renerp > backup.sql

# Restore from backup
docker-compose -f docker-compose.prod.yml exec -T db mysql -u root -p renerp < backup.sql
```

### Update Application

1. Pull latest changes:
```bash
git pull origin main
```

2. Rebuild and restart containers:
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## Security Considerations

1. Use HTTPS for all traffic
2. Set secure environment variables
3. Regularly update dependencies
4. Implement rate limiting
5. Use secure headers
6. Regular security audits

## Performance Optimization

1. Enable caching
2. Optimize database queries
3. Use CDN for static assets
4. Implement lazy loading
5. Monitor resource usage

## Troubleshooting

Common issues and solutions:

1. **Database Connection Issues**
   - Check database credentials
   - Verify network connectivity
   - Check database logs

2. **Application Not Starting**
   - Check container logs
   - Verify environment variables
   - Check port conflicts

3. **Performance Issues**
   - Monitor resource usage
   - Check database indexes
   - Review application logs

For more help, visit our [Troubleshooting Guide](/troubleshooting) or [GitHub Issues](https://github.com/DankiCalamari/renerp/issues). 