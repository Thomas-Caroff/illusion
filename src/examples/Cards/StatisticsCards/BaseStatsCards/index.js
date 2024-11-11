/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button, Grid } from "@mui/material";
import MDInput from "components/MDInput";
import { useState, useEffect } from "react";

function StatisticsCard({ color, stats }) {
  const [form, setValues] = useState({ stats });
  const [isStatEditable, setIsStatEditable] = useState(false);

  useEffect(() => {
    setValues(stats);
  }, [stats]);

  function switchEditable() {
    if (isStatEditable) {
      //TODO: Save stats with PUT request
    }
    setIsStatEditable(!isStatEditable);
    return 0;
  }

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space_around" alignItems="left">
        <Grid sm={10} px={10}>
          <MDBox textAlign="left">
            <MDTypography
              textAlign="left"
              my={1}
              variant="h4"
              color="dark"
              sx={{
                fontSize: "1.25rem",
              }}
            >
              Bonus de maitrise: {stats.proficiency}
            </MDTypography>
          </MDBox>
        </Grid>
        <Grid sm={2}>
          <Button color="dark" onClick={switchEditable}>
            <Icon>settings</Icon>
          </Button>
        </Grid>
      </MDBox>
      <Divider />
      <MDBox px={2}>
        {[
          { label: "Force", id: "strength", icon: "fitness_center" },
          { label: "Dextérité", id: "dexterity", icon: "sports_martial_arts" },
          { label: "Constitution", id: "constitution", icon: "favorite" },
          { label: "Intelligence", id: "intelligence", icon: "local_library" },
          { label: "Sagesse", id: "wisdom", icon: "emoji_objects" },
          { label: "Charisme", id: "charisma", icon: "auto_awesome" },
        ].map((stat) => (
          <Grid container display="flex" justifyContent="space-between" key={stat.id}>
            <Grid sm={3} py={1}>
              <MDBox
                variant="gradient"
                bgColor={color}
                color={color === "light" ? "dark" : "white"}
                borderRadius="xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="3rem"
                height="3rem"
              >
                <Icon>{stat.icon}</Icon>
              </MDBox>
            </Grid>
            <Grid sm={5} py={1}>
              <MDTypography variant="h4" color="dark">
                {stat.label}
              </MDTypography>
            </Grid>
            <Grid sm={2} py={1}>
              <MDInput
                variant={isStatEditable ? "outlined" : "standard"}
                inputProps={{ disabled: !isStatEditable }}
                sx={{ width: "4rem", fontSize: "1.25rem" }}
                id={stat.id}
                value={form[stat.id] || ""}
                onChange={onChange}
              />
            </Grid>
            <Grid sm={2} py={1}>
              <MDBox
                textAlign="center"
                borderRadius="50%"
                borderColor="dark"
                border="2px solid"
                width="3rem"
                height="3rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <MDTypography variant="h4">+4</MDTypography>
              </MDBox>
            </Grid>
          </Grid>
        ))}
      </MDBox>
    </Card>
  );
}

// // Setting default values for the props of ComplexStatisticsCard
// StatisticsCard.defaultProps = {
//   color: "info",
//   stats: [],
//   setStat: () => {},
// };

// // Typechecking props for the ComplexStatisticsCard
// StatisticsCard.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "secondary",
//     "info",
//     "success",
//     "warning",
//     "error",
//     "light",
//     "dark",
//   ]),
//   title: PropTypes.string.isRequired,
//   count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   percentage: PropTypes.shape({
//     color: PropTypes.oneOf([
//       "primary",
//       "secondary",
//       "info",
//       "success",
//       "warning",
//       "error",
//       "dark",
//       "white",
//     ]),
//     amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     label: PropTypes.string,
//   }),
//   icon: PropTypes.node.isRequired,
// };

export default StatisticsCard;
