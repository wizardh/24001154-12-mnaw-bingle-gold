class OrderService {
  constructor(orderRepository, itemRepositroy, userRepository) {
    this.orderRepository = orderRepository;
    this.itemRepositroy = itemRepositroy;
    this.userRepository = userRepository;
  }

  async getAll() {
    const orders = await this.orderRepository.getAll();

    return {
      statusCode: 200,
      data: orders,
    };
  }

  async getById(id) {
    const order = await this.orderRepository.getById(id);

    return {
      statusCode: 200,
      data: order[0],
    };
  }

  async create({ user_id, item_id, qty }) {
    // validasi input user_id
    const findUser = await this.userRepository.getById(user_id);
    if ( findUser.length == 0 ) {
      return {
        statusCode: 400,
        data: {
          status: "Error",
          message: "User tidak ditemukan, mohon diperiksa kembali",
        },
      };
    }

    // validasi input item_id
    const findItem = await this.itemRepositroy.getById(item_id);
    if ( findItem.length == 0) {
      return {
        statusCode: 400,
        data: {
          status: "Error",
          message: "Item tidak ditemukan, mohon diperiksa kembali",
        },
      };
    }

    // validasi qty
    if (typeof qty != "number") {
      return {
        statusCode: 400,
        data: {
          status: "Error",
          message: "Payload yang dikirim tidak sesuai, mohon diperiksa kembali",
        },
      };
    }

    let newData = {
      user_id: user_id,
      item_id: item_id,
      price: findItem[0].price,
      qty: qty,
      total: findItem[0].price * qty,
      status: "Pesanan Dibuat",
    };

    const createdOrder = await this.orderRepository.add(newData);
    return {
      statusCode: 200,
      data: createdOrder,
    };
  }

  async update({ id, status }) {
    // validasi input id
    const findOrder = await this.orderRepository.getById(id);
    if ( findOrder.length == 0 ) {
      return {
        statusCode: 400,
        data: {
          status: "Error",
          message: "Order tidak ditemukan, mohon diperiksa kembali",
        },
      };
    }

    let newData = {
      id: id,
      status: status,
    };

    const updatedOrder = await this.orderRepository.update(newData);
    return {
      statusCode: 200,
      data: updatedOrder,
    };
  }  
}

module.exports = OrderService;
