# Prisma ORM Proof Of Concept (POC)

The code in this repo demonstrates use of [prisma](https://www.prisma.io/) as an ORM using two tables with geography data sets (continents and countries).

This code uses the following libaries:

- [prisma](https://www.prisma.io/)
- [typescript](https://www.typescriptlang.org/)
- [express](https://expressjs.com/)
- [postgresql](https://www.postgresql.org/)
- [prisma-repo](https://github.com/krsbx/prisma-repo) - generate repositories and models 

This code assumes usage of prisma requires typescript

This proof of concept uses a repository to get data from database and uses [express](https://expressjs.com/).

## Get Started


To get started perform the following steps:

### 1) Install PostGreSQL for your Operating System (OS)

https://www.postgresql.org/download/

### 2) Create PostGreSQL database to use in this POC

After installing locally you should have a database server - you will need to do these steps:
#### 2.1 Create an empty database named "prisma_orm_poc"

#### 2.2 enable access to the credentials from .env file (username: postgres)

### 3) Install npm packages

Install the required packages via standard command:

```npm install```

### 4) Create database schema using prisma migrations

The database schema creation is managed by prisma migrations. The initial migrations file is under prisma/migrations folder.

To setup the database run ```npm run db:migrations```

See more: https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production

### 5) Populate database with data using prisma data seeding

The data in the database is setup via "seeding"

See file ```prisma/runSeeders.ts```

run ```npm run db:seed``` to populate the database

See More:

https://www.prisma.io/docs/guides/database/seed-database

### 6) run the application

The application is configured to use nodemon to monitor for file changes and you can run command to start the application using it. You will see console information with url and port.

```npm run start```

### 7) exercise the application via postman OR thunder client

#### 7.1 - Get a client

1) https://www.thunderclient.com/

2) https://www.getpostman.com - Download and install https://www.getpostman.com 

#### 7.2 - Import "postman" collection and run requests

Use the client of your choice to run the requests to see api data and responses after importing the collection in the "postman" folder

### 8) Prisma Learnings

- https://www.prisma.io/docs/concepts/components/prisma-client/pagination
