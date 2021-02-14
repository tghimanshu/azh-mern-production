import axios from "axios";
import config from "./config";

const get = (url) => {
  const token = localStorage.getItem("auth-token");
  const headers = { "x-auth-token": token };
  return axios.get(config["apiEndPoint"] + url, { headers });
};
const post = (url, data) => {
  const token = localStorage.getItem("auth-token");
  const headers = { "x-auth-token": token };
  return axios.post(config["apiEndPoint"] + url, data, { headers });
};
const put = (url, data) => {
  const token = localStorage.getItem("auth-token");
  const headers = { "x-auth-token": token };
  return axios.put(config["apiEndPoint"] + url, data, { headers });
};
const remove = (url) => {
  const token = localStorage.getItem("auth-token");
  const headers = { "x-auth-token": token };
  return axios.delete(config["apiEndPoint"] + url, { headers });
};

const http = {
  get: get,
  post: post,
  put: put,
  remove: remove,
};

export default http;
