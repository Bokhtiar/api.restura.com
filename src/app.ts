import express, { Express, NextFunction, Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import { setupLogging } from "./middleware/logging.middleware";
import { setupProxies } from "./middleware/proxy.middleware";
import { ValidAPIKey } from "./middleware/apikey.middleware";
import { IService } from "./types";
import { ROUTES } from "./routes";
  
export const app: Express = express();

setupLogging(app);
setupProxies(app, ROUTES);
app.use(ValidAPIKey);

/* Root route */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const services: IService[] = [];

  for (let i = 0; i < ROUTES.length; i++) {
    services.push({
      service_name: ROUTES[i].name,
      service_path: req.protocol + "://" + req.get("Host") + ROUTES[i].url,
    });
  }

  res.status(200).json({
    message: "Welcome to API gateway x.",
    services,
  });
});

/* Handelling 404 route */
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: false,
    errors: [
      {
        field: "service",
        message: "Sorry, service not found.",
      },
    ],
  });
});
