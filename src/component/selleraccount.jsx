import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Dashboard from "./seller_dashboard";
import Profile2 from "../../src/assets/images/profile2.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../component/userdata";

const SAccount = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="dashboard_section account_main">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="outer_profile">
              <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <Dashboard />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={9}>
                  <div className="account_detail">
                    <Grid container>
                      <Grid item lg={9} md={9} sm={9} xs={9}>
                        <div className="left_detail">
                          <div className="left_detail_img">
                            <img src={Profile2} alt="" />
                          </div>
                          <div className="left_all_details">
                            <Grid container>
                              <Grid item lg={6} md={6} sm={6} xs={6}>
                                <div className="left_details">
                                  <div className="left_main">
                                    <h3>First Name</h3>
                                    <p>{userData.firstName}</p>
                                  </div>
                                  <div className="left_main">
                                    <h3>Email</h3>
                                    <p>{userData.email}</p>
                                  </div>
                                  <div className="left_main">
                                    <h3>Contact Number</h3>
                                    <p>{userData.contactNo}</p>
                                  </div>
                                  <div className="left_main">
                                    <h3>City</h3>
                                    <p>{userData.city}</p>
                                  </div>
                                </div>
                              </Grid>
                              <Grid item lg={6} md={6} sm={6} xs={6}>
                                <div className="right_details">
                                  <div className="right_main">
                                    <h3>Last Name</h3>
                                    <p>{userData.lastName}</p>
                                  </div>
                                  <div className="right_main">
                                    <h3>Password</h3>
                                    <p>{userData.password}</p>
                                  </div>
                                  <div className="right_main">
                                    <h3>Address</h3>
                                    <p>{userData.address}</p>
                                  </div>
                                  <div className="right_main">
                                    <h3>State</h3>
                                    <p>{userData.state}</p>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          </div>
                          <div className="edit_button">
                            <Button onClick={() => handleNavigation("/sellerprofile")} variant="outlined" className="btn">Edit</Button>
                          </div>
                        </div>
                      </Grid>
                      <Grid item lg={3} md={3} sm={3} xs={3}>
                        <div className="right_detail">
                          <h2>Profile</h2>
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

export default SAccount;
