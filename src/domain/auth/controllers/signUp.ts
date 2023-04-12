import { NextFunction, Request, Response } from "express";
import Error400 from "../../../utils/error/Error400";
import Error404 from "../../../utils/error/Error404";
import authService from "../auth.service";

export default async (req: Request, res: Response, _next: NextFunction) => {
  const username = req.body?.username;
  const password = req.body?.password;

  if (!username || !password) {
    throw new Error404("Wrong args");
  }
  const user = await authService.findByUsername(username);
  if (user) {
    throw new Error400("user already exist");
  }
  const response = await authService.insert(username, password);

  res.json({ t: "Ey muy buenas a todos guapisimos y guapisimas" });
};
