import React from 'react'
import { Container, Grid} from "@mui/material";
const banner = ({ title }) => {
    
  return (
    <section className=" banner">
        
    <Container>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className="banner_main">
            <h1>{title}</h1>
          </div>
            </Grid>
          </Grid>
        </Container>
    </section>
  )
}

export default banner