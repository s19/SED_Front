import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:44336/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "Home/GetHomeData");
};

const getUserBoard = () => {
  return axios.get(API_URL + "User/GetUserData", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "Admin/GetAdminData", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};
