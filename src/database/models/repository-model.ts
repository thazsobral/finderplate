import { DataTypes } from "sequelize";
import { db } from "../db";

export const RepositoryModel = db.define("repository", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topics: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  }
});