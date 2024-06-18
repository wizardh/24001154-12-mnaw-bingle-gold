class ItemService {
  constructor(itemRepository, userRepository) {
    this.itemRepository = itemRepository;
    this.userRepository = userRepository;
  }

  getAll() {
    return this.itemRepository.getAll();
  }

  create(item) {
    this.itemRepository.insert(item);
    return "berhasil menambahkan item";
  }

  getById(id) {
    const item = this.itemRepository.getById(id);
    console.log(item);
    if (item) {
      return item;
    } else {
      throw new Error(`Id ${id} tidak terdaftar!`);
    }
  }

  updateById(id) {}

  deleteById(id) {}
}

module.exports = ItemService;
