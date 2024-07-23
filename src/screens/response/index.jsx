// src/components/SellerProfile.js
import React, {useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RespoCard from "../../component/respo";

import Dashboard from "../../component/seller_dashboard";
import Header from "../../component/header";
import Footer from "../../component/footer";


const Response = () => {
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
    <>
    <Header />
    <section className="dashboard_section respo_prop">
      
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Dashboard />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9}>
                  <div className="respo_sec">
              
                    <div className="resonse_cards">
                      {" "}
                      <RespoCard properties={properties} />
                    </div>
                    </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer />
    </>
  );
};

export default Response;
