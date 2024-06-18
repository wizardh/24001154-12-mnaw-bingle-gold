const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// import layers
const UserRepository = require("./src/repository/user.js");
const UserService = require("./src/service/user.js");
const UserHandler = require("./src/handler/user.js");

const ItemRepository = require("./src/repository/item.js");
const ItemService = require("./src/service/item.js");
const ItemHandler = require("./src/handler/item.js");

const OrderRepository = require("./src/repository/order.js");
const OrderService = require("./src/service/order.js");
const OrderHandler = require("./src/handler/order.js");

// Import middleware
const logger = require("./src/middleware/logger");
const internalServerErrorHandler = require("./src/middleware/internalServerError");

app.use(express.json()); // untuk akses data raw json dari req.body
app.use(logger);
app.use(express.static("public"));

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository, userRepository);
const itemHandler = new ItemHandler(itemService);

const orderRepository = new OrderRepository();
const ordertService = new OrderService(orderRepository);
const orderHandler = new OrderHandler(ordertService);


app.get("/users", userHandler.getAll);
app.get("/users/:email", userHandler.getByEmail);
app.post("/register", userHandler.register);
app.post("/login", userHandler.login);

app.get("/items", itemHandler.getAll);
app.get("/items/:id", itemHandler.getById);
app.post("/items", itemHandler.create);
// app.delete('/items/:id', itemHandler.getById)
// app.put('/items/:id')

app.get("/orders", orderHandler.getAll);
app.post("/orders", orderHandler.create);
// app.delete('/categories/:id', orderHandler.getById)
// app.put('/categories/:id')

app.use(internalServerErrorHandler);
app.use((req, res, next) => {
  res.status(404).send({
    status: "fail",
    message: "not found",
  });
});

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
