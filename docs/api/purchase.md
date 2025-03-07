---
sidebar_position: 4
---

# Purchase API

The Purchase API provides endpoints for managing purchase orders, suppliers, and receiving.

## Purchase Orders

### List Orders

```http
GET /api/purchase/orders
Authorization: Bearer {token}
```

**Response**
```json
{
  "items": [
    {
      "id": "string",
      "supplier_id": "string",
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
POST /api/purchase/orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "supplier_id": "string",
  "items": [
    {
      "product_id": "string",
      "quantity": "number",
      "unit_price": "number"
    }
  ]
}
```

## Suppliers

### List Suppliers

```http
GET /api/purchase/suppliers
Authorization: Bearer {token}
```

### Create Supplier

```http
POST /api/purchase/suppliers
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

## Receiving

### Record Receipt

```http
POST /api/purchase/receipts
Authorization: Bearer {token}
Content-Type: application/json

{
  "order_id": "string",
  "items": [
    {
      "product_id": "string",
      "quantity": "number",
      "quality_check": "boolean"
    }
  ]
}
```

### Get Receipt

```http
GET /api/purchase/receipts/{receipt_id}
Authorization: Bearer {token}
```

## Error Responses

### Order Not Found
```json
{
  "detail": "Purchase order not found"
}
```

### Supplier Not Found
```json
{
  "detail": "Supplier not found"
}
```

### Invalid Receipt
```json
{
  "detail": "Invalid receipt data"
}
```

## Best Practices

1. Validate order data before submission
2. Check supplier information
3. Perform quality checks on receipt
4. Track order status changes
5. Monitor delivery performance 