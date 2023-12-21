
# Endpoints

## Create a New User
- Endpoint: POST /api/users
- Description: Creates a new user in the database.
- Request Body:
```
{
    "userId": 113,
    "username": "john_doe3",
    "password": "secure_password",
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "age": 30,
    "email": "john.doe@example.com",
    "isActive": true,
    "hobbies": [
        "reading",
        "traveling"
    ],
    "address": {
        "street": "123 Main St",
        "city": "Cityville",
        "country": "Countryland"
    },
    "orders": [
        {
            "productName": "Product A",
            "price": 19.99,
            "quantity": 2
        },
        {
            "productName": "Product B",
            "price": 29.99,
            "quantity": 1
        }
    ]
}
```
- Response :
```
{
    "success": true,
    "message": "User created successfully!",
    "data": {
        "userId": 114,
        "username": "john_doe4",
        "password": "",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "age": 30,
        "email": "john.doe@example.com",
        "isActive": true,
        "hobbies": [
            "reading",
            "traveling"
        ],
        "address": {
            "street": "123 Main St",
            "city": "Cityville",
            "country": "Countryland"
        },
        "orders": [
            {
                "productName": "Product A",
                "price": 19.99,
                "quantity": 2,
                "_id": "65849cf9ffb204ad02c3ee56"
            },
            {
                "productName": "Product B",
                "price": 29.99,
                "quantity": 1,
                "_id": "65849cf9ffb204ad02c3ee57"
            }
        ],
        "_id": "65849cf9ffb204ad02c3ee55",
        "__v": 0
    }
}
```
## Get all Users
- Endpoint: GET /api/users
- Description: Get all the users from DB
- Response :
```
{
  "success": true,
  "message": "Users fetched successfully!",
  "data": [
    // List of user data
  ]
}
```
## Get specific User
- Endpoint: GET /api/users/:userId
- Description: Get a specific user from DB
- Response :
```
{
  "success": true,
  "message": "User fetched successfully!",
  "data": {
    // User data
  }
}
```
## Update User
- Endpoint: PUT /api/users/:userId
- Description: Perform an Update Operation
- Request Body :
```
{
  "username": "updated_username",
  // Other fields to update
}
```
- Response :
```
{
  "success": true,
  "message": "User updated successfully!",
  "data": {
    // Updated user data
  }
}
```
## Delete User
- Endpoint: DELETE /api/users/:userId
- Description:Deletes a specific user based on the user ID.
- Response :

```
{
  "success": true,
  "message": "User deleted successfully!",
  "data": null
}
```
## Create a New Product
- Endpoint: POST /products
- Description:Creates a new product in the database.
- Request Body :
```
{
  "productName": "Example Product",
  "price": 29.99,
  "quantity": 10
}
```
- Response :
```
{
  "success": true,
  "message": "Product created successfully!",
  "data": null
}
```
## Get All Products
- Endpoint: GET /products
- Description:Retrieves all products from the database.
- Response:
```
{
  "success": true,
  "message": "Products fetched successfully!",
  "data": [
    // List of product data
  ]
}
```
## Get All Products
- Endpoint: GET /products
- Description:Retrieves all products from the database.
- Response:
```
{
  "success": true,
  "message": "Products fetched successfully!",
  "data": [
    // List of product data
  ]
}
```



