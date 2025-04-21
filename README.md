# CRUD API In NODEJS(Sequelize + MySQL)
A simple Create, Read, Update, and Delete APIs in NodeJS using Sequelize as an ORM and MySQL as database

## Endpoints

### **GET** api/user
- Get all users form database
\n
### **POST** api/user
- Create a record in database (required firstName, lastName, email)
\n
### **GET** api/user/:id
- Retrieve a record based on __ID__ passed in req.params
\n
### **PATCH** api/user/:id
- Update a record in database requires firstName, lastName, or email
\n
### **DELEET** api/user/:id
- Delete a record if it exits in database based on __ID__ passed in req.param
