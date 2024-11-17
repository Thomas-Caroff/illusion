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
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button, Grid, Checkbox, Card, Divider, Icon } from "@mui/material";
import MDInput from "components/MDInput";
import { useState, useEffect } from "react";

import { API_URL } from "constants";

function SkillsCard({ skillList }) {
  const [form, setValue] = useState({ skillList });
  const [isSkillEditable, setIsSkillEditable] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [isFormAltered, setIsFormAltered] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  console.log(skillList);

  useEffect(() => {
    setValue(form);
  }, [skillList]);

  async function switchEditable() {
    if (isSkillEditable && isFormAltered) {
      // try {
      //   const response = await fetch(API_URL + "characterstats/" + stat_id, {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(form),
      //   });
      //   if (response.ok) {
      //     setSnackbarMessage("Statistiques mises à jour avec succès !");
      //     setSnackbarSeverity("success");
      //     setIsFormAltered(false);
      //   } else {
      //     setSnackbarMessage("Erreur lors de la mise à jour des statistiques.");
      //     setSnackbarSeverity("error");
      //   }
      // } catch (error) {
      //   setSnackbarMessage("Erreur réseau : " + error.message);
      //   setSnackbarSeverity("error");
      // }
      // setSnackbarOpen(true);
    }
    setIsStatEditable(!isSkillEditable);
  }

  const onChange = (e) => {
    setIsFormAltered(true);
    setValues({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  // Fonction pour gérer les modifications des cases à cocher
  const handleCheckboxChange = (index, side) => {
    const updatedSkills = [...skillList];
    updatedSkills[index][side] = !updatedSkills[index][side];
    setSkillList(updatedSkills);
  };

  return (
    <Card>
      <MDBox p={2}>
        {skillList.map((skill, index) => (
          <Grid container alignItems="center" spacing={2} key={index}>
            {/* Case cliquable pour "left" */}
            <Grid item>
              <Checkbox checked={skill.left} onChange={() => handleCheckboxChange(index, "left")} />
            </Grid>

            {/* Case cliquable pour "right" */}
            <Grid item>
              <Checkbox
                checked={skill.right}
                onChange={() => handleCheckboxChange(index, "right")}
              />
            </Grid>

            {/* Affichage du "modifier" */}
            <Grid item>
              <MDBox
                textAlign="center"
                borderRadius="md"
                borderColor="dark"
                border="1px solid"
                width="3rem"
                height="2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <MDTypography variant="h6">+15</MDTypography>
              </MDBox>
            </Grid>

            {/* Champ texte pour le "skill_name" */}
            <Grid item xs>
              <MDTypography fullWidth variant="outlined" value={skill.skill_name} />
            </Grid>
          </Grid>
        ))}
      </MDBox>
    </Card>
  );
}

export default SkillsCard;
