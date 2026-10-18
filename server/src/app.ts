import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { env } from "./config/env";
import api from "./routes";
import { errorHandler } from "./middleware/errorHandler";

export function createApp() {
  const app = express();
  app.use(cors({ origin: env.clientUrl, credentials: true }));
  app.use(express.json());
  app.use(morgan("dev"));
  app.use("/api", api);

  const clientDist = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientDist));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(clientDist, "index.html"), (err) => {
      if (err) next();
    });
  });

  app.use(errorHandler);
  return app;
}
