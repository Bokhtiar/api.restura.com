"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
exports.ROUTES = [
    {
        name: "Auth",
        url: "/auth",
        proxy: {
            // target: "http://auth-service:5000",
            target: "http://65.1.2.148:4001",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth`]: "",
            },
        },
    },
    {
        name: "Location",
        url: "/location",
        proxy: {
            // target: "http://location-service:5001",
            target: "http://65.1.2.148:4002",
            changeOrigin: true,
            pathRewrite: {
                [`^/location`]: "",
            },
        },
    },
    {
        name: "Transport",
        url: "/transport",
        proxy: {
            // target: "http://location-service:5001",
            target: "http://65.1.2.148:4003",
            changeOrigin: true,
            pathRewrite: {
                [`^/transport`]: "",
            },
        },
    },
];