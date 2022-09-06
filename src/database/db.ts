import { Sequelize } from "sequelize";

const url = process.env.DB_URL

export const db = new Sequelize(url, {
    dialect: "postgres"
})