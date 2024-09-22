# Express API on Node.js Examples

This repository contains three examples of Express.js APIs that handle different types of functionality: managing facilitators, task assignment, and a ticketing system. Each example showcases the use of Express.js, SQL Server integration (using `mssql`), and modern JavaScript techniques.

## Files Overview

1. **facilitatorExample.js** - Manages a facilitator's skills and onboarding status.
2. **taskExample.js** - Manages task creation, task assignment, and moving tasks between different sections (in progress, ready, incomplete, completed).
3. **ticketingExample.js** - Handles ticket creation and management for a ticketing system, with fields like request title, description, and more.

## How to Use

### Prerequisites
- **Node.js** - Ensure that Node.js is installed on your system.
- **Express.js** - This is used as the framework for the API.
- **mssql** - This package is used for SQL Server database integration.

Install the dependencies by running:

```bash
npm install express mssql
```

Setting Up the API
Clone the repository:


```bash
git clone https://github.com/your-repo-name/node-express-api-examples.git
cd node-express-api-examples
```


Install dependencies:
Each file uses the express and mssql packages. If these are not already installed, run:

```bash
npm install express mssql
```


Database Setup:
Each example expects a SQL Server database to store and retrieve data. Ensure you have a SQL Server database running, and update the connection configuration in each file accordingly.


```javaScript
// Example connection config in each file
const poolPromise = new sql.ConnectionPool({
  user: 'your-db-username',
  password: 'your-db-password',
  server: 'your-db-server',
  database: 'your-database-name',
  options: {
    encrypt: true, // For Azure SQL
    trustServerCertificate: true, // For self-signed certificates
  },
}).connect();
```


Running the API Examples
For each of the three examples, you can create an Express server and start it by following these steps.


facilitatorExample.js
This file allows you to manage a facilitator's skills and onboarding status. Add or update facilitators, and assign skills with a simple API endpoint.


```javaScript
// To start the server
node facilitatorExample.js
```

taskExample.js
The task management API allows for creating new tasks, updating their status (in progress, ready, incomplete, completed), and moving tasks between sections.

```javaScript
// To start the server
node taskExample.js
```

ticketingExample.js
This example implements a ticketing system API, allowing you to create new tickets with fields like request title, description, and requestor information. It uses SQL Server for storing the ticket data.


```javaScript
// To start the server
node ticketingExample.js
```


Example API Routes
Facilitator Example:


POST /facilitators/add: Adds a new facilitator with a name and a set of skills.
POST /facilitators/update: Updates the facilitator's skills or onboarding status.

Task Example:


POST /tasks/new: Adds a new task to a section (in progress, ready, incomplete).
POST /tasks/move: Moves a task from one section to another (e.g., from in progress to completed).

Ticketing Example:


POST /tickets/new: Submits a new ticket request with a title, description, and various ticket fields.





### Additional Notes:
- Make sure you replace the `git clone` URL with your actual repository URL.
- Ensure the database connection configurations are mentioned clearly for users to update.
- You can modify the content as per any additional needs specific to your project.


