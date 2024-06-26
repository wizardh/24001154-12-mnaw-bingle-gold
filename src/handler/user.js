class UserHandler {
  constructor(userService) {
    this.userService = userService;

    this.getAll = this.getAll.bind(this);
    this.getByEmail = this.getByEmail.bind(this);
  }

  async getAll(req, res) {
    const serviceRes = await this.userService.getAll();
    res.status(serviceRes.statusCode).send(serviceRes.data);
  }

  async getByEmail(req, res) {
    const email = req.params.email;
    const serviceRes = await this.userService.getByEmail(email);
    res.status(serviceRes.statusCode).send(serviceRes.data);
  }
}

module.exports = UserHandler;
