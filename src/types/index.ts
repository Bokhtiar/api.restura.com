export interface IRoutes {
    name: string;
    url: string;
    proxy: {
      target: string;
      changeOrigin: boolean;
      pathRewrite: any;
    };
  }
   
  export interface IService {
    service_name: string; 
    service_path: string;
  }
  
  export interface IAPIKeys {
    id: number;
    name: string;
    key: string;
  }
  
  type ErrorType = {
    field: string;
    message: string;
  };
  
  export interface IHttpErrorResponse {
    status: boolean;
    errors: ErrorType[];
  }
  