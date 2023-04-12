import { NextFunction, Request, Response } from "express";

type FnType = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => void;

const errorLogger: FnType = (error, _request, _response, next) => {
  console.error(`[Error] ${error.message}`);
  next(error); // calling next middleware
};

export default () => {
  return errorLogger;
};
