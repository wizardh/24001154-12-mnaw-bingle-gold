const { items: ItemModel } = require("../../models");

class ItemRepository {
  constructor() {}

  async getAll() {
    const getItems = await ItemModel.findAll();

    return getItems;
  }

  async getById(id) {
    const getItem = await ItemModel.findAll({
      where: {
        id: id,
      },
    });

    return getItem;
  }

  async add(item) {
    const newItem = await ItemModel.create({
      name: item.name,
      price: item.price,
    });

    return newItem;
  }
}

module.exports = ItemRepository;
