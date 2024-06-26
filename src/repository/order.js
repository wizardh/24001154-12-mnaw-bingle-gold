class OrderRepository {
  constructor() {}

  getAll() {
    return this.orders;
  }

  create(order) {
    this.orders.push(order);
    return orders;
  }

  getById(id) {
    return this.orders.find((id) => orders.id === Number(id));
  }

  deleteByID(id) {
    this.orders.splice(id, 1);
    return true;
  }
}

module.exports = OrderRepository;
