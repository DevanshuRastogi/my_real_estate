// src/components/SellerProfile.js
import React, {useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile_pic.png";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PropPage from "../../component/proppage";
import PropCard from "../../component/propcard";
import Dashboard from "../../component/seller_dashboard";


const MyProperty = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      let url = "http://localhost:5000/buy";
      const response = await fetch(url);
      const data = await response.json();
      setProperties(data);
    }
    fetchProperties();
  }, []);

  return (
    <section className="dashboard_section seller_profile">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Dashboard />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9}>
                  <div className="prop_sec">
                <div className="prop_counter">
                    <h2>{properties.length} Results</h2>
                    <h6>in Mumbai</h6>
                    </div>
                    <div className="propCards">
                      {" "}
                      <PropCard properties={properties} />
                    </div>
                    </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MyProperty;
