# Argent Bank — Banking App (Frontend)

A full-stack banking web application built with React and Redux, featuring API authentication and state management, as part of a front-end development training program.

> This is the **frontend** repository. It must be run alongside the [backend repository](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

## Project Overview

This project was completed as part of a structured front-end development curriculum. The goal was to build the frontend of a banking application and connect it to an existing REST API, handling authentication and user data management.

Beyond the implementation, the project also involved **designing and documenting new API endpoints** for a transactions feature using Swagger — modeling the routes and data interactions before any code was written.

## Objectives

- Build a responsive banking dashboard with React
- Implement authentication (login, token handling, logout) via REST API calls
- Manage global application state with Redux
- Model and document new API endpoints with Swagger

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

## Key Features

- **Authentication flow** — login, session persistence with JWT token, and logout
- **User dashboard** — display and edit user profile data fetched from the API
- **Redux state management** — global state for user session and data
- **Swagger API design** — proposed and documented endpoints for the transactions feature

## What I Learned

- Integrating a React frontend with a REST API
- Implementing authentication with JWT tokens
- Managing global state with Redux (actions, reducers, store)
- Modeling and documenting API endpoints with Swagger
- Thinking about both frontend implementation and API design together

## Context

This project is part of the **OpenClassrooms Front-End Developer** curriculum. It introduced Redux for state management and covered the full cycle of API integration — from authentication to designing new endpoints.

---

## Getting Started

### Prerequisites

- Node.js v12
- The [backend repository](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) must be running first

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

The app is available at: `http://localhost:3000`

Build for production:

```bash
npm run build
```

## Test Accounts

| Name | Email | Password |
|---|---|---|
| Tony Stark | tony@stark.com | password123 |
| Steve Rogers | steve@rogers.com | password456 |
