"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const logging_middleware_1 = require("./middleware/logging.middleware");
const proxy_middleware_1 = require("./middleware/proxy.middleware");
const apikey_middleware_1 = require("./middleware/apikey.middleware");
const routes_1 = require("./routes");
exports.app = (0, express_1.default)();
(0, logging_middleware_1.setupLogging)(exports.app);
(0, proxy_middleware_1.setupProxies)(exports.app, routes_1.ROUTES);
exports.app.use(apikey_middleware_1.ValidAPIKey);
/* Root route */
exports.app.get("/", (req, res, next) => {
    const services = [];
    for (let i = 0; i < routes_1.ROUTES.length; i++) {
        services.push({
            service_name: routes_1.ROUTES[i].name,
            service_path: req.protocol + "://" + req.get("Host") + routes_1.ROUTES[i].url,
        });
    }
    res.status(200).json({
        message: "Welcome to API gateway x.",
        services,
    });
});
/* Handelling 404 route */
exports.app.use((req, res, next) => {
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
