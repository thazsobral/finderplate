import express from "express";
import RepositoryController from "./controllers/repository-controller";

const router = express.Router();

// GET
router.get("/repos", RepositoryController.findAll);
router.get("/repos/topics", RepositoryController.findTopics);
router.get("/repo/:id", RepositoryController.findOne);
// POST
router.post("/repo", RepositoryController.create);
// PUT
router.put("/repo/:id", RepositoryController.update);
// DELETE
router.delete("/repo/:id", RepositoryController.destroy);

export { router };