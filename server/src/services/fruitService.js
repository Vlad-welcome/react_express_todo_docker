import bcrypt from "bcrypt";
import Fruit from "./../models/fruitModel.js";

class FruitService {
  async getAll() {
    return await Fruit.findAll({ limit: 20, offset: 0 });
  }

  async add(fruit) {
    const { name } = fruit;
    const res = await Fruit.create({ name: name });
    return res;
  }

  async update(fruit) {
    const { id, name } = fruit;
    const fruitdb = await Fruit.findByPk(id);
    const res = await fruitdb?.update({ name: name });
    return res;
  }

  async delete(id) {
    const res = await Fruit.destroy({ where: { id } });
    return res > 0;
  }
}

export default new FruitService();
