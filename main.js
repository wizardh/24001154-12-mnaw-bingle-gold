const express = require('express');
const app = express();
const PORT = 2000;

// Import dependecy
// Import repository
const UserRepository = require('./src/repository/user');
const ItemRepository = require('./src/repository/item');
const OrderRepository = require('./src/repository/order');

// Import service
const AuthService = require('./src/service/auth');
const UserService = require('./src/service/user');
const ItemService = require('./src/service/item');
const OrderService = require('./src/service/order');

// Import handler
const AuthHandler = require('./src/handler/auth');
const UserHandler = require('./src/handler/user');
const ItemHandler = require('./src/handler/item');
const OrderHandler = require('./src/handler/order');

app.use(express.json());

// Auth 
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authHandler = new AuthHandler(authService);

app.post('/auth/login', authHandler.login);
app.post('/auth/register', authHandler.register);

// User
const userService = new UserService(userRepository)
const userHandler = new UserHandler(userService);

app.get('/users', userHandler.getAll);

// Item
const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository);
const itemHandler = new ItemHandler(itemService);

app.get('/items', itemHandler.getAll);

// Order
const orderRepository = new OrderRepository();
const orderService = new OrderService(itemRepository);
const orderHandler = new OrderHandler(itemService);

app.get('/orders', orderHandler.getAll);


app.use((req, res, next) => {
  res.status(404).send({
    status: "fail",
    message: "not found"
  })
});

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});