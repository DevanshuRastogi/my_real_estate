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
    <section className="login_page_outer resetpass">
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
                      <h3>Reset Password </h3>
                      <p>Please enter the email address you use when creating your account, We’ll send you the instructions to reset your password</p>
                      
                      <div className="form_fields">
                        <Grid container>
                        
                          <Grid item  lg={12} md={12} sm={12} xs={12} >
                            <div autoComplete="off" className="pass_field">
                              <FormControl variant="standard">
                                <InputLabel htmlFor="pass-comp" shrink>
                                  <b>Password</b>
                                </InputLabel>
                                <Input
                                  placeholder="Enter your Password"
                                  id="pass-comp"
                                  type={showPassword ? "text" : "password"}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      <LockOutlinedIcon />
                                    </InputAdornment>
                                  }
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                      >
                                        {showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </div>
                          </Grid>
                          <Grid item  lg={12} md={12} sm={12} xs={12} >
                            <div
                              autoComplete="off"
                              className="pass_conf_field pass_field"
                            >
                              <FormControl variant="standard">
                                <InputLabel htmlFor="pass-confirm" shrink>
                                  <b> Confirm Password</b>
                                </InputLabel>
                                <Input
                                  placeholder="Confirm your Password"
                                  id="pass-confirm"
                                  type={showPassword ? "text" : "password"}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      <LockOutlinedIcon />
                                    </InputAdornment>
                                  }
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                      >
                                        {showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                            </div>
                          </Grid>
                          <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="submit_btn">
                            <Button variant="contained">Reset Password</Button>
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