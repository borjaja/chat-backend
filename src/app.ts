import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors({ origin: true }));

app.get("/", (_req: Request, res: Response) => {
  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
});

export default app;
