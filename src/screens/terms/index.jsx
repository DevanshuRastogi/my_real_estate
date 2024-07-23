 import React from "react";
import Term from "../../component/privacy/terms"

import { Container, Grid} from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Banner from "../../component/banner";

const Terms = () => {
  return (
    <>
    <Header />
    <Banner title="Terms & Conditions "/>
      



        <section className="writing_content">
          <Container>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="content_main">

            <Term />
            </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      <Footer />
    </>
  );
};

export default Terms;
