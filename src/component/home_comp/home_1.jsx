import { Grid } from "@mui/material";
import * as React from 'react';
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/images/download-removebg-preview.png";


import SearchBar from "../searchbar"
const Home_1 = () => {
  // const [property, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <section className="home_1">
      <Container>
        <Grid conatiner>
          <Grid item lg={12}>
            <div className="home_1_info">
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
              <SearchBar />
              <div className="home_image">
                <img src={logo} alt="..." />
              </div>
              <div className="eclipse">
                
              </div>
              {/* <div className="sell_buy">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={property}
                  label="Property Type"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home_1;
