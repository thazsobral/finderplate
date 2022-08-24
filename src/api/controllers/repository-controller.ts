// id: integer
// name: string
// url: string
// author: string
// topics: string[]

import { Request, Response } from "express";
import { RepositoryModel } from "../../database/models/repository-model";

class RepositoryController {
    async findAll(request: Request, response: Response) {
        const repositories = await RepositoryModel.findAll();

        return repositories.length > 0
        ? response.status(200).json(repositories)
        : response.status(204).send();
    };

    async findOne(request: Request, response: Response) {
        const { id } = request.params
        const repository = await RepositoryModel.findOne({
            where: {
                id
            }
        })

        return repository
        ? response.status(200).json(repository)
        : response.status(204).send()
    };
    
    async create(request: Request, response: Response) {
        const { name, url, author, topics } = request.body;
        const repository = await RepositoryModel.create({
            name,
            url,
            author,
            topics
        });

        return response.status(201).json(repository);
    };
    
    async update(request: Request, response: Response) {
        const { id } = request.params;
        await RepositoryModel.update(request.body, {
            where: {
                id
            }
        });

        return response.status(204).send();
    };
    
    async destroy(request: Request, response: Response) {
        const { id } = request.params;
        await RepositoryModel.destroy({
            where: {
                id
            }
        })

        return response.status(204).send();
    }
};

export default new RepositoryController();