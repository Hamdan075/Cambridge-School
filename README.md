# Cambridge School Website

A modern, full-stack educational web application built for Cambridge School (Mian Channu) using the **MERN Stack** (MongoDB, Express, React, Node.js).

## Features

- **Dynamic Content:** All site content (Mission/Vision, Facilities, Testimonials, About sections) is dynamically fetched from a MongoDB database using a custom React Context provider.
- **Student Management:** Features a Student Profile portal where administrators can search for students by name, roll number, or class, and add new students directly to the database.
- **Interactive Forms:** "Contact Us" and "Apply Now" (Admission) forms are fully integrated with the backend. Submissions are validated with `react-hook-form` and permanently stored in MongoDB.
- **Smooth Animations:** Custom scroll-triggered animations (`useScrollReveal` hook) provide a premium, modern feel as users navigate the site.
- **Responsive Design:** Fully responsive layout built with custom CSS, ensuring a great experience on both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Vite, React Router DOM, React Hook Form, React Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)

## Project Structure

The repository contains both the frontend React application and the backend Express API:

- `/` (Root): Contains the Vite/React frontend application.
- `/server`: Contains the Node.js/Express backend API and Mongoose models.

## Getting Started

To run this project locally, you will need to start both the frontend and backend development servers.

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` folder and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/cambridgeSchool?retryWrites=true&w=majority
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the project root directory:
   ```bash
   cd "web component"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.
