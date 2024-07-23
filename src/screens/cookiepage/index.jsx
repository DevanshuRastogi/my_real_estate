import React from "react";
import Cookie from "../../component/privacy/cookie"

import { Container, Grid} from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Banner from "../../component/banner";

const Cookies = () => {
  return (
    <>
    <Header />
    <Banner title="Cookie Policy "/>
      



        <section className="writing_content">
          <Container>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="content_main">

            <Cookie />
            </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      <Footer />
    </>
  );
};

export default Cookies;
