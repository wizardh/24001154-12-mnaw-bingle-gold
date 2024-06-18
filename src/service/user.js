class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAll() {
    const users = this.userRepository.getAll();
    return users;
  }

  getByEmail(email) {
    const user = this.userRepository.getByEmail(email);
    if (user) {
      return user;
    } else {
      throw new Error(`Email ${email} tidak terdaftar!`);
    }
  }

  register({ name, email, password }) {
    let newData = {
      name: name,
      email: email,
      password: password,
    };

    if (!this.userRepository.getByEmail(email)) {
      return this.userRepository.add(newData);
    } else {
      throw new Error(`Email ${email} sudah terdaftar!`);
    }
  }

  login({ email, password }) {
    const findUser = this.userRepository.getByEmail(email);

    if (findUser) {
      if (findUser.password === password) {
        return "Login berhasil";
      } else {
        throw new Error("Email atau password salah");
      }
    } else {
      throw new Error("Email atau password salah");
    }
  }

  updateById(id) {}

  deleteById(id) {}
}

module.exports = UserService;
