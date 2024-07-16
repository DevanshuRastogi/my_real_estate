import { Container } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import sechome from "../../assets/images/3d-rendering-isometric-fdgdf 1.png";
import icon1 from "../../assets/images/Icon.png";
import icon2 from "../../assets/images/Icon 2.png";
import icon3 from "../../assets/images/Icon 3.png";
import icon4 from "../../assets/images/Icon 4.png";

const Home_2 = () => {
  return (
    <section className="home_2">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="browser_properties">
              <Grid container>
                <Grid item lg={5}>
                  <div className="properties_1">
                    <div className="properties_details">
                      <h3>
                        <span>The new way to find your</span>{" "}
                        <span>new home </span>
                      </h3>
                      <p>
                        Find your dream place to live in with more than 10k+
                        properties listed.
                      </p>
                      <Button variant="contained">Browse Properties</Button>
                      <div className="properties_home">
                        <img src={sechome} alt="..." />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={7}>
                  <div className="properties_2">
                    <div className="properties_upper">
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <div className="properties_p1">
                          <div className="p1_image">
                            <img src={icon1} alt="..." />
                          </div>
                          <h4>Property Insurance</h4>
                          <p>
                            We offer our customer property protection of
                            liability coverage and insurance for their better
                            life.
                          </p>
                        </div>
                      </Grid>
                      <Grid item lg={6}  md={6} sm={6} xs={6}>
                        <div className="properties_p1">
                          <div className="p1_image">
                            <img src={icon2} alt="..." />
                          </div>
                          <h4>Best Price</h4>
                          <p>
                            Not sure what you should be charging for your
                            property? No need to worry, let us do the numbers
                            for you.
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                    </div>
                    <div className="properties_lower">

                   
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={6} sm={6} xs={6}>
                        <div className="properties_p1">
                          <div className="p1_image">
                            <img src={icon3} alt="..." />
                          </div>
                          <h4>Lowest Commission</h4>
                          <p>
                            You no longer have to negotiate commissions and
                            haggle with other agents it only cost 2%!
                          </p>
                        </div>
                      </Grid>
                      <Grid item lg={6}  md={6} sm={6} xs={6}>
                        <div className="properties_p1">
                          <div className="p1_image">
                            <img src={icon4} alt="..." />
                          </div>
                          <h4>Overall Control</h4>
                          <p>
                            Get a virtual tour, and schedule visits before you
                            rent or buy any properties. You get overall control.
                          </p>
                        </div>
                      </Grid>
                    </Grid>
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

export default Home_2;
