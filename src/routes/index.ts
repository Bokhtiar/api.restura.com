import { IRoutes } from "../types";

export const ROUTES: IRoutes[] = [
  {
    name: "auth",
    url: "/auth",
    proxy: {
      target: "https://restura-auth.onrender.com",
      //target: "http://localhost:4001",
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
      target: "https://restura-product.onrender.com",
      //target: "http://localhost:4002",
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
      target: "https://restura-order.onrender.com",
      //target: "http://localhost:4003",
      changeOrigin: true,
      pathRewrite: {
        [`^/order`]: "",
      },
    },
  },
];
