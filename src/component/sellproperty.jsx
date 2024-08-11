import React, { useState } from "react";
import { Container, Grid, TextField, Select, MenuItem, Typography, Box } from "@mui/material";
import property1 from "../assets/images/select1.png";
import property2 from "../assets/images/select2.png";
import property3 from "../assets/images/select3.png";
import property4 from "../assets/images/select4.png";
import property5 from "../assets/images/select5.png";
import propertyblue1 from "../assets/images/selectblue1.png";
import propertyblue2 from "../assets/images/selectblue2.png";
import propertyblue3 from "../assets/images/selectblue3.png";
import propertyblue4 from "../assets/images/selectblue4.png";
import propertyblue5 from "../assets/images/selectblue5.png";

import Dashboard from "./seller_dashboard";

const propertyTypes = [
  { id: 1, name: "Modern Villa", img: property1 ,img1:propertyblue1 },
  { id: 2, name: "Town House", img: property2,img1:propertyblue2},
  { id: 3, name: "Apartment", img: property3,img1:propertyblue3 },
  { id: 4, name: "Family House", img: property4 ,img1:propertyblue4},
  { id: 5, name: "Other", img: property5,img1:propertyblue5 },
];

const SellProperty = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [role, setRole] = useState("owner");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [floors, setFloors] = useState(1);
  const [rent, setRent] = useState("");
  const [price, setPrice] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [errors, setErrors] = useState({ rent: false, price: false, contactNumber: false });

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

  const handleRentChange = (event) => {
    const value = event.target.value;
    setRent(value);
    setErrors({ ...errors, rent: isNaN(value) || value < 0 });
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
    setErrors({ ...errors, price: isNaN(value) || value < 0 });
  };

  const handleContactNumberChange = (event) => {
    const value = event.target.value;
    setContactNumber(value);
    setErrors({ ...errors, contactNumber: isNaN(value) || value < 0 });
  };

  return (
    <section className="dashboard_section seller_main">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Dashboard />
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
                                      selectedProperty === property.id ? "selected" : ""
                                    }`}
                                    onClick={() => handlePropertySelect(property.id)}
                                  >
                                    <div className="prop_image">
                                      <img className="img_gray" src={property.img} alt={property.name} />
                                      <img className="img_blue" src={property.img1} alt={property.name} />
                                
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
                              <MenuItem value={6}>6</MenuItem>
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
                            <Box position="relative">
                              <TextField
                                required
                                id="rent"
                                placeholder="Enter here"
                                fullWidth
                                value={rent}
                                onChange={handleRentChange}
                              />
                              {errors.rent && (
                                <Typography
                                  color="error"
                                  variant="caption"
                                  style={{ position: "absolute", bottom: "-20px", left: 0 }}
                                >
                                  Invalid number
                                </Typography>
                              )}
                            </Box>
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6}>
                          <div className="rent">
                            <h3>Price</h3>
                            <Box position="relative">
                              <TextField
                                required
                                id="price"
                                placeholder="Enter here"
                                fullWidth
                                value={price}
                                onChange={handlePriceChange}
                              />
                              {errors.price && (
                                <Typography
                                  color="error"
                                  variant="caption"
                                  style={{ position: "absolute", bottom: "-20px", left: 0 }}
                                >
                                  Invalid number
                                </Typography>
                              )}
                            </Box>
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
                              id="availability"
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
                              id="name"
                              placeholder="Eg. John Copper"
                              fullWidth
                            />
                          </div>
                        </Grid>
                        <Grid item lg={6}>
                          <div className="person_info">
                            <h3>Contact Number</h3>
                            <Box position="relative">
                              <TextField
                                required
                                id="contact-number"
                                placeholder="+636 *** ***"
                                fullWidth
                                value={contactNumber}
                                onChange={handleContactNumberChange}
                              />
                              {errors.contactNumber && (
                                <Typography
                                  color="error"
                                  variant="caption"
                                  style={{ position: "absolute", bottom: "-20px", left: 0 }}
                                >
                                  Invalid number
                                </Typography>
                              )}
                            </Box>
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

export default SellProperty;
