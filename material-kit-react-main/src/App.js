/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
//import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import Home from "pages/Home";
import { HelmetProvider } from "react-helmet-async";
// import SignIn from "pages/SignIn";
// import BackOffice from "pages/BackOffice";
// import ListLogiciel from "pages/ListLogiciel";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          {/* <Route path="/presentation" element={<Presentation />} /> */}
          {/* <Route path="/login" element={<SignIn />} />
        <Route path="/backoffice" element={<BackOffice />} />
        <Route path="/logiciel/:idCategorie" element={<ListLogiciel />} /> */}
          {/* <Route path="*" element={<Navigate to="/presentation" />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}
