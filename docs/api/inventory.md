---
sidebar_position: 2
---

# Inventory API

The Inventory API provides endpoints for managing products, stock levels, and inventory movements.

## Products

### List Products

```http
GET /api/inventory/products
Authorization: Bearer {token}
```

**Response**
```json
{
  "items": [
    {
      "id": "string",
      "name": "string",
      "sku": "string",
      "category": "string",
      "unit": "string",
      "stock_level": "number",
      "reorder_point": "number"
    }
  ],
  "total": "number",
  "page": "number",
  "size": "number"
}
```

### Create Product

```http
POST /api/inventory/products
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "string",
  "sku": "string",
  "category": "string",
  "unit": "string",
  "reorder_point": "number"
}
```

## Stock Movements

### Record Movement

```http
POST /api/inventory/movements
Authorization: Bearer {token}
Content-Type: application/json

{
  "product_id": "string",
  "type": "RECEIPT|ISSUE|TRANSFER|ADJUSTMENT",
  "quantity": "number",
  "reference": "string",
  "notes": "string"
}
```

### Get Movement History

```http
GET /api/inventory/movements
Authorization: Bearer {token}
```

## Stock Levels

### Get Current Stock

```http
GET /api/inventory/stock-levels
Authorization: Bearer {token}
```

### Update Stock Level

```http
PUT /api/inventory/stock-levels/{product_id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "quantity": "number",
  "reason": "string"
}
```

## Error Responses

### Product Not Found
```json
{
  "detail": "Product not found"
}
```

### Invalid Movement
```json
{
  "detail": "Invalid movement type"
}
```

### Insufficient Stock
```json
{
  "detail": "Insufficient stock for operation"
}
```

## Best Practices

1. Always validate stock levels before operations
2. Use appropriate movement types
3. Include meaningful references
4. Handle errors gracefully
5. Monitor stock level changes 