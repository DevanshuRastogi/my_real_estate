import React, { useEffect, useRef } from "react";
import { Grid, Container, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home_3 = ({ displayCount = 6, feature }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const gridItems = gridRef.current.children;
    
    gsap.set(gridItems, { autoAlpha: 0, y: 50 });
    
    ScrollTrigger.batch(gridItems, {
      onEnter: (elements) => {
        gsap.to(elements, {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
          stagger: {
            amount: 1,
            from: "random"
          },
          ease: "power3.out"
        });
      },
      start: "top 80%"
    });

  }, [])

  const propertyData = [
    {
      image: "http://www.gbdarchitects.com/wp-content/uploads/2013/09/Kiln-Apartments-1.jpg",
      title: "Skyper Pool Apartment",
      address: "1020 Bloomingdale Ave",
      bedrooms: 4,
      bathrooms: 2,
      area: 450,
      price: "280,000",
    },
    {
      image: "https://myersjackson.com/wp-content/uploads/2020/06/minimal-hero-01.jpg",
      title: "Luxury Villa",
      address: "2040 Rosewood Lane",
      bedrooms: 5,
      bathrooms: 3,
      area: 550,
      price: "450,000",
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202304/villa-design-ideas-that-fuse-beauty-and-functionality/luxury-classic-villa-exterior-design.jpg",
      title: "Modern Apartment",
      address: "3060 Pine Street",
      bedrooms: 3,
      bathrooms: 2,
      area: 350,
      price: "200,000",
    },
    {
      image: "https://robbreport.com/wp-content/uploads/2017/11/manzu-exterior-deck-5.jpg?w=1000",
      title: "Cozy Cottage",
      address: "4080 Maple Avenue",
      bedrooms: 2,
      bathrooms: 1,
      area: 250,
      price: "150,000",
    },
    {
      image: "https://wallpaperaccess.com/full/4401192.jpg",
      title: "Seaside Retreat",
      address: "5100 Ocean Drive",
      bedrooms: 4,
      bathrooms: 3,
      area: 500,
      price: "550,000",
    },
    {
      image: "https://wallpaperaccess.com/full/4722330.jpg",
      title: "Mountain View Condo",
      address: "6120 Summit Road",
      bedrooms: 3,
      bathrooms: 2,
      area: 400,
      price: "320,000",
    },
  ];

  return (
    <section className="featured">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="f_prop">
              {feature && (
                <div className="f_prop_heading">
                  <h2>Featured Properties</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              )}

              {feature && (
                <div className="f_links">
                  <Grid container>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                      <div className="f_list_1">
                        <ul>
                          <li>
                          <a href="javascript:;">All Properties</a>
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
              )}

              <div className="f_grid">
                <Grid container spacing={2} ref={gridRef}>
                  {propertyData
                    .slice(0, displayCount)
                    .map((property, index) => (
                      <Grid item lg={4} md={4} sm={4} xs={4} key={index}>
                        <div className={`f_grid_${index + 1} f_grid_all`}>
                          <div className="grid_img_1">
                            <img src={property.image} alt={property.title} />
                          </div>
                          <div className="overlay1">
                            <div className="grid_list">
                              <Button variant="contained">For Sale</Button>
                              {index % 2 === 1 && (
                                <div className="grid_list_imp">
                                  <Button variant="contained">Featured</Button>
                                </div>
                              )}
                            </div>
                            <div className="grid_info">
                              <h4>{property.title}</h4>
                              <div className="icon_info_1">
                                <div className="grid_info_icon_1">
                                  <AddLocationAltOutlinedIcon />
                                </div>
                                <p>{property.address}</p>
                              </div>
                              <div className="grid_flex">
                                <div className="grid_flex_left">
                                  <ul>
                                    <li>
                                      <div className="icon_info_2">
                                        <div className="grid_info_icon_2">
                                          <HotelOutlinedIcon />
                                        </div>
                                        <p>{property.bedrooms}</p>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="icon_info_3">
                                        <div className="grid_info_icon_3">
                                          <BathtubOutlinedIcon />
                                        </div>
                                        <p>{property.bathrooms}</p>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="icon_info_4">
                                        <div className="grid_info_icon_4">
                                          <SquareFootIcon />
                                        </div>
                                        <p>{property.area}</p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="grid_flex_right">
                                  <p>{property.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    ))}
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