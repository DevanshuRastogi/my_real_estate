import { Container } from "@mui/material/";
import Grid from "@mui/material/Grid";
import img1 from "../../../assets/images/Link.png";
import img2 from "../../../assets/images/Link (1).png";
import img3 from "../../../assets/images/Link (2).png";
import img4 from "../../../assets/images/Link (3).png";
import img5 from "../../../assets/images/Link (4).png";
import img6 from "../../../assets/images/Link (5).png";

const Home_5 = () => {
  return (
    <section className="more_properties">
      <Container>
        <Grid container>
          <Grid item lg={12}>
            <div className="all_prop">
              <div className="prop_upper">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <div className="prop_details">
                    <div className="prop_img_1">
                      <img
                        src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>8 properties</p>
                      <h4>New York</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3}>
                  <div className="prop_details">
                    <div className="prop_img_2">
                      <img
                        src="https://images.unsplash.com/photo-1504883303951-581cbf120aa4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>2 properties</p>
                      <h4>Chicago</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3}>
                  <div className="prop_details">
                    <div className="prop_img_3">
                      <img
                        src="https://images.unsplash.com/photo-1601394025790-b95533df1241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxsb3MlMjBhbmdsZXN8ZW58MHx8MHx8fDA%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>2 properties</p>
                      <h4>Los Angeles</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3}>
                  <div className="prop_details">
                    <div className="prop_img_4">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1697730091472-5d74e4737111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNhbiUyMGRpZWdvfGVufDB8fDB8fHww"
                      />
                    </div>
                    <div className="details_head">
                      <p>10 properties</p>
                      <h4>San Diego</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3}>
                <div className="prop_details">
                    <div className="prop_img_5">
                      <img
                        src="https://images.unsplash.com/photo-1587117187126-a0f6208e6739?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
                    <div className="details_head">
                      <p>3 properties</p>
                      <h4>Florida</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                <div className="prop_details">
                    <div className="prop_img_6">
                      <img
                        src="https://images.unsplash.com/photo-1567439098853-010b8c263f6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
                    <div className="details_head">
                      <p>3 properties</p>
                      <h4>Miami


                        
                      </h4>
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

export default Home_5;
