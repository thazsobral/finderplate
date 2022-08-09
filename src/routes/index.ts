import { response, Router } from "express";

const router = Router();

router.get("/", (request, response) => {
    response.send("Hi, I'm Finderplate 😄");
});

router.get("/repositories", (request, response) => {
    response.send("All repositories");
});

router.get("/repository/:id", (request, response) => {
    response.send(`Any repository ${request.params.id}`);
});

export default router;