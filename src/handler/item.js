class ItemHandler {
  constructor(itemService) {
    this.itemService = itemService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
  }

  getAll(req, res) {
    const items = this.itemService.getAll();

    res.status(200).send({
      items: items,
    });
  }

  create(req, res) {
    const item = req.body;
    const createdItem = this.itemService.create(item);

    res.status(201).send({
      message: createdItem,
    });
  }

  getById(req, res) {
    try {
      const id = req.params.id;
      const item = this.itemService.getById(id);
      res.send({
        item: item,
      });
    } catch (e) {
      res.status(404).send({
        error: true,
        message: e.message,
      });
    }
  }

  updateById(req, res) {
    const itemId = req.params.id;
  }
}

module.exports = ItemHandler;
