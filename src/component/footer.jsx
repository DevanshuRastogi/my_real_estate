import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import logo2 from "../../src/assets/images/Group 47603@2x.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer_top_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="footer_upper">
                {/* <Grid container> */}
                {/* <Grid item lg={4}> */}
                <div className="footer_part_1">
                  {/* About Section Starts*/}
                  <h4 className="footer_part_1_h4">About</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <h4>Email : info@jstemplate.net</h4>
                  <h4>Phone : 880 123 456 789</h4>
                </div>
                {/* </Grid> */}
                {/* About Section Ends Here */}
                {/* <Grid item lg={4}> */}
                {/* Quick Links and Category */}
                
                  {/* <Container> */}
                  {/* <Grid container> */}
                  {/* <Grid item lg={6}> */}
                  <div className="footer_part_2_inner_1">
                    {/* Quick Links */}
                    <h4>Quick Link</h4>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Archived</a>
                      </li>
                      <li>
                        <a href="#">Author</a>
                      </li>
                      <li>
                        <a href="#">Container</a>
                      </li>
                    </ul>
                  </div>
                  {/* </Grid> */}
                  {/* <Grid item lg={6}> */}
                  <div className="footer_part_2_inner_2">
                    {/* Category */}
                    <h4>Category</h4>
                    <ul>
                      <li>
                        <a href="#">Lifestyle</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                      <li>
                        <a href="#">Travel</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Economy</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                    </ul>
                  </div>
                  {/* </Grid> */}
                  {/* </Grid> */}
                  {/* </Container> */}
                
                {/* </Grid> */}
                {/* Quick Links and Category Ends Here */}
                {/* <Grid item lg={4}> */}
                  {/* Subscribe Content */}
                  <div className="footer_part_3">
                    <h4>Weekly Newsletter</h4>
                    <p>Get blog articles and offers via email</p>
                    <TextField
                      id="outlined-basic"
                      placeholder="Your Email"
                      sx={{
                        m: 0,
                        width: "270px",
                        height: "38px",
                        paddingBottom: "10px",
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button variant="contained">Subscribe</Button>
                  </div>
                  {/* </Grid> */}
                  {/* Subscribe Content Ends Here */}
                {/* </Grid> */}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="footer_last_section">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="footer_lower">
                <div className="footer_lower_main">
                  {/* <Grid container spacing={2}> */}
                  {/* <Grid item lg={2}> */}
                  <div className="lower_1">
                    <img src={logo2} alt="logo" />
                  </div>
                  {/* </Grid> */}
                  {/* <Grid item lg={5}> */}
                  <div className="lower_2">
                    <ul>
                      <li>
                        <p>@ 2024 All Rights Reserved</p>
                      </li>
                      <li>Powered By Globiz Technology</li>
                    </ul>
                  </div>
                  {/* </Grid> */}
                  {/* <Grid item lg={5}> */}
                  <div className="lower_3">
                    <ul>
                      
                      <li><NavLink to="/terms">Terms of Use</NavLink></li>
                      <li>Privacy Policy</li>
                      <li>Cookie Policy</li>
                    </ul>
                  </div>
                  {/* </Grid> */}
                  {/* </Grid> */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
