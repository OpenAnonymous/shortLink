import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import err from "./utils/handles/error.js";
import router from "./app/routes/index.js";
import logRequest from "./app/middleware/logRequets.js";
import path from "path";

const app = express();
export default function createServer(){
    app.use(cors());
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(logRequest);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(router);
    app.use(err);

    return app;
}