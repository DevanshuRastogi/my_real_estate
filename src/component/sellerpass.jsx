import React, { useState, useContext } from "react";
import { Grid, Container, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import Dashboard from "./seller_dashboard";
import SecurityLogo from "../assets/images/Security.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { UserContext } from "../component/userdata";

const SellerPassword = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = (setter, value) => () => {
    setter(!value);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      setUserData((prevData) => ({ ...prevData, password: newPassword }));
      setNewPassword("");
      setConfirmPassword("");
      alert("Password changed successfully");
    } else {
      alert("New Password and Confirm Password do not match");
    }
  };

  return (
    <section className="dashboard_section seller_pass">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Dashboard />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9}>
                  <div className="seller_password">
                    <Grid container>
                      <Grid item lg={9} md={9} sm={9} xs={9}>
                        <div className="change_pass">
                          <h1>Change Password </h1>
                          <p>
                            Please enter the email address you use when creating
                            your account, We’ll send you the instructions to
                            reset your password
                          </p>
                          <div className="old_pass">
                            <h3>Old Password</h3>
                            <TextField
                              fullWidth
                              type={showOldPassword ? "text" : "password"}
                              value={userData.password}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={handleClickShowPassword(setShowOldPassword, showOldPassword)}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showOldPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              variant="standard"
                              disabled
                            />
                          </div>
                          <div className="new_pass old_pass">
                            <h3>New Password</h3>
                            <TextField
                              fullWidth
                              type={showNewPassword ? "text" : "password"}
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={handleClickShowPassword(setShowNewPassword, showNewPassword)}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              variant="standard"
                            />
                          </div>
                          <div className="confirm_pass old_pass">
                            <h3>Confirm Password</h3>
                            <TextField
                              fullWidth
                              type={showConfirmPassword ? "text" : "password"}
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={handleClickShowPassword(setShowConfirmPassword, showConfirmPassword)}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                              variant="standard"
                            />
                          </div>
                          <div className="chng_pass_button">
                            <Button variant="contained" onClick={handleChangePassword}>Change Password</Button>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={3} md={3} sm={3} xs={3}>
                        <div className="change_pass_image">
                          <img src={SecurityLogo} alt="" />
                        </div>
                      </Grid>
                    </Grid>
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

export default SellerPassword;
