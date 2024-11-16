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

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button, Grid } from "@mui/material";
import MDInput from "components/MDInput";
import { useState, useEffect } from "react";

import { API_URL } from "constants";

function StatisticsCard({ color, stats, stat_id }) {
  const [form, setValues] = useState({ stats });
  const [isStatEditable, setIsStatEditable] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [isFormAltered, setIsFormAltered] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    setValues(stats);
  }, [stats]);

  const calculateModifiers = (characteristics) => {
    return {
      ...characteristics,
      strength_mod: Math.floor((characteristics.strength - 10) / 2),
      dexterity_mod: Math.floor((characteristics.dexterity - 10) / 2),
      constitution_mod: Math.floor((characteristics.constitution - 10) / 2),
      intelligence_mod: Math.floor((characteristics.intelligence - 10) / 2),
      wisdom_mod: Math.floor((characteristics.wisdom - 10) / 2),
      charisma_mod: Math.floor((characteristics.charisma - 10) / 2),
      diplomacy_mod:
        characteristics.diplomacy !== null
          ? Math.floor((characteristics.diplomacy - 10) / 2)
          : null,
    };
  };

  async function switchEditable() {
    if (isStatEditable && isFormAltered) {
      // Calculation of mods values
      const updatedStats = calculateModifiers(form);
      setValues(updatedStats);

      try {
        const response = await fetch(API_URL + "characterstats/" + stat_id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSnackbarMessage("Statistiques mises à jour avec succès !");
          setSnackbarSeverity("success");
          setIsFormAltered(false);
        } else {
          setSnackbarMessage("Erreur lors de la mise à jour des statistiques.");
          setSnackbarSeverity("error");
        }
      } catch (error) {
        setSnackbarMessage("Erreur réseau : " + error.message);
        setSnackbarSeverity("error");
      }
      setSnackbarOpen(true);
    }
    setIsStatEditable(!isStatEditable);
  }

  const onChange = (e) => {
    setIsFormAltered(true);
    setValues({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Fermer automatiquement après 4 secondes
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <MDBox display="flex" justifyContent="space_around" alignItems="left">
        <Grid sm={10} px={5} py={1}>
          <MDBox textAlign="left">
            <MDTypography
              textAlign="left"
              my={1}
              variant="h4"
              display="inline"
              color="dark"
              sx={{
                fontSize: "1.25rem",
              }}
            >
              Bonus de maitrise :&nbsp;
            </MDTypography>
            {!isStatEditable ? (
              <MDTypography
                textAlign="left"
                variant="h4"
                color="dark"
                display="inline"
                sx={{
                  fontSize: "1.25rem",
                }}
              >
                {form.proficiency}
              </MDTypography>
            ) : (
              <MDInput
                variant="outlined"
                textAlign="left"
                color="dark"
                display="inline"
                type="number"
                sx={{
                  width: "3rem",
                  textAlign: "Center",
                }}
                id="proficiency"
                value={form.proficiency}
                onChange={onChange}
              />
            )}
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
          { label: "Force", id: "strength", modId: "strength_mod", icon: "fitness_center" },
          {
            label: "Dextérité",
            id: "dexterity",
            modId: "dexterity_mod",
            icon: "sports_martial_arts",
          },
          {
            label: "Constitution",
            id: "constitution",
            modId: "constitution_mod",
            icon: "favorite",
          },
          {
            label: "Intelligence",
            id: "intelligence",
            modId: "intelligence_mod",
            icon: "local_library",
          },
          { label: "Sagesse", id: "wisdom", modId: "wisdom_mod", icon: "emoji_objects" },
          { label: "Charisme", id: "charisma", modId: "charisma_mod", icon: "auto_awesome" },

          {
            label: "Diplomatie",
            id: "diplomacy",
            modId: "diplomacy_mod",
            icon: "group",
            optional: true,
          },

          { label: "Physique", id: "physic", icon: "accessibility_new", optional: true },
          { label: "Mental", id: "mental", icon: "psychology", optional: true },
          { label: "Social", id: "social", icon: "people", optional: true },
        ]
          .filter((stat) => form[stat.id] !== null)
          .map((stat) => (
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
                <MDTypography
                  sx={{
                    textAlign: "left",
                  }}
                  variant="h4"
                  color="dark"
                >
                  {stat.label}
                </MDTypography>
              </Grid>
              <Grid sm={2} py={1}>
                {!isStatEditable ? (
                  <MDTypography
                    variant="h4"
                    sx={{
                      fontweight: "light",
                      textAlign: "center",
                    }}
                  >
                    {form[stat.id]}
                  </MDTypography>
                ) : (
                  <MDInput
                    variant={isStatEditable ? "outlined" : "standard"}
                    inputProps={{ disabled: !isStatEditable }}
                    type="number"
                    sx={{
                      width: "4rem",
                      fontSize: "2rem",
                      fontweight: "medium",
                      textAlign: "Center",
                    }}
                    id={stat.id}
                    value={form[stat.id] || ""}
                    onChange={onChange}
                  />
                )}
              </Grid>
              <Grid sm={2}>
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
                  <MDTypography variant="h4">
                    {stat.modId !== null
                      ? form[stat.modId] >= 0
                        ? `+${form[stat.modId]}`
                        : form[stat.modId]
                      : "+0"}
                  </MDTypography>
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
