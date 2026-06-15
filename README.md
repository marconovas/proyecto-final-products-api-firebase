# Product Management API

REST API developed with Node.js and Express for managing products. The project implements authentication using JWT, data persistence with Firebase Firestore, and a layered architecture following backend development best practices.

## Features

- User authentication with JWT
- Protected routes using Bearer Token
- Product CRUD operations
- Firebase Firestore integration
- Request validation
- Centralized error handling
- Middleware-based architecture
- Environment variable configuration
- CORS support

## Technologies

- Node.js
- Express.js
- Firebase Firestore
- JSON Web Token (JWT)
- dotenv
- CORS
- body-parser

## Project Structure

```text
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
└── index.js
```

## Installation

```bash
git clone <repository-url>
cd product-management-api
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

## Running the Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/auth/login | User login |

### Products

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| POST | /api/products | Create product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

## Authentication

Protected endpoints require a Bearer Token:

```http
Authorization: Bearer <token>
```

## HTTP Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

## Author

Marco Novas
