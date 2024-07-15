import React from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import ContactHouse from "../assets/images/contact_house.png";

const ContactForm = () => {
  return (
    <section className="contact_sec">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="rest_content">
              <div className="para_heading">
                <h3>Have a question or need assistance?</h3>
                <p>
                  Reach out to us via email, phone, or the contact form below.
                  We're eager to assist you.
                </p>
              </div>
              <div className="image_contact_form">
                <Grid container spacing={10}>
                  <Grid item lg={5} md={4} sm={6} xs={6}>
                    <div className="house_image">
                      <img src={ContactHouse} alt="..." />
                    </div>
                  </Grid>
                  <Grid item lg={7} md={6} sm={6} xs={6}>
                    <div className="contact_form_container">
                      <div className="form_section_all">
                        <div className="form_fields">
                          <Grid container spacing={4}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                  shrink
                                  data-label-last="*"
                                  htmlFor="fnameId"
                                >
                                  First Name
                                </InputLabel>
                                <OutlinedInput
                                  placeholder="Enter Your First Name"
                                  id="fnameId"
                                  //// //  label=""""""
                                />
                              </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                  shrink
                                  data-label-last="*"
                                  htmlFor="lnameId"
                                >
                                  Last Name
                                </InputLabel>
                                <OutlinedInput
                                  placeholder="Enter Your Last Name"
                                  id="lnameId"
                                 // //  label="""""Last Name"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                  shrink
                                  data-label-last="*"
                                  htmlFor="phoneId"
                                >
                                  Phone Number
                                </InputLabel>
                                <OutlinedInput
                                  placeholder="Enter Your Phone Number"
                                  id="phoneId"
                                 // //  label="""""Phone Number"
                                  type="tel"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                              <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                  shrink
                                  data-label-last="*"
                                  htmlFor="emailId"
                                >
                                  Email
                                </InputLabel>
                                <OutlinedInput
                                  placeholder="Enter Your Email Id"
                                  id="emailId"
                                 // //  label="""""Email"
                                  type="email"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                  shrink
                                  data-label-last="*"
                                  htmlFor="messageId"
                                >
                                  Message
                                </InputLabel>
                                <OutlinedInput
                                  placeholder="Write message"
                                  id="messageId"
                                 // //  label="""""Message"
                                  multiline
                                  rows={4}
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                          <div className="submit_btn">
                            <Button variant="contained" type="submit">
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactForm;
