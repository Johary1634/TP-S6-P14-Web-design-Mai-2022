import axios from "axios";

export const listCategorie = async () => {
  return await axios.get("https://miniprojets6-production.up.railway.app/categories");
};
