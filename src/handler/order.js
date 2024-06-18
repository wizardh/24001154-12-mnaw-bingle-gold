class OrderHandler {
  constructor(orderService) {
    this.orderService = orderService;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
  }

  getAll(req, res) {
    const orders = this.orderService.getAll();
    res.status(200).send({
      orders: orders,
    });
  }

  create(req, res) {
    const order = req.body;
    const createdOrder = this.orderService.create(order);

    res.status(201).send({
      message: createdOrder,
    });
  }

  getById(req, res) {
    try {
      const id = req.params.id;
      const order = this.orderService.getById(id);
      console.log(order);
      res.send({
        order: order,
      });
    } catch (e) {
      res.status(404).send({
        error: true,
        message: e.message,
      });
    }
  }
}

module.exports = OrderHandler;
