import React from "react";
import {
  Container,
  Grid,
} from "@mui/material";
import ContactImage from "../../src/assets/images/contact_card_img.jpg";
const ConatctTop = () => {
  return (
    <>
     
      <section className="contact_top_section">
        <Container >
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="top_card">
                <Grid container>
                  <Grid item lg={8} md={12} sm={8} xs={8}>
                    <div className="first_card_content">
                      <h3>CONTACT US</h3>
                      <h2>Get in touch with us.</h2>
                      <h2>We’d love to hear from you.</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Ultricies ipsum
                        scelerisque orci id et. Venenatis elit sagittis dictumst
                        mattis. Vestibulum mauris lacinia libero nunc lorem nec
                        orci bibendum laoreet. Tortor interdum sit neque
                        praesent in sit tristique.
                      </p>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={0} sm={4} xs={4}>
                    <div className="first_card_image">
                      <img src={ContactImage} alt="..." />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default ConatctTop