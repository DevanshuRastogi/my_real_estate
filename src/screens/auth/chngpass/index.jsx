import React from "react";
import loginhandImage from "./../../../assets/images/loginhand.jpg";
import mainlogo from "./../../../assets/images/mainlogo.png";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
// import FilledInput from '@mui/material/FilledInput';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
// import FormHelperText from '@mui/material/FormHelperText';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from "@mui/icons-material/Visibility";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Checkbox, FormControlLabel, Link } from "@mui/material";
import Button from "@mui/material/Button";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <section className="login_page_outer changepass">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="inner_main_container">
              <Grid container>
                <Grid items lg={6} md={6} sm={6} xs={6}>
                  <div className="inner_left_container">
                    <div className="logo_container">
                      <img
                        width={"100%"}
                        height={"100%"}
                        src={mainlogo}
                        alt="..."
                      />
                    </div>
                    <div className="form_section_all">
                      <h3>Change Password</h3>
                      <p>
                        Please enter the email address you use when creating
                        your account,We’ll send you the instructions to reset your password
                        </p>
                     
                        
                      <div className="form_fields">
                        <Grid container>
                          <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div autoComplete="off" className="email_field">
                              <FormControl variant="standard">
                                <InputLabel htmlFor="component-helper" shrink>
                                  <b>Email</b>
                                </InputLabel>
                                <Input
                                  placeholder="Enter your email address"
                                  id="component-helper"
                                  startAdornment={
                                    <InputAdornment position="start">
                                      <MailOutlineIcon />
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </div>
                          </Grid>

                          <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="submit_btn">
                              <Button variant="contained">Submit</Button>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid items lg={6} md={6} sm={6} xs={6}>
                  <div className="inner_right_container">
                    <div className="house_hand_image">
                      <img src={loginhandImage} alt="..." />
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
export default Login;

/* 

<div className="form_section_all">
                        <h3>Change Password</h3>
                        <p>If you don't have a registered account</p>
                        <p>
                          You can <a href="javascript:;">Register here !</a>
                        </p>

                        <div className="form_fields">
                          <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <div autoComplete="off" className="email_field">
                                <FormControl variant="standard">
                                  <InputLabel htmlFor="component-helper" shrink>
                                    <b>Email</b>
                                  </InputLabel>
                                  <Input
                                    placeholder="Enter your email address"
                                    id="component-helper"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <MailOutlineIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                            </Grid>

                            

                            <div className="submit_btn">
                              <Button variant="contained">Sign Up</Button>
                            </div>
                          </Grid>
                        </div>
                      </div>

*/
