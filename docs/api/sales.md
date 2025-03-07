---
sidebar_position: 3
---

# Sales API

The Sales API provides endpoints for managing sales orders, customers, and invoices.

## Sales Orders

### List Orders

```http
GET /api/sales/orders
Authorization: Bearer {token}
```

**Response**
```json
{
  "items": [
    {
      "id": "string",
      "customer_id": "string",
      "order_date": "string",
      "status": "string",
      "total_amount": "number",
      "items": [
        {
          "product_id": "string",
          "quantity": "number",
          "unit_price": "number",
          "total": "number"
        }
      ]
    }
  ],
  "total": "number",
  "page": "number",
  "size": "number"
}
```

### Create Order

```http
POST /api/sales/orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "customer_id": "string",
  "items": [
    {
      "product_id": "string",
      "quantity": "number",
      "unit_price": "number"
    }
  ]
}
```

## Customers

### List Customers

```http
GET /api/sales/customers
Authorization: Bearer {token}
```

### Create Customer

```http
POST /api/sales/customers
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "phone": "string",
  "address": {
    "street": "string",
    "city": "string",
    "state": "string",
    "postal_code": "string",
    "country": "string"
  }
}
```

## Invoices

### Generate Invoice

```http
POST /api/sales/invoices
Authorization: Bearer {token}
Content-Type: application/json

{
  "order_id": "string"
}
```

### Get Invoice

```http
GET /api/sales/invoices/{invoice_id}
Authorization: Bearer {token}
```

## Error Responses

### Order Not Found
```json
{
  "detail": "Order not found"
}
```

### Customer Not Found
```json
{
  "detail": "Customer not found"
}
```

### Invalid Order
```json
{
  "detail": "Invalid order data"
}
```

## Best Practices

1. Validate order data before submission
2. Check stock availability
3. Handle customer information securely
4. Process payments safely
5. Keep order history updated 