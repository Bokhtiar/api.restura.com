import express, { Express, NextFunction, Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import { setupLogging } from "./middleware/logging.middleware";
import { setupProxies } from "./middleware/proxy.middleware";
import { ValidAPIKey } from "./middleware/apikey.middleware";
import { IService } from "./types";
import { ROUTES } from "./routes";
