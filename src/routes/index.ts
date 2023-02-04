import { IRoutes } from "../types";

export const ROUTES: IRoutes[] = [
  {
    name: "Auth",
    url: "/auth",
    proxy: {
      // target: "http://auth-service:5000",
      target: "http://localhost:4001",
      changeOrigin: true,
      pathRewrite: {
        [`^/auth`]: "",
      },
    },  
  },
  {
    name: "product",
    url: "/product",
    proxy: {
      // target: "http://location-service:5001",
      target: "http://localhost:4002",
      changeOrigin: true,
      pathRewrite: {
        [`^/product`]: "",
      },
    },
  },
  {
    name: "Order",
    url: "/order",
    proxy: {
      // target: "http://location-service:5001",
      target: "http://localhost:4003",
      changeOrigin: true,
      pathRewrite: {
        [`^/order`]: "",
      },
    },
  },
];
