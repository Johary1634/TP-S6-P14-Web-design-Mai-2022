import Icon from "@mui/material/Icon";
//import AboutUs from "pages/LandingPages/AboutUs";
//import Author from "pages/LandingPages/Author";
//import ContactUs from "pages/LandingPages/ContactUs";
import GitHubIcon from "@mui/icons-material/GitHub";

const routes = [
  {
    name: "categories",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "chargement ...",
        route: "/login",
        //component: <AboutUs />,
      },
      // {
      //   name: "traitement de texte",
      //   route: "/pages/perso/traitement-texte",
      //   //component: <ContactUs />,
      // },
      // {
      //   name: "Assistance vocale",
      //   route: "/pages/perso/assistance-vocale",
      //   //component: <Author />,
      // },
    ],
  },
  {
    name: "github mini-projet",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "github template",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default routes;

export const makeRoute = (route, arrayList) => {
  for (let i = 0; i < arrayList.length; i++) {
    route[0].collapse[i] = {
      name: arrayList[i].valeur,
      route:
        "logiciel/" +
        arrayList[i].valeur.replace(/ /g, "-").replace("'", "") +
        "/key-" +
        arrayList[i].id,
    };
    //arrayList[i].name = arrayList[i].valeur;
    //arrayList[i].route = "categorie/" + arrayList[i].id + "/perso";
  }
  //route[0].collapse = arrayList;
  //return route;
};
