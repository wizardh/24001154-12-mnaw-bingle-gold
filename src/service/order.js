class OrderService {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async getAll() {
    const items = await this.orderRepository.getAll();

    return items;
  }

  async getById(id) {
    const order = await this.orderRepository;
  }

  async create({ name, price }) {
    let newData = {
      name: name,
      price: price,
    };

    const createdItem = await this.orderRepository.add(newData);
    return createdItem;
  }
}

module.exports = OrderService;
