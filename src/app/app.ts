import express, { Express } from "express";
import routes from "../domain/routes";
import middlewares from "./middlewares";

const app: Express = express();

app.use(middlewares.cors());
app.use(middlewares.bodyParser());
app.use(routes);
app.use(middlewares.errorLogger());
app.use(middlewares.errorResponder());
app.use(middlewares.invalidPathHandler());

export default app;
