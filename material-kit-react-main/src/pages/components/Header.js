//navbar
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { useEffect, useState } from "react";
import routes from "seo.routes";
import { makeRoute } from "seo.routes";
import { listCategorie } from "service/categorie";

const Header = () => {
  const [categorie, setCategories] = useState([]);
  //const [loading, isLoading] = useState(false);
  useEffect(() => {
    listCategorie().then((response) => {
      setCategories(response.data);
      makeRoute(routes, response.data);
      //alert(JSON.stringify(response.data, null, 2));
      console.log(categorie);
    });
  }, []);
  return (
    <DefaultNavbar
      routes={routes}
      action={{
        type: "external",
        route: "https://www.creative-tim.com/product/material-kit-react",
        label: "free download ooss",
        color: "info",
      }}
      sticky
    />
  );
};
export default Header;
