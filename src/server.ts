import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './database/models';
// import {users} from './seeders/users';
// import {projects} from './seeders/projects'
// import {projectassignments} from './seeders/projectassignments'
import router from "./routes";

app.use("/", router);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})