import axios from "axios";
import Cookies from "js-cookie";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.marvel-united.irohconsulting.com";

export function apiGet(path, params) {
  const token = Cookies.get("token");
  return axios.get(`${url}${path}`, {
    params,
    headers: {
      Authorization: token ? `Bearer ${Cookies.get("token")}` : "",
    },
  });
}

export function apiPost(path, body) {
  const token = Cookies.get("token");
  return axios.post(`${url}${path}`, body, {
    headers: {
      Authorization: token ? `Bearer ${Cookies.get("token")}` : "",
    },
  });
}

export function apiPut(path, body) {
  const token = Cookies.get("token");
  return axios.put(`${url}${path}`, body, {
    headers: {
      Authorization: token ? `Bearer ${Cookies.get("token")}` : "",
    },
  });
}

export function apiDelete(path, params) {
  const token = Cookies.get("token");
  return axios.delete(`${url}${path}`, {
    params,
    headers: {
      Authorization: token ? `Bearer ${Cookies.get("token")}` : "",
    },
  });
}
