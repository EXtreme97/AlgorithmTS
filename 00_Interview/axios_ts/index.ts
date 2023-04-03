import type { InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TIME_OUT } from "./config";
import Request from "./request";

const API = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    resquestSuccessFn(config: InternalAxiosRequestConfig) {
      console.log("请求成功的拦截");
      return config;
    },
    resquestFailureFn(err) {
      console.log("请求失败的拦截");
      return err;
    },
    ResponseSuccessFn(res) {
      console.log("响应成功的拦截");
      return res;
    },
    ResponseFailureFn(err) {
      console.log("响应失败的拦截");
      return err;
    },
  },
});

export default API;

API.request({
  url: "/home/multidata",
}).then((res) => {
  console.log(res);
});
const API2 = new Request({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 5000,
  interceptors: {},
});

API2.request<{
  data: any;
  requestCode: 0;
  success: boolean;
}>({
  url: "/entire/list",
  params: {
    offset: 0,
    size: 20,
  },
}).then((res) => console.log(res));
