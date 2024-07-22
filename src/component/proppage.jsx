import React, { useEffect, useState } from "react";
import PropCard from "./propcard";

import Filter from "./filter";

import { Container, Grid } from "@mui/material";

const PropPage = () => {
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
    <section className="prop_sec">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div>
              <div className="card_and_filter">
                <Grid container >
                  <Grid item lg={3} md={3} sm={3} xs={3}>
                  
                    <div className="filter_area">
                      <Filter />
                      </div>
                  </Grid>
                  <Grid item lg={9} md={9} sm={9} xs={9}>
                    <div className="prop_counter">
                    <h2>{properties.length} Results</h2>
                    <h6>in Mumbai</h6>
                    </div>
                    <div className="propCards">
                      {" "}
                      <PropCard properties={properties} />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PropPage;
