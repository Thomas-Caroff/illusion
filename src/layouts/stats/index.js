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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import StatisticsCard from "examples/Cards/StatisticsCards/BaseStatsCards";
import ProficiencyCard from "examples/Cards/StatisticsCards/proficiencyCards";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import { useEffect, useState } from "react";
import { API_URL } from "constants";

function Stats() {
  let [caracterisctics, setCaracterisctics] = useState([]);
  const { sales, tasks } = reportsLineChartData;

  const hardcoded_character = "tscxxg28";

  useEffect(() => {
    // Fetch our data from our API
    fetch(API_URL + "character/" + hardcoded_character)
      // Resolve the responsive data
      .then((response) => response.json())
      .then((json) => {
        fetch(API_URL + "characterstats/" + json[0].character_stats)
          .then((response) => response.json())
          .then((stats) => {
            console.log(stats[0]);
            const caracterisctics = {
              id: stats[0].id,

              // DnD/PF/FF
              strength: stats[0].strength,
              dexterity: stats[0].dexterity,
              constitution: stats[0].constitution,
              intelligence: stats[0].intelligence,
              wisdom: stats[0].wisdom,
              charisma: stats[0].charisma,

              proficiency: json[0].proficiency_bonus,

              // Modifiers
              strength_mod: stats[0].str_mod,
              dexterity_mod: stats[0].dex_mod,
              constitution_mod: stats[0].con_mod,
              intelligence_mod: stats[0].int_mod,
              wisdom_mod: stats[0].wis_mod,
              charisma_mod: stats[0].cha_mod,

              // Illusion
              diplomacy: stats[0].diplomacy,
              diplomacy_mod: stats[0].dip_mod,

              // Aventure
              social: stats[0].social,
              mental: stats[0].mental,
              physic: stats[0].physic,
            };

            console.log(stats, json);
            setCaracterisctics(caracterisctics);
          });
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={5}>
            <MDBox mb={1.5}>
              <StatisticsCard
                color="dark"
                stats={caracterisctics}
                setStat={setCaracterisctics}
                stat_id={caracterisctics.id}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <ProficiencyCard color="dark" stats={caracterisctics} setStat={setCaracterisctics} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Stats;
