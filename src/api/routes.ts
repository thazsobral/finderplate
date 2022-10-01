import express, { Request, Response } from "express";
import RepositoryController from "./controllers/repository-controller";

const router = express.Router();

// GET
router.get("/", (resquest: Request, response: Response) => response.status(200).send("Hi! I'm finderplate 😄."));
router.get("/repos", RepositoryController.findAll);
router.get("/repo/:id", RepositoryController.findOne);
router.get("/repos/topics", RepositoryController.findTopics);
router.get("/repos/author/:author", RepositoryController.findAuthors);
// POST
router.post("/repo", RepositoryController.create);
// PUT
router.put("/repo/:id", RepositoryController.update);
// DELETE
router.delete("/repo/:id", RepositoryController.destroy);

export { router };