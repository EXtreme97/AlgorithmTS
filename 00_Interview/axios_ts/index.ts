import type { InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TIME_OUT } from "./config";
import Request from "./request";

const API = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    resquestSuccessFn(config: InternalAxiosRequestConfig) {
      console.log("实例请求成功的拦截");
      return config;
    },
    resquestFailureFn(err) {
      console.log("实例请求失败的拦截");
      return err;
    },
    ResponseSuccessFn(res) {
      console.log("实例响应成功的拦截");
      return res;
    },
    ResponseFailureFn(err) {
      console.log("实例响应失败的拦截");
      return err;
    },
  },
});

export default API;

