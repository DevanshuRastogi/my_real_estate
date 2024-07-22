import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Home_3 from "../../component/home_comp/home_3";
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Location from "../../assets/images/location.png";
import Area from "../../assets/images/area.png";
import BathroomIco from "../../assets/images/bathroom.png";
import BedroomIco from "../../assets/images/bedroom.png";
import CallIco from "../../assets/images/Phone.png";
import EmailIco from "../../assets/images/Mail.png";

const SingleProp = () => {
  const data = useLoaderData();
  const {
    prop_image_big,
    prop_image_small1,
    prop_image_small2,
    Price,
    prop_name,
    property_address,
    property_post_date,
    Description,
    area,
    Bedroom,
    Bathroom,
    agent_name,
    agent_address,
    agent_call,
    agent_email,
  } = data;

  return (
    <>
      <Header />
      <section className="singleprop_page">
        <Container>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="single_prop_main">
                <Grid container spacing={4}>
                  <Grid item lg={7} md={7} sm={7} xs={7}>
                    <div className="image_all">
                      <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                          <div className="big_img">
                            <img src={prop_image_big} alt="" />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="small1_img">
                            <img src={prop_image_small1} alt="" />
                          </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <div className="small2_img">
                            <img src={prop_image_small2} alt="" />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item lg={5} md={5} sm={5} xs={5}>
                    <div className="detail_all">
                      <div className="property_only_detail">
                        <div className="name_addrs_price">
                          <div className="price_name">
                            <h3 className="name">{prop_name}</h3>
                            <h3 className="price">{Price} Lakhs</h3>
                          </div>
                          <div className="addrs">
                            <div className="location_ico">
                              {" "}
                              <img src={Location} alt="" />
                            </div>{" "}
                            {property_address.street}, {property_address.city},{" "}
                            {property_address.Country},{" "}
                            {property_address.pincode}
                          </div>
                        </div>
                        <div className="date_description_area">
                          <p className="date">
                            Listed on : {property_post_date}
                          </p>
                          <h5>Description</h5>
                          <p className="full_description">
                            {Description.substring(0, 281)}......
                          </p>
                          <Link>
                            <div className="link_content">Read More</div>{" "}
                          </Link>
                          <div className="area_bathroom_bed">
                            <ul>
                              <li>
                                <div className="content_under_icon">
                                  <div className="common_ico_main">
                                    <div className="common_ico">
                                      <img src={Area} alt="" />
                                    </div>
                                    <div className="label">Area </div>
                                  </div>
                                  <h5>{area} sq. ft</h5>
                                  {/* <p><div className="common_ico"> <img src={Area} alt="" /></div> Area </p> */}
                                </div>
                              </li>
                              <li>
                                <div className="content_under_icon">
                                  <div className="common_ico_main">
                                    <div className="common_ico">
                                      <img src={BedroomIco} alt="" />
                                    </div>
                                    <div className="label">Area </div>
                                  </div>
                                  <h5>{Bedroom} sq. ft</h5>
                                  {/* <p><div className="common_ico"> <img src={Area} alt="" /></div> Area </p> */}
                                </div>
                              </li>
                              <li>
                                <div className="content_under_icon">
                                  <div className="common_ico_main">
                                    <div className="common_ico">
                                      <img src={BathroomIco} alt="" />
                                    </div>
                                    <div className="label">Area </div>
                                  </div>
                                  <h5>{Bathroom} sq. ft</h5>
                                  {/* <p><div className="common_ico"> <img src={Area} alt="" /></div> Area </p> */}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="agentdetail">
                        <h5>Agent Details</h5>
                        <p className="agn_name">
                          <h6>Name: </h6>
                          <p>{agent_name}</p>
                        </p>
                        <p className="agn_addrs">
                          <h6>Address : </h6>
                          <p>{agent_address}</p>
                        </p>

                        <div className="agent_phn_email">
                          <div className="call">
                            <p>
                              <h6>
                                <div className="call_mail_ico">
                                  {" "}
                                  <img src={CallIco} alt="" />
                                </div>
                                Call:{" "}
                              </h6>
                              <p>{agent_call}</p>
                            </p>
                          </div>
                          <div className="email">
                            <p>
                              <h6>
                                {" "}
                                <div className="call_mail_ico">
                                  {" "}
                                  <img src={EmailIco} alt="" />
                                </div>
                                Email :{" "}
                              </h6>
                              <p>{agent_email}</p>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="get_in_touch">
                        <Button variant="contained">Get in Touch</Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="home_3_comp">
          <Container>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className="h3_div">
                  <h3>Explore other properties</h3>
                </div>
              </Grid>
            </Grid>
          </Container>
          <div className="home3">
            <Home_3 displayCount={3} feature={false} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleProp;
