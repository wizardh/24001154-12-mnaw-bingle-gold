class OrdersService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  getAll() {
    const orders = this.orderRepository.getAll();
    return orders;
  }

  create(order) {
    // TODO: pengecekan apakah user terdaftar
    this.orderRepository.insert(order);
    return "berhasil menambahkan order";
  }

  getById(id) {
    const order = this.orderRepository.getById(id);
    if (order) {
      return order;
    } else {
      throw new Error(`Id ${id} tidak terdaftar!`);
    }
  }

  updateById(id) {}

  deleteById(id) {}
}

module.exports = OrdersService;
