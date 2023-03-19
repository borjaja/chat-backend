import express, { Express, Request, Response } from "express";
import middlewares from "./middlewares";

const app: Express = express();

middlewares.addCors(app);
middlewares.addBodyParser(app);

app.get("/", (_req: Request, res: Response) => {
  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
});

app.post("/auth/sign-up", (req: Request, res: Response) => {
  console.log(req.body);

  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
});

export default app;
