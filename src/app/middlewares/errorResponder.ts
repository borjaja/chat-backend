import { NextFunction, Request, Response } from "express";

type FnType = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => void;

const errorResponder: FnType = (error, _request, response, _next) => {
  const status = error.status || 400;
  response.header("Content-Type", "application/json");
  response.status(status).send({ message: error.message });
};

export default () => {
  return errorResponder;
};
