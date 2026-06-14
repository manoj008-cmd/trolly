# Toll Management System

## Overview

The Toll Management System is a full-stack web application developed to automate toll collection and transaction management. The application allows toll operators to record vehicle entries, calculate toll charges automatically, maintain transaction history, search transactions, generate receipts, and monitor toll collection statistics through a dashboard.

---

## Features

### Authentication

* Login Interface

### Dashboard

* Total Transactions
* Total Revenue
* Average Toll Collection
* Unique Vehicles Count
* Recent Transactions Overview

### Transaction Management

* Add New Toll Transaction
* Automatic Toll Calculation
* Vehicle Type Selection
* Toll Plaza Selection
* Date & Time Recording

### Transaction History

* View All Transactions
* Search by Vehicle Number
* Delete Transactions
* Display Toll Plaza Information
* Display Transaction Date & Time

### Receipt Generation

* Generate Toll Receipt
* Display Transaction Details
* Print Receipt

---

## Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Spring Boot
* Java
* Maven

### Database

* MongoDB

---

## Project Structure

### Frontend Structure

```text
src
│
├── components
│   └── Sidebar.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── AddTransaction.jsx
│   ├── History.jsx
│   └── Receipt.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```

### Backend Structure

```text
src/main/java/com/toll/tollbackend
│
├── controller
│   └── TransactionController.java
│
├── model
│   └── Transaction.java
│
├── repository
│   └── TransactionRepository.java
│
├── config
│   └── CorsConfig.java
│
└── TollbackendApplication.java
```

---

## Database Schema

### Transaction Collection

| Field         | Type    |
| ------------- | ------- |
| id            | String  |
| vehicleNumber | String  |
| vehicleType   | String  |
| tollPlaza     | String  |
| dateTime      | String  |
| amount        | Integer |

---

## API Endpoints

### Add Transaction

```http
POST /api/transactions
```

### Get All Transactions

```http
GET /api/transactions
```

### Search Transaction

```http
GET /api/transactions/search/{vehicleNumber}
```

### Delete Transaction

```http
DELETE /api/transactions/{id}
```

---

# How to Run the Project

## Prerequisites

Make sure the following software is installed:

* Java 21 or later
* Maven
* Node.js
* MongoDB
* Git

---

## Step 1: Start MongoDB

Ensure MongoDB is running locally.

Default MongoDB URL:

```text
mongodb://localhost:27017
```

---

## Step 2: Run Backend (Spring Boot)

Open the backend project directory:

```bash
cd tollbackend
```

Build the project:

```bash
mvn clean install
```

Start the backend server:

```bash
mvn spring-boot:run
```

Backend URL:

```text
http://localhost:8080
```

### Verify Backend

Open:

```text
http://localhost:8080/api/transactions
```

Expected Output:

```json
[]
```

or transaction records in JSON format.

---

## Step 3: Run Frontend (React)

Open frontend project:

```bash
cd toll-management
```

Install dependencies:

```bash
npm install
```

Start Vite development server:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Step 4: Use the Application

### Login

* Open the application.
* Access the Login Page.

### Dashboard

* View total transactions.
* View total revenue.
* View average toll collection.
* View unique vehicle count.
* View recent transactions.

### Add Transaction

* Enter vehicle number.
* Select vehicle type.
* Select toll plaza.
* Toll amount is calculated automatically.
* Save transaction.

### Transaction History

* View all transactions.
* Search transactions by vehicle number.
* Delete transactions.
* View toll plaza information.
* View transaction date and time.

### Receipt Generation

* Generate receipt after successful transaction.
* Display transaction details.
* Print receipt.

---

## Application Workflow

```text
Login
   ↓
Dashboard
   ↓
Add Transaction
   ↓
Save Transaction
   ↓
Store in MongoDB
   ↓
Generate Receipt
   ↓
View Transaction History
   ↓
Search / Delete Transactions
```

---

## Dashboard Analytics

The dashboard displays:

* Total Transactions
* Total Revenue
* Average Toll Collection
* Unique Vehicles Count
* Recent Transactions

---

## Troubleshooting

### MongoDB Connection Error

Verify MongoDB is running:

```text
mongodb://localhost:27017
```

### Backend Not Starting

Run:

```bash
mvn clean install
```

Check for build errors.

### Frontend Not Loading

Reinstall dependencies:

```bash
npm install
npm run dev
```

### CORS Error

Ensure backend CORS configuration allows:

```text
http://localhost:5173
```

---

## Future Enhancements

* JWT Authentication
* Role-Based Access Control
* Online Payment Gateway
* PDF Receipt Download
* Email Notifications
* Revenue Charts and Analytics
* Multi Toll Plaza Management
* Cloud Deployment

---

## Default Ports

| Service             | Port  |
| ------------------- | ----- |
| React Frontend      | 5173  |
| Spring Boot Backend | 8080  |
| MongoDB             | 27017 |

---

## Developed By

**Project:** Toll Management System

**Technology Stack:** React + Spring Boot + MongoDB

**Type:** Full Stack Web Application
