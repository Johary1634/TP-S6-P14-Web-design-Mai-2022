import axios from "axios";

export const save = async (data) => {
  return (await axios.post("https://miniprojets6-production.up.railway.app/logiciel", data)).data;
};

export const listLogiciel = async (idCategorie) => {
  return (
    await axios.get("https://miniprojets6-production.up.railway.app/logiciels/" + idCategorie)
  ).data;
};

export const ficheLogiciel = async (id) => {
  return (await axios.get("https://miniprojets6-production.up.railway.app/logiciel/" + id)).data;
};
