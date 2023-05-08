import { Card } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import bgImage from "assets/images/bg-presentation.jpg";
import Information from "./components/Informations";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import BackOffice from "./BackOffice";
import ListLogiciel from "./ListLogiciel";
import Fiche from "./Fiche";
//import { makeRoute } from "seo.routes";
//import { listCategorie } from "service/categorie";
//import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <Header />
      {window.location.pathname !== "/login" ? (
        <MKBox
          minHeight="75vh"
          width="100%"
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <MKTypography
                color="white"
                mt={-6}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                <strong style={{ fontSize: "40px" }}>Site d&apos;Information sur l&apos;IA </strong>
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                Mini projet de web &amp; design S6 ITU university
                <br />
                Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
                developers around the world.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      ) : null}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/backoffice" element={<BackOffice />} />
          <Route path="/logiciel/:titre/:idCategorie" element={<ListLogiciel />} />
          <Route path="/fiche/:titre/:idLogiciel" element={<Fiche />} />
          <Route path="/" element={<Information />} />
        </Routes>
      </Card>
    </>
  );
};
export default Home;
