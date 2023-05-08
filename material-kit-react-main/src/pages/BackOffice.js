//import { Card } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
//import bgImage from "assets/images/bg-presentation.jpg";

//import Header from "./components/Header";
import MKInput from "components/MKInput";

//ckEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//react bootstrap
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { listCategorie } from "service/categorie";
import MKButton from "components/MKButton";
import { save } from "service/logiciel";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BackOffice = () => {
  //const id = useRef();
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState([]);
  const [load, isLoad] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate("/login");
    }
    listCategorie().then((response) => {
      setCategorie(response.data);
      //alert(categorie);
      //alert(load);
      isLoad(true);
    });
  }, []);

  let logiciel = {
    nom: "",
    categorie: {},
    resume: "Resume de votre publication",
    description: "Contenu de votre publication",
  };

  const submit = () => {
    alert("logiciel " + JSON.stringify(logiciel, null, 2));
    save(logiciel)
      .then((response) => {
        alert("donnée " + JSON.stringify(response, null, 2));
      })
      .catch((error) => {
        alert("error " + JSON.stringify(error, null, 2));
      });
  };

  return (
    <>
      <Helmet>
        <title>Systeme d&apos;information back-office</title>
        <meta
          name="description"
          content={"Backoffice du systeme d'information sur l'intelligence artificielle"}
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <MKBox component="section" py={12}>
        <Container>
          <h1 style={{ marginBottom: "20px" }}>Decrire un nouveau logiciel IA</h1>

          <Grid xs={12} lg={6} mx="auto">
            <MKInput
              type="text"
              label="Nom logiciel"
              onChange={(e) => {
                logiciel.nom = e.target.value;
                //console.log(logiciel.nom);
              }}
              fullWidth
            />
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Select
                onChange={(ev) => {
                  logiciel.categorie = {
                    id: ev.target.value,
                  };
                  //console.log(ev.target.value);
                }}
              >
                {load
                  ? categorie.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.valeur}
                      </option>
                    ))
                  : null}
              </Form.Select>
            </Form.Group>
            <div style={{ marginTop: "20px" }}>
              <CKEditor
                editor={ClassicEditor}
                data={logiciel.resume}
                onChange={(event, editor) => {
                  logiciel.resume = editor.getData();
                }}
              />
            </div>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <CKEditor
                editor={ClassicEditor}
                data={logiciel.description}
                onChange={(event, editor) => {
                  logiciel.description = editor.getData();
                }}
              />
            </div>
            <MKButton
              variant="gradient"
              color="secondary"
              onClick={() => {
                submit();
              }}
            >
              publier
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};
export default BackOffice;
