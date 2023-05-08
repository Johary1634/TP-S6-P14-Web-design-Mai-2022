/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Helmet } from "react-helmet-async";

function Information() {
  return (
    <>
      <Helmet>
        <title>IA:site d&apos;information</title>
        <meta name="description" content="Site d'information sur l'intelligence artificielle" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <MKBox component="section" py={12}>
        <Container>
          <h1>L&apos;intelligence artificielle,parlons en!</h1>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={6}>
                  <MKBox mb={5}>
                    <DefaultInfoCard
                      icon="public"
                      title="Apprentissage automatique"
                      description="Peuvent utiliser des techniques d'apprentissage automatique pour apprendre à partir de données au fil du temps."
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={5}>
                    <DefaultInfoCard
                      icon="payments"
                      title="Raisonnement et prise de décision"
                      description="Conçus pour effectuer des tâches de raisonnement. Peuvent utiliser des algorithmes de logique formelle,"
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={{ xs: 5, md: 0 }}>
                    <DefaultInfoCard
                      icon="apps"
                      title="Adaptabilité et évolutivité"
                      description="conçus pour être adaptatifs et évolutifs, permettant de s'améliorer avec l'expérience."
                    />
                  </MKBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKBox mb={{ xs: 5, md: 0 }}>
                    <DefaultInfoCard
                      icon="3p"
                      title="Traitement du langage naturel "
                      description="Les logiciels d'IA sont capables de comprendre et de traiter le langage humain de manière naturelle."
                    />
                  </MKBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
              <CenteredBlogCard
                image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                title="Quoi??"
                description="<strong>L'intelligence artificielle (IA)</strong> est un processus d'imitation de l'intelligence humaine qui repose sur la création et l'application d'algorithmes exécutés dans un environnement informatique dynamique. Son but est de permettre à des ordinateurs de penser et d'agir comme des êtres humains."
                action={{
                  type: "internal",
                  route: "#",
                  color: "info",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Information;
