import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://booktravel-app.herokuapp.com/api"
})