import express, { Router, Request, Response, Application } from "express";
import sequelize from "./database/connection";
import Repository from "./database/repository";

const app: Application = express();
const router = Router();
const PORT = 3333;
const HOST = "http://localhost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hi, I'm Finderplate." });
});

app.use(router);

try {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    })

  Repository.sync()
    .then(() => {
      console.log("All models were synchronized successfully.");
    })
    .catch((error) => {
      console.error(error.message);
    })
  app.listen(PORT, () => console.log(`😎 I'm running at ${HOST}:${PORT}.`));  
} catch (error: any) {
  

  console.error(`Error ocurred: ${error.message}`)
}

