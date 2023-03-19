import { Express } from "express";
import bodyParser from "body-parser";

// Parses the body of POST/PUT request
// to JSON
const addBodyParser = (app: Express) => {
  app.use(bodyParser.json());
};

export default addBodyParser;
