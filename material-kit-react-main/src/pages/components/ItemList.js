import propTypes from "prop-types";
import Grid from "@mui/material/Grid";
//import { Card } from "@mui/material";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

const ItemList = ({ logiciel }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      {/* <Card sx={{ mt: 3 }}> */}
      <Grid container>
        <Grid item xs={8} md={8} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h2">
              <div style={{ fontSize: "20px" }}>{logiciel.nom}</div>
            </MKTypography>
            <MKTypography variant="body2" color="text">
              <div dangerouslySetInnerHTML={{ __html: logiciel.resume }} />
            </MKTypography>
            <Link to={"/fiche/information-IA-logiciel-" + logiciel.nom + "/key-" + logiciel.id}>
              <MKTypography
                component="a"
                variant="body1"
                fontWeight="light"
                color="info"
                //mt={3}
                sx={{
                  width: "max-content",
                  display: "flex",
                  alignItems: "center",

                  "& .material-icons-round": {
                    transform: `translateX(3px)`,
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: `translateX(6px)`,
                  },
                }}
              >
                Lire plus <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            </Link>
          </MKBox>
        </Grid>
      </Grid>
      {/* </Card> */}
    </div>
  );
};
ItemList.propTypes = {
  logiciel: propTypes.object.isRequired,
};

export default ItemList;
