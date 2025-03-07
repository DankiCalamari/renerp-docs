---
sidebar_position: 1
---

# Authentication

RENERP uses JWT (JSON Web Tokens) for API authentication. All API endpoints except the login endpoint require a valid JWT token.

## Authentication Flow

1. Client sends credentials to `/api/auth/login`
2. Server validates credentials and returns JWT token
3. Client includes token in subsequent requests
4. Server validates token for each request

## API Endpoints

### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

**Response**

```json
{
  "access_token": "string",
  "token_type": "bearer"
}
```

### Refresh Token

```http
POST /api/auth/refresh
Authorization: Bearer {token}
```

**Response**

```json
{
  "access_token": "string",
  "token_type": "bearer"
}
```

## Using the Token

Include the token in the Authorization header:

```http
GET /api/some-endpoint
Authorization: Bearer {token}
```

## Error Responses

### Invalid Credentials
```json
{
  "detail": "Incorrect username or password"
}
```

### Invalid Token
```json
{
  "detail": "Could not validate credentials"
}
```

### Expired Token
```json
{
  "detail": "Token has expired"
}
```

## Best Practices

1. Store tokens securely
2. Refresh tokens before expiration
3. Clear tokens on logout
4. Use HTTPS for all API calls
5. Handle token errors gracefully 