const { users: UserModel } = require("../../models");

class UserRepository {
  constructor() {}

  async getAll() {
    const getUsers = await UserModel.findAll();

    return getUsers;
  }

  async getById(id) {
    const getUsers = await UserModel.findAll({
      where: {
        id: id,
      },
    });

    return getUsers;
  }

  async getByEmail(email) {
    const getUsers = await UserModel.findAll({
      where: {
        email: email,
      },
    });

    return getUsers;
  }

  async add(user) {
    const newUser = await UserModel.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return newUser;
  }
}

module.exports = UserRepository;
