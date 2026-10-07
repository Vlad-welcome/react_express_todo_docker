import bcrypt from "bcrypt";
import Fruit from "./../models/fruitModel.js";

class FruitService {
  async getAll() {
    return await Fruit.findAll({ limit: 20, offset: 0 });
  }
}

export default new FruitService();
