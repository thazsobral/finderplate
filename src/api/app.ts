import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
// import { User } from "../database/models/user.js";

class App {
  express: Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan("dev"));
  }

  routes() {
    this.express.use("/", (req, res) =>
      res.json({ msg: "Hi, I'm Finderplate." })
    );
    this.express.use("/user", async (req, res) => {
      // await User.find({});
    });
  }

  listen(port: number, cb: () => void) {
    this.express.listen(port, cb);
  }
}

export default new App();
