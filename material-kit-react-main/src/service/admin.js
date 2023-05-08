import axios from "axios";

export const login = async (data) => {
  return (await axios.post("https://miniprojets6-production.up.railway.app/login", data)).data;
};
