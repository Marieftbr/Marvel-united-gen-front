import axios from "axios";
import Cookies from "js-cookie";

const url = "https://marvel-united-generator.herokuapp.com/";

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
