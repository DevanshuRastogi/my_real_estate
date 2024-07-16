import { Grid } from "@mui/material/";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import img1 from "../../assets/images/home1.png";
import img2 from "../../assets/images/home2.jpg";
// import img3 from "../../../assets/images/home3.png";
// import img4 from "../../../assets/images/home4.png";
// import img5 from "../../../assets/images/home5.png";
// import img6 from "../../../assets/images/home6.png";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
// import { Typography } from "@material-ui/core";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

const Home_3 = () => {
  return (
    <section className="featured">
      <Container>
        <Grid Container>
          <Grid item lg={12}  md={12} sm={12} xs={12}>
            <div className="f_prop">
              <div className="f_prop_heading">
                <h2>Featured Properties</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>

              <div className="f_links">
                <Grid container>
                  <Grid item lg={9}  md={9} sm={9} xs={9}>
                    <div className="f_list_1">
                      <ul>
                        <li>
                          <Button variant="outlined">All Properties</Button>
                        </li>
                        <li>
                          <a href="javascript:;">Villa</a>
                        </li>
                        <li>
                          <a href="javascript:;">Apartment</a>
                        </li>
                        <li>
                          <a href="javascript:;">Office</a>
                        </li>
                      </ul>
                    </div>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={3}>
                    <div className="f_list_2">
                      <a href="javascript:;" aria-label="See All Listing">
                        See All Listing
                        <ArrowForwardIcon sx={{ marginBottom: "-4px" }} />
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="f_grid">
                <Grid container spacing={2}>
                  <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div className="f_grid_1 f_grid_all">
                      <div className="grid_img_1">
                        <img
                          src="http://www.gbdarchitects.com/wp-content/uploads/2013/09/Kiln-Apartments-1.jpg"
                          alt="..."
                        /> 
                      </div>
                      <div className="overlay1">
                        <div className="grid_list">
                          <Button variant="contained">For Sale</Button>
                        </div>
                        <div className="grid_info">
                          <h4>Skyper Pool Apartment</h4>
                          <div className="icon_info_1">
                            <div className="grid_info_icon_1">
                              <AddLocationAltOutlinedIcon />
                            </div>
                            <p>1020 Bloomingdale Ave</p>
                          </div>
                          <div className="grid_flex">
                            <div className="grid_flex_left">
                              <ul>
                                <li>
                                  <div className="icon_info_2">
                                    <div className="grid_info_icon_2">
                                      <HotelOutlinedIcon />
                                    </div>
                                    <p>4</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="icon_info_3">
                                    <div className="grid_info_icon_3">
                                      <BathtubOutlinedIcon />
                                    </div>
                                    <p>2</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="icon_info_4">
                                    <div className="grid_info_icon_4">
                                      <SquareFootIcon />
                                    </div>
                                    <p>450</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="grid_flex_right">
                              <p>280,000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4}md={4} sm={4} xs={4}>
                    <div className="f_grid_2 f_grid_all">
                      <div className="grid_img_1">
                      <img
                          src="https://myersjackson.com/wp-content/uploads/2020/06/minimal-hero-01.jpg"
                          alt="..."
                        /> 
                      </div>
                      <div className="overlay1">
                      </div>
                      <div className="grid_list">
                        <Button variant="contained">For Sale</Button>
                        <div className="grid_list_imp">
                        <Button variant="contained">Featured</Button>
                        </div>
                      </div>
                      <div className="grid_info">
                        <h4>Skyper Pool Apartment</h4>
                        <div className="icon_info_1">
                          <div className="grid_info_icon_1">
                            <AddLocationAltOutlinedIcon />
                          </div>
                          <p>1020 Bloomingdale Ave</p>
                        </div>
                        <div className="grid_flex">
                          <div className="grid_flex_left">
                            <ul>
                              <li>
                                <div className="icon_info_2">
                                  <div className="grid_info_icon_2">
                                    <HotelOutlinedIcon />
                                  </div>
                                  <p>4</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_3">
                                  <div className="grid_info_icon_3">
                                    <BathtubOutlinedIcon />
                                  </div>
                                  <p>2</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_4">
                                  <div className="grid_info_icon_4">
                                    <SquareFootIcon />
                                  </div>
                                  <p>450</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="grid_flex_right">
                            <p>280,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4}md={4} sm={4} xs={4}>
                    <div className="f_grid_3  f_grid_all">
                      <div className="grid_img_1">
                      <img
                          src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202304/villa-design-ideas-that-fuse-beauty-and-functionality/luxury-classic-villa-exterior-design.jpg"
                          alt="..."
                        /> 
                      </div>
                      <div className="overlay1"></div>
                      <div className="grid_list">
                        <Button variant="contained">For Sale</Button>
                      </div>
                      <div className="grid_info">
                        <h4>Skyper Pool Apartment</h4>
                        <div className="icon_info_1">
                          <div className="grid_info_icon_1">
                            <AddLocationAltOutlinedIcon />
                          </div>
                          <p>1020 Bloomingdale Ave</p>
                        </div>
                        <div className="grid_flex">
                          <div className="grid_flex_left">
                            <ul>
                              <li>
                                <div className="icon_info_2">
                                  <div className="grid_info_icon_2">
                                    <HotelOutlinedIcon />
                                  </div>
                                  <p>4</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_3">
                                  <div className="grid_info_icon_3">
                                    <BathtubOutlinedIcon />
                                  </div>
                                  <p>2</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_4">
                                  <div className="grid_info_icon_4">
                                    <SquareFootIcon />
                                  </div>
                                  <p>450</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="grid_flex_right">
                            <p>280,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4}md={4} sm={4} xs={4}>
                    <div className="f_grid_4 f_grid_all">
                      <div className="grid_img_1">
                      <img
                          src="https://robbreport.com/wp-content/uploads/2017/11/manzu-exterior-deck-5.jpg?w=1000"
                          alt="..."
                        /> 
                      </div>
                      <div className="overlay1"></div>
                      <div className="grid_list">
                        <Button variant="contained">For Sale</Button>
                        <div className="grid_list_imp">
                        <Button variant="contained">Featured</Button>
                        </div>
                      </div>
                      <div className="grid_info">
                        <h4>Skyper Pool Apartment</h4>
                        <div className="icon_info_1">
                          <div className="grid_info_icon_1">
                            <AddLocationAltOutlinedIcon />
                          </div>
                          <p>1020 Bloomingdale Ave</p>
                        </div>
                        <div className="grid_flex">
                          <div className="grid_flex_left">
                            <ul>
                              <li>
                                <div className="icon_info_2">
                                  <div className="grid_info_icon_2">
                                    <HotelOutlinedIcon />
                                  </div>
                                  <p>4</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_3">
                                  <div className="grid_info_icon_3">
                                    <BathtubOutlinedIcon />
                                  </div>
                                  <p>2</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_4">
                                  <div className="grid_info_icon_4">
                                    <SquareFootIcon />
                                  </div>
                                  <p>450</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="grid_flex_right">
                            <p>280,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4}md={4} sm={4} xs={4}>
                    <div className="f_grid_5 f_grid_all">
                      <div className="grid_img_1">
                      <img
                          src="https://wallpaperaccess.com/full/4401192.jpg"
                          alt="..."
                        /> 
                      </div>
                      <div className="grid_list">
                        <Button variant="contained">For Sale</Button>
                      </div>
                      <div className="grid_info">
                        <h4>Skyper Pool Apartment</h4>
                        <div className="icon_info_1">
                          <div className="grid_info_icon_1">
                            <AddLocationAltOutlinedIcon />
                          </div>
                          <p>1020 Bloomingdale Ave</p>
                        </div>
                        <div className="grid_flex">
                          <div className="grid_flex_left">
                            <ul>
                              <li>
                                <div className="icon_info_2">
                                  <div className="grid_info_icon_2">
                                    <HotelOutlinedIcon />
                                  </div>
                                  <p>4</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_3">
                                  <div className="grid_info_icon_3">
                                    <BathtubOutlinedIcon />
                                  </div>
                                  <p>2</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_4">
                                  <div className="grid_info_icon_4">
                                    <SquareFootIcon />
                                  </div>
                                  <p>450</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="grid_flex_right">
                            <p>280,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4}md={4} sm={4} xs={4}>
                    <div className="f_grid_6 f_grid_all">
                      <div className="grid_img_1">
                      <img
                          src="https://wallpaperaccess.com/full/4722330.jpg"
                          alt="..."
                        /> 
                      </div>
                      <div className="overlay1">
                      </div>
                      <div className="grid_list">
                        <Button variant="contained">For Sale</Button>
                        <div className="grid_list_imp">
                        <Button variant="contained">Featured</Button>
                        </div>
                      </div>
                      <div className="grid_info">
                        <h4>Skyper Pool Apartment</h4>
                        <div className="icon_info_1">
                          <div className="grid_info_icon_1">
                            <AddLocationAltOutlinedIcon />
                          </div>
                          <p>1020 Bloomingdale Ave</p>
                        </div>
                        <div className="grid_flex">
                          <div className="grid_flex_left">
                            <ul>
                              <li>
                                <div className="icon_info_2">
                                  <div className="grid_info_icon_2">
                                    <HotelOutlinedIcon />
                                  </div>
                                  <p>4</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_3">
                                  <div className="grid_info_icon_3">
                                    <BathtubOutlinedIcon />
                                  </div>
                                  <p>2</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon_info_4">
                                  <div className="grid_info_icon_4">
                                    <SquareFootIcon />
                                  </div>
                                  <p>450</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="grid_flex_right">
                            <p>280,000</p>
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
export default Home_3;
