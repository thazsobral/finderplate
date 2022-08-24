import { Sequelize } from "sequelize";

const url = 'postgres://ylcvybhu:i0zzAuso82pTQ0xiKC3au_fYp8MYHCLT@tiny.db.elephantsql.com/ylcvybhu'

export const db = new Sequelize(url ,{
    dialect: "postgres"
})