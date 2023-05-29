# Demo Test Project

This is a demo test project that demonstrates how to use:

- Node.js Express API
- Typescript
- Prisma ORM
- Jest to test

## Requirements

Before you begin, make sure that you have the following installed on your system:

- Node.js (v14.0 or higher)
- npm (v6.14 or higher)

## Installation

To install the project dependencies, run the following command:

```shell
npm install
```

## Setting up the Database

This project uses Prisma ORM and a Sqlite.
To set up the database, run the following commands:

```shell
npx prisma db push
npx prisma db seed
```

> Note: this is not required, as setting up the database has no real purpose other than to check db relationships

## Running the Tests

To run the tests, run the following command:

```shell
npm test
```

> Note: They didint run witout the jest.config.ts and than some pushing required, only made true by the tsconfig.json auto created via the `npx tsc --init`

hint: [getting started]("https://www.youtube.com/watch?v=PM58NEMJgMw&t=2430s")