# Quora-Askify RESTful API  

A small **Express.js project** built to understand and implement the core RESTful API concepts like **GET, POST, PATCH, and DELETE**.  
This app manages simple in-memory posts (like mini Quora answers), supports adding, editing, deleting posts, and uses **EJS templates** for rendering pages.

---

## Features
- RESTful routes using **Express**
- CRUD operations for posts
- **EJS** templates for frontend rendering
- Uses **method-override** for PATCH and DELETE
- Static assets served from `/public`
- Unique ID generation using **uuid**

---

## Tech Stack
| Layer | Technology |
|--------|-------------|
| Backend | Node.js |
| Framework | Express.js |
| Template Engine | EJS |
| Extra Packages | method-override, uuid |
| Port | 8080 |

---

## Setup and Run

### 1. Clone the Repository  
```bash
git clone https://github.com/Aditya-SE/quora-askify-api.git
cd quora-askify-api
```
### 2. Install Dependencies
```
npm install
```
### 3. Run the Server
```
node index.js
```
Server will start at:
```
http://localhost:8080
```
---

## Folder Structure:

/public         - Static files
/views          - EJS templates (index.ejs, new.ejs, edit.ejs, show.ejs)
index.js        - Main application file
package.json    - Project configuration

---

## API Endpoints:

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | /posts          | Display all posts       |
| GET    | /posts/new      | Show form to add a post |
| POST   | /posts          | Create a new post       |
| GET    | /posts/:id      | View a single post      |
| GET    | /posts/:id/edit | Edit post page          |
| PATCH  | /posts/:id      | Update an existing post |
| DELETE | /posts/:id      | Delete a post           |

---

## Learning Goals:

This project helped me understand:
*How RESTful APIs work with Express.js
*Handling form data with express.urlencoded()
*Using method-override to enable PUT/PATCH/DELETE via forms
*Basic template rendering with EJS





