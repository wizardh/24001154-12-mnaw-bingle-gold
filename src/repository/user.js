const users = [
  {
    name: "Adhi",
    email: "adhi@gmail.com",
    password: "adhi123",
  },
  {
    name: "Hanvir",
    email: "hanvir@gmail.com",
    password: "hanvir123",
  },
  {
    name: "Adit",
    email: "adit@gmail.com",
    password: "adit123",
  },
];

class UserRepository {
  constructor() {
    // TODO:
    this.users = users;
  }

  getAll() {
    // TODO:
    return this.users;
  }

  add(user) {
    // TODO:
    this.users.push(user);
    return user;
  }

  getByID(id) {
    // TODO:
    return this.users[id];
  }

  getByEmail(email) {
    // TODO:
    return this.users.find((user) => user.email === email);
  }

  deleteByID(id) {
    // TODO:
    this.users.splice(id, 1);
    return true;
  }
}

module.exports = UserRepository;
