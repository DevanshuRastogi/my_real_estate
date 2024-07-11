import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/images/Mask group.png"


const Home_1 = () => {
  return (
    <section className="home_1">
      <Container>
        <Grid conatiner>
          <Grid item lg={12}>
            <div className="home_1_info">
              <div className="right_color"></div>
              <div className="eclipse" >
                
              </div>
              <div className="home_1_icon">
                <HomeIcon sx={{ color: "#7065F0" }} />
                <h4>Best Real Estate </h4>
              </div>
              <div className="home_1_heading">
                <h1>
                  <span>Make Yourself </span>
                  <span> At Home</span>
                </h1>
              </div>
              <div className="home_1_para">
                <p>
                  Luxury Homes from Lusaka to Livingstone. Experience Zambia's
                  Most Desired Real Estate.
                </p>
              </div>
              <div className="home_image">
                <img src={logo} alt="..." />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home_1;
