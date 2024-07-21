import React, { useState, useEffect, useContext } from "react";
import { Grid, Container, Button, TextField, Select, MenuItem, FormControl } from "@mui/material";
import Dashboard from "./seller_dashboard";
import Profile2 from "../../src/assets/images/profile2.png";
import { states, cities } from "../component/indiastates";
import { UserContext } from "../component/userdata";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

const SellerEdit = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [tempUserData, setTempUserData] = useState({ ...userData });
  const [selectedState, setSelectedState] = useState(userData.state);
  const [selectedCity, setSelectedCity] = useState(userData.city);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setSelectedState(userData.state);
    setSelectedCity(userData.city);
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setTempUserData((prevState) => ({ ...prevState, state: state, city: "" }));
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setTempUserData((prevState) => ({ ...prevState, city: city }));
  };

  const handleSubmit = () => {
    setUserData(tempUserData);
    alert("Profile information saved!");
  };

  const handleCancel = () => {
    setTempUserData({ ...userData });
    setSelectedState(userData.state);
    setSelectedCity(userData.city);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="dashboard_section seller_edit">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Dashboard />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9}>
                  <div className="edit_profile">
                    <div className="edit_profile_img">
                      <img src={Profile2} alt=".." />
                    </div>
                    <h2>Edit Profile</h2>
                    <div className="edit_name edit_margin">
                      <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="edit_your_name edit_all">
                            <h3>First Name</h3>
                            <TextField
                              required
                              id="first-name"
                              name="firstName"
                              value={tempUserData.firstName}
                              onChange={handleInputChange}
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="edit_your_name edit_all">
                            <h3>Last Name</h3>
                            <TextField
                              required
                              id="last-name"
                              name="lastName"
                              value={tempUserData.lastName}
                              onChange={handleInputChange}
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="edit_mail edit_margin">
                      <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="edit_your_mail edit_all">
                            <h3>Email</h3>
                            <TextField
                              required
                              id="email"
                              name="email"
                              value={tempUserData.email}
                              onChange={handleInputChange}
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="edit_number edit_margin">
                      <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="edit_your_number edit_all">
                            <h3>Contact Number</h3>
                            <TextField
                              required
                              id="contact-number"
                              name="contactNo"
                              value={tempUserData.contactNo}
                              onChange={handleInputChange}
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="edit_location edit_margin">
                      <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="edit_your_city edit_all">
                            <h3>City</h3>
                            <FormControl fullWidth>
                              <Select
                                value={selectedCity}
                                onChange={handleCityChange}
                                disabled={!selectedState}
                              >
                                {selectedState && cities[selectedState]?.map((city, index) => (
                                  <MenuItem key={index} value={city.value}>
                                    {city.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="edit_your_state edit_all">
                            <h3>State</h3>
                            <FormControl fullWidth>
                              <Select
                                value={selectedState}
                                onChange={handleStateChange}
                              >
                                {states.map((state, index) => (
                                  <MenuItem key={index} value={state.value}>
                                    {state.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="edit_address edit_margin">
                      <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="edit_your_address edit_all">
                            <h3>Address</h3>
                            <TextField
                              required
                              id="address"
                              name="address"
                              value={tempUserData.address}
                              onChange={handleInputChange}
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="edit_password edit_margin">
                      <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="edit_your_password edit_all">
                            <h3>Password</h3>
                            <TextField
                              required
                              id="password"
                              name="password"
                              value={tempUserData.password}
                              onChange={handleInputChange}
                              type={showPassword ? "text" : "password"}
                              fullWidth
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="edit_profile_button">
                      <div className="button_1">
                      <Button onClick={handleCancel} variant="outlined" className="cancel_btn">Cancel</Button>
                      </div>
                      
                      <Button onClick={handleSubmit} variant="contained" className="save_btn">Save</Button>
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

export default SellerEdit;


