# E-Wallet

Welcome to the E-Wallet project! This repository contains the code for an electronic wallet application designed to simplify financial transactions and management.

- **Technologies:** Vite, React, JavaScript, Express, Node.js, MongoDB, Axios, React Router, Zod

- **Description:** Developed a secure E-Wallet application with a focus on backend functionality and user management.
  
## Features

- **User Authentication:** Secure sign-up and login mechanisms.
- **Balance Management:** View your wallet balance.
- **Send Money:** Effortlessly send money between users.


- **Backend:**
  - **Framework:** Node.js with Express for RESTful APIs.
  - **Routes:**
    - **/user:**
      - **Authentication:** Implemented sign-in and sign-up with JWT.
      - **Update:** Enabled user detail updates.
      - **Bulk:** Provided a JSON list of all users in the database.
    - **/account:** Managed balance retrieval and money transfers.
  - **Database:** Utilized MongoDB for storing user and account data.
  - **Middlewares:** Implemented input validation and JWT authentication.

- **Frontend:**
  - **Framework:** React with Vite.
  - **Routing:** Used React Router for page navigation.
  - **Components:** Developed reusable UI components and integrated with backend via Axios.

- **Key Achievements:**
  - **JWT Authentication:** Secured user management with JWT.
  - **Scalable Backend:** Built RESTful APIs with Node.js and MongoDB.

 
## Installation

To get started with the E-Wallet application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vidit45/E-Wallet.git
   ```

## Navigate into the project directory:

  ```bash
    cd E-Wallet
  ```
## Follow the below steps:

  ```bash
    npm install
    cd backend
    node index.js
    cd frontend
    npm i
    npm run dev
    
  ```




