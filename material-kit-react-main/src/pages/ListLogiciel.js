import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { listLogiciel } from "service/logiciel";
import ItemList from "./components/ItemList";

// const log = [
//   {
//     nom: "chatGPT",
//     resume:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni saepe doloribus excepturi velit iste itaque id, rerum et reprehenderit corporis aut dolor ipsa commodi quaerat libero dolores sequi vero.",
//   },
//   {
//     nom: "PinGuin",
//     resume:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni saepe doloribus excepturi velit iste itaque id, rerum et reprehenderit corporis aut dolor ipsa commodi quaerat libero dolores sequi vero.",
//   },
// ];

const ListLogiciel = () => {
  const { idCategorie } = useParams();
  const { titre } = useParams();
  const [logiciel, setLogiciel] = useState([]);
  const [load, setLoad] = useState(false);
  //const navigate = useNavigate();

  useEffect(() => {
    let identifiant = idCategorie.split("-")[1];
    listLogiciel(identifiant)
      .then((response) => {
        setLogiciel(response);
        //alert(JSON.stringify(response, null, 2));
        setLoad(true);
      })
      .catch((error) => {
        alert(JSON.stringify(error, null, 2));
      });
  }, [window.location.pathname]);

  return !load ? (
    <>
      <p>chargement...</p>
    </>
  ) : (
    <>
      <Helmet>
        <title>IA:liste de logiciel {titre}</title>
        <meta
          name="description"
          content={
            "Site d'information sur l'intelligence artificielle, liste des logiciel " + titre
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {logiciel.length == 0 ? (
        <p>Aucun element à montrer</p>
      ) : (
        <h1>Logiciel de {titre.replace("-", " ")}</h1>
      )}
      <List>
        {logiciel.map((obj, index) => (
          <ItemList key={index} logiciel={obj} />
        ))}
      </List>
    </>
  );
};

export default ListLogiciel;
