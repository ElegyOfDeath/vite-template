import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

// 删除空参数
const filterParam = (obj: any) => {
  if (obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        filterParam(obj[key]); // 递归遍历
      }
      if (typeof obj[key] === "string") {
        obj[key] = obj[key].trim();
      }
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    }
  }
  return obj;
};

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
api.interceptors.request.use((config: AxiosRequestConfig) => {
  filterParam(config.params || config.data);

  if (config.method === "get") {
    config.paramsSerializer = (params) =>
      qs.stringify(params, { arrayFormat: "repeat" });
  }

  console.log("请求参数", config);
  return config;
});

// 返回拦截器
api.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    console.log("返回参数", res.data.data);
    return res.data.data;
  },
  (error: any) => {
    console.log("错误信息", error.response);
  }
);

export default api;
