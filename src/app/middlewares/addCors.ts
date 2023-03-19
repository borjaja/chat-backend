import { Express } from "express";
import cors from "cors";

const addCors = (app: Express) => {
  app.use(cors({ origin: true }));
};

export default addCors;
