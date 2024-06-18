const items = [
  {
    id: 1,
    name: "laptop macbook",
    price: 1234124,
  },
  {
    id: 2,
    name: "laptop windows",
    price: 1234124,
  },
  {
    id: 3,
    name: "hp samsung",
    price: 1234124,
  },
];

class ItemRepository {
  constructor() {
    this.items = items;
  }

  getAll() {
    return this.items;
  }

  create(item) {
    this.items.push(item);

    return item;
  }

  getById(id) {
    return this.items.find((item) => item.id === Number(id));
  }

  deleteByID(id) {
    this.items.splice(id, 1);
    return true;
  }
}

module.exports = ItemRepository;
