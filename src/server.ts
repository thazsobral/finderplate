import express, { Router, Request, Response } from "express";

const app = express();
const router = Router();
const PORT = 3333;
const HOST = "http://localhost";

app.use(express.json());

router.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hi, I'm Finderplate." });
});

app.use(router);

app.listen(PORT, () => console.log(`😎 I'm running at ${HOST}:${PORT}.`));
