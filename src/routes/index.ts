import { Router } from "express";
import repositoryController from "../controllers";

const router = Router();

router.get("/", (request, response) => {
    response.send("Hi, I'm Finderplate 😄");
});

router.get("/repositories", (request, response) => {
    response.send("All repositories");
});

router.get("/repository/:id", (request, response) => {
    response.send(repositoryController.getRepository(request.params.id));
});

export default router;