// data-api         -- data-api-github
// id: integer
// name: string     -- data.name
// url: string      -- data.html_url
// author: string   -- data.owner.login
// topics: string[] -- data.topics

import { Request, Response } from "express";
import axios from "axios";

import { RepositoryModel } from "../../database/models/repository-model";

class RepositoryController {
    async findAll(_: Request, response: Response) {
        const repositories = await RepositoryModel.findAll();

        return repositories.length > 0
            ? response.status(200).json(repositories)
            : response.status(204).send();
    };

    async findTopics(request: Request, response: Response) {
        const topics = [];
        topics.push(request.query.topics);

        const queryParams = topics.flat(Infinity);

        let query = "SELECT * FROM repositories WHERE";

        queryParams.forEach((item, id) => {
            if (id !== 0) {
                query = query.concat(" OR");
            }
            query = query.concat(` '${item}' = ANY(topics)`);
        });

        const repositories = await RepositoryModel.sequelize.query(query);

        return repositories
            ? response.status(200).json(repositories[0])
            : response.status(204).send();
    };

    async findOne(request: Request, response: Response) {
        const { id } = request.params;
        const repository = await RepositoryModel.findOne({
            where: {
                id
            }
        });

        return repository
            ? response.status(200).json(repository)
            : response.status(204).send();
    };

    async create(request: Request, response: Response) {
        const { url } = request.body;

        const requestForURL = url.replace("https://github.com/", "https://api.github.com/repos/");
        const repositoryData = await axios.get(requestForURL);

        const {
            name,
            url: html_url,
            topics
        } = repositoryData.data;

        const author = repositoryData.data.owner.login;

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
        });

        return response.status(204).send();
    }
};

export default new RepositoryController();