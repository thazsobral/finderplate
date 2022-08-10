import database from "../database/models";

// repository structure
// id: string;
// url: string;
// name: string;
// author: string;
// topics: string[];
// stars: number;
// forks: number;

class Controller {
    getRepository(id:string): string {
        return `This repository is ${id}`;
        //return repository
    }

    getAllRepositories() {
        // return repositories
    };

    addRepository() {
        // return new repository
    };

    updateRepository() {
        // return updated respository
    };
};

export default new Controller();