import express, { json } from 'express';
import { db } from './database/db';
import { router } from './api/routes';

const app = express();
const port = process.env.API_PORT || 3000;

app.use(json())
app.use(router)

app.listen(port, async () => {
    await db.sync()
    console.log(`App listening on port ${port}`)
})