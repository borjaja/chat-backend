import { NextFunction, Request, Response } from "express";

type FnType = (
  request: Request,
  response: Response,
  next: NextFunction
) => void;

const invalidPathHandler: FnType = (request, response, _next) => {
  response.status(400).send(`invalid path ${request.url}`);
};

export default () => {
  return invalidPathHandler;
};
