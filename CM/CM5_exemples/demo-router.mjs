/* eslint-disable no-console */
import express from "express";
import { setTimeout as wait } from "node:timers/promises";
import createDebug from "debug";
import createError from "http-errors";

const debug = createDebug("app:router");
const router = express.Router();
debug("router");

router.get("/", function routerHome(_request, response, _next) {
  response.send("Hello Api!");
});

router.get("/bogus", function routerBogus(_request, response, _next) {
  response.send("Hello bogus!");
  response.send("Hello bogus!");
});

router.get("/sync-throw", function routerSyncError(_request, _response, next) {
  next(new Error("sync throw"));
});

router.get("/async-throw", async function routerAsyncError(_request, _response, next) {
  // Promise.reject(new Error("async throw"));
  try {
    await Promise.reject(new Error("async throw"));
  } catch (error) {
    next(error);
  }
});

router.get("/await/:duration", async function routerWait(request, response, next) {
  const duration = Number.parseInt(request.params.duration, 10);
  debug(request.params.duration, duration, Number.isNaN(duration));
  if (Number.isNaN(duration)) {
    return next(createError(400, `${request.params.duration} is NaN`));
  }
  await wait(duration);
  return response.json({ duration });
});

export default router;

