import MKTypography from "components/MKTypography";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { ficheLogiciel } from "service/logiciel";
//import PropTypes from "prop-types";
//import Icon from "@mui/material/Icon";

const Fiche = () => {
  const { idLogiciel } = useParams();
  const { titre } = useParams();
  const [logiciel, setLogiciel] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let id = idLogiciel.split("-")[1];
    ficheLogiciel(id).then((response) => {
      setLogiciel(response);
      setLoading(true);
    });
  }, []);

  return !loading ? (
    <p>chargement...</p>
  ) : (
    <>
      <Helmet>
        <title>IA:fiche d&apos;information de {titre.split("-")[3]}</title>
        <meta
          name="description"
          content={
            "Site d'information sur l'intelligence artificielle" +
            (loading ? "sur " + logiciel.nom : null)
          }
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <MKTypography variant="h1">
        Fiche d&apos;information sur le logiciel IA {logiciel.nom}
      </MKTypography>
      <MKTypography variant="body1" fontWeight="light" mt={3} color="text">
        <div dangerouslySetInnerHTML={{ __html: logiciel.description }} />
      </MKTypography>
    </>
  );
};
// Fiche.propTypes = {
//   logiciel: PropTypes.object,
// };
export default Fiche;
