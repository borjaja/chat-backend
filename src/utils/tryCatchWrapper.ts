import { Request, Response, NextFunction, RequestHandler } from "express";

const tryCatchWrapper =
  (routerFunction: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routerFunction(req, res, next);
    } catch (error: any) {
      next(error);
    }
  };

export default tryCatchWrapper;
