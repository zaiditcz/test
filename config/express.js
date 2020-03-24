import express from "express";
import parser from "body-parser";
import routes from '../server/routes';

const app = express();

// parse body params and attache them to req.body
app.use(parser());

// mount all routes here
app.use('/node/api', routes);

export default app;