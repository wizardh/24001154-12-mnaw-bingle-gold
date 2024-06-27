const { orders: OrderModel, users: UserModel, items: ItemModel } = require("../../models");
class OrderRepository {
  constructor() {}

  async getAll() {
    const getOrders = await OrderModel.findAll({
      include: [
        UserModel, ItemModel
      ]
    });

    return getOrders;
  }

  async getById(id) {
    const getOrder = await OrderModel.findAll({
      where: {
        id: id,
      },
    });

    return getOrder;
  }

  async add(order) {
    const newOrder = await OrderModel.create({
      user_id: order.user_id,
      item_id: order.item_id,
      price: order.price,
      qty: order.qty,
      total: order.total,
      status: order.status
    });

    return newOrder;
  }
}

module.exports = OrderRepository;
