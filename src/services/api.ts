import axios from "axios";

export const api = axios.create({
  baseURL: "https://wm-todo-api.herokuapp.com/api/v1",
});
