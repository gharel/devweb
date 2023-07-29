// NODE_ENV=development DEBUG=app:* npx nodemon demo-base.mjs

import express from "express";
import { setTimeout as wait } from "node:timers/promises";
import routeCatalogue from "express-routes-catalogue";
import createError from "http-errors";
import apiRouter from "./demo-router.mjs";
import createDebug from "debug";
const debug = createDebug("app:main");
const app = express();
const port = 5000;

app.disable('x-powered-by');

const { default: routesList } = routeCatalogue;
app.use(express.static("public"));

app.use(function requestTime(_request, response, next) {
  response.locals.requestTime = Date.now();
  next();
});

const setHeaders = function (headers) {
  return function (request, response, next) {
    response.set(headers);
    next();
  };
};

app.use(setHeaders({ "Warning": "this is sloppy", "X-API-KEY": "deadbeef00" }));

app.use(function debugMiddleware(request, response, next) {
  // utiliser plutot <https://github.com/expressjs/morgan> pour ça
  debug(request.url);
  next();
});

app.use("/api", apiRouter);

app.get("/", function appHome(_request, response, _next) {
  response.send("Hello World!");
});

app.get("/error/:code", function appError(request, response, next) {
  const code = Number.parseInt(request.params.code, 10);
  if (Number.isFinite(code)) return next(createError(code));
  return next(createError(400, new Error(`invalid value ${request.params.code}`)));
});

app.use(function appErrorHandler(error, request, response, _next) {
  debug("appErrorHandler", error);
  if (response.headersSent) return;
  response.locals.message = error.message;
  const status = error.status || 500;
  return response.status(status).send(`Error ${status}: ${response.locals.message} @${response.locals.requestTime}`);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

debug(`NODE_ENV=${process.env.NODE_ENV}`);

if (process.env.NODE_ENV === "development") {
  routesList.terminal(app);
}

