# Personal Expense Tracker Backend

## Description

The Personal Expense Tracker Backend is a Node.js application using the Express framework designed to support a personal expense tracking application. It provides RESTful APIs to manage user data, track expenses, and handle user authentication and authorization.

## Features

- **User Management:** Sign up, login, and update user profiles.
- **Expense Management:** Create, read, update, and delete expense records.
- **Authentication:** Secure authentication with JWT tokens.
- **Password Management:** Password encryption and secure handling.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager) or yarn

### Clone the Repository

```bash
git clone https://github.com/KumaTelila/Personal-Expense-Tracker-Backend.git
cd Personal-Expense-Tracker-Backend
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
PORT=5000
MONGO_URI= your_mongo_string_url
JWT_SECRET=your_jwt_secret
```

### Run the Application

Start the server in development mode:

```bash
npm run dev
# or
yarn dev
```

For production, you can use:

```bash
npm start
# or
yarn start
```

## API Endpoints

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login an existing user
- `PUT /api/users/:id` - Update user details

### Expense Routes

- `POST /api/expenses` - Create a new expense
- `GET /api/expenses` - Get all expenses
- `GET /api/expenses/:id` - Get a specific expense
- `PUT /api/expenses/:id` - Update an expense
- `DELETE /api/expenses/:id` - Delete an expense

### Get Frontend here [Link](https://github.com/KumaTelila/pet-frontend-mui.git)

