import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Fruit extends Model {}

Fruit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Fruit",
    tableName: "fruits",
  },
);

export default Fruit;
