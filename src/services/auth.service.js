import axios from "axios";

const API_URL = "http://localhost:3001/";

const signup = async (Email, Password) => {
  const response = await axios
    .post(API_URL + "/register", {
      Email,
      Password,
    });
};

const login = async (Email, Password) => {
  const response = await axios
    .post("http://localhost:3001/login", {
      Email,
      Password,
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;