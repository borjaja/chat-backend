import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config({ path: "config/.env" });

const app: Express = express();
app.use(cors({ origin: true }));

const port = process.env.PORT;

app.get("/", (_req: Request, res: Response) => {
  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
