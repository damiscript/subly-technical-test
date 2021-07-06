# Subly Test

Dami Adesoye submission for the Junior Developer Subly test

# 1.How to run

## Setup

Ensure .env files on the server is properly setup for this submission they have been included to the repo to make testing easier but change the environment variables to your use cases.

## Step 1

Once the database has been set up with .env files configured run the server with the node or nodemon based on your preference and global configuration. It is to note nodemon is recommended.

```
nodemon index
```

or

```
node index
```

## Step 2

Run the client-side of the application with the following command.

```
npm start
```

## Connecting with the Server

Within the backend, there is a file called server.js within the "src" directory update the baseURL in this file to that of the server.

## Creating A User

With the client-side of the application running and the server, you can create a user by clicking the Sign-Up button in the header and providing the necessary user details to match the database schema.

## Creating A File

To Create a file go to the "/files/add" route of the client application, It is worth noting that a user must first be created before a file can be added as the file and user who uploads them are related.

## Dashboard

To view the dashboard go to the home "/". As new files and users upload to the database the dashboard data will be updated when visited.

# Approach

## 2. The Backend

After configuring the database the back-end was next to be configured, I created the routes and controllers for the routes which were tested with Postman to ensure that data was retrieved and sent back properly.

## 3. The Frontend

Attempted following TDD at a per-component level but due to the time constraints, this practice could not be seen all the way through.

Created a components folder to handle all the necessary parts of the application with typescript

Installed axios to handle data-fetching of the application and used a consistent "/api" route for all back-end operations.

Each component was structured with a name signifying the components focus and multiple "index" files of different types to allow easy access within the folder

# Things I would change

In the future, if given this test with more time constraints I would like to have more client-side and server-side tests to ensure the data is correct. I would also have liked to make the way the variables and types connect with the database schema more consistent.
