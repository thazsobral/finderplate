import { DataTypes } from "sequelize";
import sequelize from "../connection";

export const Repository = sequelize.define("repository", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  html_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repository_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stargazers_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  forks_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  topics: DataTypes.ARRAY(DataTypes.STRING),
});

export interface RepoAddModel {
  html_url: string
}