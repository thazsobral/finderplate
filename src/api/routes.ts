import express from "express";
import RepositoryController from "./controllers/repository-controller";

const router = express.Router();

router.post("/repo", RepositoryController.create);
router.get("/repos", RepositoryController.findAll);
router.get("/topics/:topics", RepositoryController.findAll);
router.get("/repo/:id", RepositoryController.findOne);
router.put("/repo/:id", RepositoryController.update);
router.delete("/repo/:id", RepositoryController.destroy);

export { router };