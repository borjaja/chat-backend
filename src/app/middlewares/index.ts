import bodyParser from "./bodyParser";
import cors from "./cors";
import errorLogger from "./errorLogger";
import errorResponder from "./errorResponder";
import invalidPathHandler from "./invalidPathHandler";

const middlewares = {
  bodyParser,
  cors,
  errorLogger,
  errorResponder,
  invalidPathHandler,
};

export default middlewares;
