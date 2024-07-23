import { states, cities } from "../../src/component/indiastates";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../src/component/userdata";
import {
  Grid,
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BuyerDetails = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [selectedState, setSelectedState] = useState(userData.state);
  const [selectedCity, setSelectedCity] = useState(userData.city);
  const [tempUserData, setTempUserData] = useState({ ...userData });
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedState(userData.state);
    setSelectedCity(userData.city);
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData((prevState) => ({ ...prevState, [name]: value }));
    if (name === "email") {
      setEmail(value);
    }
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
    navigate("/buyersubmit", { state: { email } });
  };

  const handleCancel = () => {
    setTempUserData({ ...userData });
    setSelectedState(userData.state);
    setSelectedCity(userData.city);
  };

  return (
    <section className="buy_fill">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="buy_details">
              <div className="buy_detail_h1">
                <h1>Fill In Details</h1>
              </div>
              <div className="buy_fill_form">
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <div className="buy_form">
                      <h3>First Name</h3>
                      <TextField
                        name="firstName"
                        placeholder="Mehrab"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                      />
                    </div>
                  </Grid>
                  <Grid item lg={6}>
                    <div className="buy_form">
                      <h3>Last Name</h3>
                      <TextField
                        name="lastName"
                        placeholder="Bozorgi"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="buy_fill_form">
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <div className="buy_form">
                      <h3>Email</h3>
                      <TextField
                        name="email"
                        placeholder="Mehrabbozorgi.business@gmail.com"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                      />
                    </div>
                  </Grid>
                  <Grid item lg={6}>
                    <div className="buy_form">
                      <h3>Contact Number</h3>
                      <TextField
                        name="contactNumber"
                        placeholder="58077.79"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="buy_fill_form_lst">
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <div className="buy_form">
                      <h3>City</h3>
                      <FormControl fullWidth>
                        <Select
                          value={selectedCity}
                          onChange={handleCityChange}
                          disabled={!selectedState}
                        >
                          {selectedState &&
                            cities[selectedState]?.map((city, index) => (
                              <MenuItem key={index} value={city.value}>
                                {city.label}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item lg={6}>
                    <div className="buy_form">
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
              <div className="buy_sumbit_btn">
                <Button
                  variant="contained"
                  className="save_btn"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BuyerDetails;
