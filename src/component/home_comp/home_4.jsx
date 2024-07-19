// React component with Swiper slider
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
//  Make sure to import the SCSS file

const Home_4 = () => {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item lg={12}>
            <div className="slider_parent">
              <h2>See More Properties</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                centeredSlidesBounds={true}
                centerInsufficientSlides={true}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 3.99,
                  slideShadows: true,
                  scale: 1,
                }}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://wallpaperaccess.com/full/4722330.jpg"
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.pinimg.com/originals/71/15/d7/7115d7b189692ef2f4ce327137a54154.jpg"
                    alt="Slide 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://myersjackson.com/wp-content/uploads/2020/06/minimal-hero-01.jpg"
                    alt="Slide 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://c0.wallpaperflare.com/preview/11/300/916/architectural-design-architecture-blue-sky-buildings.jpg"
                    alt="Slide 4"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://wallpapercave.com/wp/wp4110652.jpg"
                    alt="Slide 5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://www.jllhomes.co.in/sites/olm_ipin/files/Real%20Estate%20in%20Delhi.png"
                    alt="Slide 6"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://signaturevillas.co.in/wp-content/uploads/2020/01/signature-villas-nv.jpg"
                    alt="Slide 7"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://wallpaperaccess.com/full/4401192.jpg"
                    alt="Slide 8"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-9.jpg"
                    alt="Slide 9"
                  />
                </SwiperSlide>
                <div className="swiper-button-prev">
                  <ArrowBackIos />
                </div>
                <div className="swiper-button-next">
                  <ArrowForwardIos />
                </div>
              </Swiper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home_4;
