class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async getAll() {
    const items = await this.itemRepository.getAll();

    return {
      statusCode: 200,
      data: items,
    };
  }

  async getById(id) {
    const items = await this.itemRepository.getById(id);

    return {
      statusCode: 200,
      data: items,
    };
  }

  async create({ name, price }) {
    // validasi input
    console.log(typeof price);
    if (!name || !price || typeof price != "number") {
      return {
        statusCode: 400,
        data: {
          status: "Error",
          message: "Payload yang dikirim tidak sesuai, mohon diperiksa kembali",
        },
      };
    }

    let newData = {
      name: name,
      price: price,
    };

    const createdItem = await this.itemRepository.add(newData);
    return {
      statusCode: 200,
      data: createdItem,
    };
  }
}

module.exports = ItemService;
