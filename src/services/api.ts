import axios from "axios";

export const api = axios.create({
  baseURL: "https://wm-todo-api.herokuapp.com/api/v1",
  // baseURL: "http://localhost:3333/api/v1",
});
