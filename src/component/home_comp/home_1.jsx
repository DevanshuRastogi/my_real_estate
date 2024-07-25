import { Grid } from "@mui/material";
import * as React from 'react';
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/images/top_home.png";
import VanillaTilt from "vanilla-tilt";
import SearchBar from "../searchbar";

const Home_1 = () => {
  React.useEffect(() => {
    const imageElement = document.querySelector(".home_image img");
    VanillaTilt.init(imageElement, {
      max: 10,
      speed: 1000,
      glare: true,
      "max-glare": 0.5,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)"
    });
    return () => {
      if (imageElement.vanillaTilt) {
        imageElement.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section className="home_1">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="home_1_info">
              <div className="home_1_icon">
                <HomeIcon sx={{ color: "#7065F0" }} />
                <h4>Best Real Estate </h4>
              </div>
              <div className="home_1_heading">
                <h1>
                  Make Yourself At Home
                </h1>
              </div>
              <div className="home_1_para">
                <p>
                  Luxury Homes from Lusaka to Livingstone. Experience Zambia's
                  Most Desired Real Estate.
                </p>
              </div>
              <SearchBar />
              <div className="home_image">
                <img src={logo} alt="Real Estate Logo" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
              <div className="eclipse"></div>
    </section>
  );
};

export default Home_1;