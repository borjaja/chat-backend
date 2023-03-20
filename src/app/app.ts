import express, { Express, Request, Response } from "express";
import middlewares from "./middlewares";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({ path: "config/.env" });

const url = process.env.ATLAS_URI ?? "";
const collection = process.env.COLLECTION ?? "";

const app: Express = express();

middlewares.addCors(app);
middlewares.addBodyParser(app);

app.get("/", (_req: Request, res: Response) => {
  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
});

app.post("/auth/sign-up", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const db = await MongoClient.connect(url);
  console.log(db);

  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
});

export default app;
