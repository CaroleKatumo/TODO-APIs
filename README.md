# To-Do List REST API

This project is a simple **To-Do List REST API** built with Node.js, Express, and MySQL. It follows best practices for RESTful API design, with Sequelize as the ORM for database interactions.

---

## Features

- Create, read, update, and delete (CRUD) to-do items.
- MySQL database integration using Sequelize.
- Proper status codes and custom response structure (`statusCode`, `status`, `message`, `data`).
- Structured route handling and middleware setup.
- CORS-enabled for cross-origin requests.

---

## Prerequisites

- **Node.js** (v14 or higher)
- **MySQL** (Ensure you have a running MySQL instance)
- **npm** or **yarn**

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-list-api
