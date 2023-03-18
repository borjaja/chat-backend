import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: "config/.env" });

const app: Express = express();
const port = process.env.PORT;

app.get("/", (_req: Request, res: Response) => {
  res.send("Ey muy buenas a todos guapisimos y guapisimas");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
