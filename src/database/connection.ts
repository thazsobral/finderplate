import { Sequelize, Dialect } from "sequelize";

const connection = {
    database: "ylcvybhu" as string,
    username: "ylcvybhu" as string,
    password: "PcH8GjAAdHr-d9EnNBUJSWVV8Lwp2EgA" as string,
    host: "tiny.db.elephantsql.com" as string,
    dialect: "postgres" as Dialect
}

const sequelize = new Sequelize(
    connection.database,
    connection.username,
    connection.password,
    {
        host: connection.host,
        dialect: connection.dialect
    });

export default sequelize;