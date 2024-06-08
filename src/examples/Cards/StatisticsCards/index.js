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
import { useState } from "react";

function StatisticsCard({ color, stats }) {
  const [form, setValues] = useState({
    strength: stats.strength,
    dexterity: stats.dexterity,
    constitution: stats.constitution,
    intelligence: stats.intelligence,
    wisdom: stats.wisdom,
    charisma: stats.charisma,
    proficiency: stats.proficiency,
  });
  const [isStatEditable, setIsStatEditable] = useState(false);

  function switchEditable() {
    if (isStatEditable) {
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
        <Grid container display="flex" justifyContent="space-between">
          <Grid sm={3} py={1}>
            <MDBox
              variant="gradient"
              bgColor={color}
              color={color === "light" ? "dark" : "white"}
              coloredShadow={color}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <Icon fontSize="medium" color="inherit">
                fitness_center
              </Icon>
            </MDBox>
          </Grid>
          <Grid sm={5} py={1} mt={1}>
            <MDBox textAlign="left" lineHeight={1.25}>
              <MDTypography variant="h4" color="dark">
                Force
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox textAlign="left" lineHeight={1.5}>
              <MDTypography variant="h4" fontWeight="light" color="text">
                <MDInput
                  variant={isStatEditable ? "outlined" : "standard"}
                  inputProps={{ disabled: !isStatEditable }}
                  sx={{
                    ".MuiInputBase-input": { fontSize: "1.25rem" },
                    width: "4rem",
                  }}
                  id="strength"
                  name="strength"
                  onChange={onChange}
                  defaultValue={form.strength}
                ></MDInput>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox
              textAlign="right"
              borderRadius="50%"
              borderColor="dark"
              border="2px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <MDTypography variant="h4" color="dark">
                +2
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>

        {/* Dexterity */}

        <Grid container display="flex" justifyContent="space-between">
          <Grid sm={3} py={1}>
            <MDBox
              variant="gradient"
              bgColor={color}
              color={color === "light" ? "dark" : "white"}
              coloredShadow={color}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <Icon fontSize="medium" color="inherit">
                sports_martial_arts
              </Icon>
            </MDBox>
          </Grid>
          <Grid sm={5} py={1} mt={1}>
            <MDBox textAlign="left" lineHeight={1.25}>
              <MDTypography variant="h4" color="dark">
                Dextérité
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox textAlign="left" lineHeight={1.5}>
              <MDTypography variant="h4" fontWeight="light" color="text">
                <MDInput
                  variant={isStatEditable ? "outlined" : "standard"}
                  inputProps={{ disabled: !isStatEditable }}
                  sx={{
                    ".MuiInputBase-input": { fontSize: "1.25rem" },
                    width: "4rem",
                  }}
                  id="dexterity"
                  name="dexterity"
                  onChange={onChange}
                  defaultValue={stats.dexterity}
                ></MDInput>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox
              textAlign="right"
              borderRadius="50%"
              borderColor="dark"
              border="2px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <MDTypography variant="h4" color="dark">
                +2
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        {/* Constitution */}
        <Grid container display="flex" justifyContent="space-between">
          <Grid sm={3} py={1}>
            <MDBox
              variant="gradient"
              bgColor={color}
              color={color === "light" ? "dark" : "white"}
              coloredShadow={color}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <Icon fontSize="medium" color="inherit">
                favorite
              </Icon>
            </MDBox>
          </Grid>
          <Grid sm={5} py={1} mt={1}>
            <MDBox textAlign="Left" lineHeight={1.25}>
              <MDTypography variant="h4" color="dark">
                Constitution
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox textAlign="left" lineHeight={1.5}>
              <MDTypography variant="h4" fontWeight="light" color="text">
                <MDInput
                  variant={isStatEditable ? "outlined" : "standard"}
                  inputProps={{ disabled: !isStatEditable }}
                  sx={{
                    ".MuiInputBase-input": { fontSize: "1.25rem" },
                    width: "4rem",
                  }}
                  id="constitution"
                  name="constitution"
                  onChange={onChange}
                  defaultValue={stats.constitution}
                ></MDInput>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox
              textAlign="right"
              borderRadius="50%"
              borderColor="dark"
              border="2px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <MDTypography variant="h4" color="dark">
                +2
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        {/* Intelligence */}
        <Grid container display="flex" justifyContent="space-between">
          <Grid sm={3} py={1}>
            <MDBox
              variant="gradient"
              bgColor={color}
              color={color === "light" ? "dark" : "white"}
              coloredShadow={color}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <Icon fontSize="medium" color="inherit">
                local_library
              </Icon>
            </MDBox>
          </Grid>
          <Grid sm={5} py={1} mt={1}>
            <MDBox textAlign="left" lineHeight={1.25}>
              <MDTypography variant="h4" color="dark">
                Intelligence
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox textAlign="left" lineHeight={1.5}>
              <MDTypography variant="h4" fontWeight="light" color="text">
                <MDInput
                  variant={isStatEditable ? "outlined" : "standard"}
                  inputProps={{ disabled: !isStatEditable }}
                  sx={{
                    ".MuiInputBase-input": { fontSize: "1.25rem" },
                    width: "4rem",
                  }}
                  id="intelligence"
                  name="intelligence"
                  onChange={onChange}
                  defaultValue={stats.intelligence}
                ></MDInput>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox
              textAlign="right"
              borderRadius="50%"
              borderColor="dark"
              border="2px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <MDTypography variant="h4" color="dark">
                +2
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        {/* Wisdom */}
        <Grid container display="flex" justifyContent="space-between">
          <Grid sm={3} py={1}>
            <MDBox
              variant="gradient"
              bgColor={color}
              color={color === "light" ? "dark" : "white"}
              coloredShadow={color}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <Icon fontSize="medium" color="inherit">
                emoji_objects
              </Icon>
            </MDBox>
          </Grid>
          <Grid sm={5} py={1} mt={1}>
            <MDBox textAlign="left" lineHeight={1.25}>
              <MDTypography variant="h4" color="dark">
                Sagesse
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox textAlign="left" lineHeight={1.5}>
              <MDTypography variant="h4" fontWeight="light" color="text">
                <MDInput
                  variant={isStatEditable ? "outlined" : "standard"}
                  inputProps={{ disabled: !isStatEditable }}
                  sx={{
                    ".MuiInputBase-input": { fontSize: "1.25rem" },
                    width: "4rem",
                  }}
                  id="wisdom"
                  name="wisdom"
                  onChange={onChange}
                  defaultValue={stats.wisdom}
                ></MDInput>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox
              textAlign="right"
              borderRadius="50%"
              borderColor="dark"
              border="2px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <MDTypography variant="h4" color="dark">
                +2
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
        {/* Charisma */}
        <Grid container display="flex" justifyContent="space-between">
          <Grid sm={3} py={1}>
            <MDBox
              variant="gradient"
              bgColor={color}
              color={color === "light" ? "dark" : "white"}
              coloredShadow={color}
              borderRadius="xl"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <Icon fontSize="medium" color="inherit">
                auto_awesome
              </Icon>
            </MDBox>
          </Grid>
          <Grid sm={5} py={1} mt={1}>
            <MDBox textAlign="left" lineHeight={1.25}>
              <MDTypography variant="h4" color="dark">
                Charisme
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox textAlign="left" lineHeight={1.5}>
              <MDTypography variant="h4" fontWeight="light" color="text">
                <MDInput
                  variant={isStatEditable ? "outlined" : "standard"}
                  inputProps={{ disabled: !isStatEditable }}
                  sx={{
                    ".MuiInputBase-input": { fontSize: "1.25rem" },
                    width: "4rem",
                  }}
                  id="charisma"
                  name="charisma"
                  onChange={onChange}
                  defaultValue={stats.charisma}
                ></MDInput>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid sm={2} py={1}>
            <MDBox
              textAlign="right"
              borderRadius="50%"
              borderColor="dark"
              border="2px solid"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="3rem"
              height="3rem"
            >
              <MDTypography variant="h4" color="dark">
                +2
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
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
