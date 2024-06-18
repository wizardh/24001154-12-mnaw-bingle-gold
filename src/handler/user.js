class UserHandler {
  constructor(userService) {
    this.userService = userService;

    // binding --> why?
    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  getAll(req, res) {
    //TODO: mau panggil service untuk get list user
    const users = this.userService.getAll();
    res.status(200).send({
      users: users,
    });
  }

  getByEmail(req, res) {
    //TODO: mau panggil service untuk get list user
    try {
      const email = req.params.email;
      const user = this.userService.getByEmail(email);
      res.send({
        user: user,
      });
    } catch (e) {
      res.status(404).send({
        error: true,
        message: e.message,
      });
    }
  }

  register(req, res) {
    try {
      const newUser = {
        name: req.body["name"],
        email: req.body["email"],
        password: req.body["password"],
      };
      const user = this.userService.register(newUser);

      res.send({
        user: user,
      });
    } catch (e) {
      res.status(400).send({
        error: true,
        message: e.message,
      });
    }
  }

  login(req, res) {
    try {
      const loginCreds = {
        email: req.body["email"],
        password: req.body["password"],
      };
      const login = this.userService.login(loginCreds);
      res.send({
        message: login,
      });
    } catch (e) {
      res.status(400).send({
        error: true,
        message: e.message,
      });
    }
  }
}

module.exports = UserHandler;
