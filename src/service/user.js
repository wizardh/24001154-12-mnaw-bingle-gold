class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAll() {
    const users = await this.userRepository.getAll();

    return {
      statusCode: 200,
      data: users,
    };
  }

  async getById(id) {
    const user = await this.userRepository.getById(id);

    if (user.length > 0) {
      return {
        statusCode: 200,
        data: user[0],
      };
    } else {
      return {
        statusCode: 400,
        data: {
          status: "error",
          message: "Id tidak ditemukan",
        },
      };
    }
  }

  async getByEmail(email) {
    const user = await this.userRepository.getByEmail(email);

    if (user.length > 0) {
      return {
        statusCode: 200,
        data: user[0],
      };
    } else {
      return {
        statusCode: 400,
        data: {
          status: "error",
          message: "Email tidak ditemukan",
        },
      };
    }
  }
}

module.exports = UserService;
