// src/components/SellerProfile.js
import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profile from "../assets/images/profile_pic.png";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import property1 from "../assets/images/select1.png";
import property2 from "../assets/images/select2.png";
import property4 from "../assets/images/select4.png";
import property5 from "../assets/images/select5.png";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const propertyTypes = [
  { id: 1, name: "Modern Villa", img: property1 },
  { id: 2, name: "Town House", img: property2 },
  { id: 3, name: "Apartment", img: property2 },
  { id: 4, name: "Family House", img: property4 },
  { id: 5, name: "Other", img: property5 },
];

const SellerProfile = () => {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [role, setRole] = useState("owner");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [floors, setFloors] = useState(1);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handlePropertySelect = (propertyId) => {
    setSelectedProperty(propertyId);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleBathroomsChange = (event) => {
    setBathrooms(event.target.value);
  };

  const handleFloorsChange = (event) => {
    setFloors(event.target.value);
  };

  return (
    <section className="seller_profile">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <div className="left_profile">
                    <div className="left_upper">
                      <div className="left_upper_img">
                        <img src={profile} alt="profile" />
                      </div>
                      <div className="left_upper_info">
                        <h3>John Cooper</h3>
                        <p>demo@example.com</p>
                      </div>
                    </div>
                    <div className="left_lower">
                      <ul>
                        <li onClick={() => handleNavigation("/")}>
                          <div className="phase">
                            <div className="icon">
                              <PermIdentityOutlinedIcon />
                            </div>
                            <p>My Account</p>
                          </div>
                        </li>
                        <li onClick={() => handleNavigation("/changepass")}>
                          <div className="phase">
                            <div className="icon">
                              <LockOutlinedIcon />
                            </div>
                            <p>Change Password</p>
                          </div>
                        </li>
                        <li onClick={() => handleNavigation("/")}>
                          <div className="phase">
                            <div className="icon">
                              <ApartmentOutlinedIcon />
                            </div>
                            <p>My Properties</p>
                          </div>
                        </li>
                        <li onClick={() => handleNavigation("/")}>
                          <div className="phase">
                            <div className="icon">
                              <MapsUgcRoundedIcon />
                            </div>
                            <p>Responses</p>
                          </div>
                        </li>
                        <li onClick={() => handleNavigation("/")}>
                          <div className="phase_l">
                            <div className="icon">
                              <LogoutRoundedIcon />
                            </div>
                            <p>Logout</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9}>
                  <div className="right_profile">
                    <Grid container>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="select_prop">
                          <h3>Select Property Types</h3>
                          <div className="prop_type">
                            <ul>
                              {propertyTypes.map((property) => (
                                <li key={property.id}>
                                  <div
                                    className={`prop_same ${
                                      selectedProperty === property.id
                                        ? "selected"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      handlePropertySelect(property.id)
                                    }
                                  >
                                    <div className="prop_image">
                                      <img
                                        src={property.img}
                                        alt={property.name}
                                      />
                                    </div>
                                    <p>{property.name}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={12} md={12} xs={12} sm={12}>
                        <div className="Other">
                          <h3>If Other Please Specify</h3>
                          <TextField
                            required
                            id="outlined-required"
                            placeholder="Eg.Room"
                            fullWidth
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <div className="property_adds">
                      <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="property">
                            <h3>Property Address</h3>
                            <TextField
                              className="design"
                              required
                              id="outlined-required"
                              placeholder="Address here"
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="property">
                            <h3>Area</h3>
                            <TextField
                              required
                              id="outlined-required"
                              placeholder="Area"
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="rooms">
                      <Grid container spacing={2}>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                          <div className="no_of_bed">
                            <h3>No. of Bedrooms</h3>
                            <Select
                              fullWidth
                              labelId="bedrooms-select-label"
                              id="bedrooms-select"
                              value={bedrooms}
                              onChange={handleBedroomsChange}
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                            </Select>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                          <div className="no_of_bed">
                            <h3>No. of Bathrooms</h3>
                            <Select
                              fullWidth
                              labelId="bathrooms-select-label"
                              id="bathrooms-select"
                              value={bathrooms}
                              onChange={handleBathroomsChange}
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                            </Select>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                          <div className="no_of_bed">
                            <h3>No. of floors</h3>
                            <Select
                              fullWidth
                              labelId="floors-select-label"
                              id="floors-select"
                              value={floors}
                              onChange={handleFloorsChange}
                            >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6 </MenuItem>
                            </Select>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="description">
                      <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="detail_dis">
                            <h3>Description</h3>
                            <TextField
                              required
                              id="outlined-required"
                              placeholder="Write Description and amenities"
                              fullWidth
                              multiline
                              rows={4}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="rent_price">
                      <Grid container spacing={2}>
                        <Grid item lg={6} md={6}>
                          <div className="rent">
                            <h3>Rent & Deposit</h3>
                            <TextField
                              required
                              id="outlined-required"
                              placeholder="Enter here"
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6}>
                          <div className="rent">
                            <h3>Price</h3>
                            <TextField
                              required
                              id="outlined-required"
                              placeholder="Enter here"
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="role">
                      <Grid container spacing={2}>
                        <Grid item lg={6}>
                          <div className="ur_role">
                          <h3>Role</h3>
                          <Select
                            fullWidth
                            labelId="role-select-label"
                            id="role-select"
                            value={role}
                            onChange={handleRoleChange}
                          >
                            <MenuItem value={"owner"}>Owner</MenuItem>
                            <MenuItem value={"agent"}>Agent</MenuItem>
                          </Select>
                          </div>
                         
                        </Grid>
                        <Grid item lg={6}>
                          <div className="ur_role">
                            <h3>Availability</h3>
                          <TextField
                              required
                              id="outlined-required"
                              placeholder="Enter here"
                              fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="personal">
                      <div className="personal_heading">
                      <h3>Personal Information</h3>
                      </div>
                     
                      <Grid container spacing={2}>
                        <Grid item lg={6}>
                          <div className="person_info">
                            <h3>Name</h3>
                            <TextField
                              required
                              id="outlined-required"
                              placeholder="Eg.John Copper"
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6}>
                          <div className="person_info">
                            <h3>Contact Number</h3>
                            <TextField
                              required
                              id="outlined-required"
                              placeholder="+636 *** ***"
                              fullWidth
                            />
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

export default SellerProfile;
