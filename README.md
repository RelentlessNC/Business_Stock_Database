# Business Stock Database

## Purpose

This API routing-based application allows the user to create a database and track the inventory of items in stock using request.body JSON objects.

## [VIDEO DEMO 1](https://youtu.be/ioy8QAJbmYw)

## [VIDEO DEMO 2](https://youtu.be/Owf9U7LP_Jk)

## Technologies Used

- JavaScript
- Node.js
- [Expressjs](https://expressjs.com/)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Insomnia Core](https://insomnia.rest/)

## Commands to run program

- terminal: npm install
- terminal: mysql -u root -p
- mysql: source db/schema.sql
- mysql: exit
- terminal: npm run seed
- terminal: node server.js

## Sample Demos

The following animations show examples of the application's API routes being tested in Insomnia Core.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![image](./assets/images/demo1.gif)

In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![image](./assets/images/demo2.gif)

In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![image](./assets/images/demo3.gif)

In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”

## Database Models

The database contains the following four models:

- Category
  - id
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
  - category_name
    - String
    - Doesn't allow null values

- Product
  - id
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
  - product_name
    - String
    - Doesn't allow null values
  - price
    - Decimal
    - Doesn't allow null values
    - Validates that the value is a decimal
  - stock
    - Integer
    - Doesn't allow null values
    - Set a default value of 10
    - Validates that the value is numeric
  - category_id
    - Integer
    - References the category model's id

- Tag
  - id
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
  - tag_name
    - String

- ProductTag
  - id
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
  - product_id
    - Integer
    - References the product model's id
  - tag_id
    - Integer
    - References the tag model's id

## Associations

- Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
- Category has many Product models.
- Product belongs to many Tag models. Using the ProductTag through model allows products to have multiple tags and tags to have many products.
- Tag belongs to many Product models.
