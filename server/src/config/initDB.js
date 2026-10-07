import { sequelize } from "./db.js";
import Fruit from "../models/fruitModel.js";

export default async function initDB() {
  try {
    await sequelize.authenticate();
    console.log("Подключение к БД установлено");

    await sequelize.sync({ logging: false });
    console.log("Таблицы созданы");
  } catch (error) {
    console.error("Ошибка инициализации БД:", error);
    throw error;
  }
}
