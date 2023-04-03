import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface BaseRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: {
    resquestSuccessFn?: (
      config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig;
    resquestFailureFn?: (err: any) => any;
    ResponseSuccessFn?: (res: T) => T;
    ResponseFailureFn?: (err: any) => any;
  };
}

export default class Request {
  instance: AxiosInstance;
  constructor(config: BaseRequestConfig) {
    this.instance = axios.create(config);
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        console.log("全局请求成功");
        return config;
      },
      (err) => {
        console.log("全局请求失败");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("全局响应成功");
        return res.data;
      },
      (err) => {
        console.log("全局响应失败");
        return err;
      }
    );
    // 新建实例时传入的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.resquestSuccessFn,
      config.interceptors?.resquestFailureFn
    );

    this.instance.interceptors.response.use(
      config.interceptors?.ResponseSuccessFn,
      config.interceptors?.ResponseFailureFn
    );
  }

  request<T = any>(config: BaseRequestConfig<T>) {
    // 单次请求的成功拦截
    if (config.interceptors?.resquestSuccessFn) {
      config = config.interceptors.resquestSuccessFn(
        config as InternalAxiosRequestConfig
      );
    }
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(
        (res) => {
          // 单次响应的成功拦截
          if (config.interceptors?.ResponseSuccessFn) {
            res = config.interceptors.ResponseSuccessFn(res);
          }
          resolve(res);
          // resolve(res as any as T);
        },
        (err) => reject(err)
      );
    });
  }

  get<T = any>(config: BaseRequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: BaseRequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  delete<T = any>(config: BaseRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: BaseRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
}
