import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const PartnerSlider = () => {
  const images = [
    " https://i0.wp.com/civilengineeringstudy.in/wp-content/uploads/2021/01/l-t-projects.png?w=242&ssl=1    ",
    "https://i0.wp.com/civilengineeringstudy.in/wp-content/uploads/2021/01/tata-projects.png?resize=195%2C132&ssl=1",
    "https://ccsrealestates.com/UploadData/78c899ae-a667-42d0-80e6-2de77266e0fbMedallion-logo.jpg",
    "	https://ccsrealestates.com/UploadData/cc93698b-d28d-4385-8d41-0d9ed77d0baaomaxe.jpg",
    "https://ccsrealestates.com/UploadData/103e26ed-ac00-47f4-bdc3-6d89401b85acSBP.jpg",
    "	https://ccsrealestates.com/UploadData/19b7c58f-6640-4a9b-beb9-4a001cf998dfdlf.jpg",
    "	https://ccsrealestates.com/UploadData/efbc3d96-1e41-47a2-99d6-9642252d29belodha.jpg",
    "https://i0.wp.com/civilengineeringstudy.in/wp-content/uploads/2021/01/reliance-projects.png?resize=266%2C95&ssl=1",
    "		https://ccsrealestates.com/UploadData/e07970cb-666a-49bd-956a-596d1afb4378ambika.jpg",
    "		https://ccsrealestates.com/UploadData/a5f83ea0-a9f1-4a7c-9e3f-bdc249103b02Aerovista.jpg",
    "	https://ccsrealestates.com/UploadData/015776eb-4157-47d9-b5c0-e28e52d4c46egodreg.jpg",
    "https://ccsrealestates.com/UploadData/becfb22c-67b7-40e1-be46-0032416b2b96marbella-grand.jpg",
    "	https://ccsrealestates.com/UploadData/025ec359-3eab-4719-bd38-f3b65f99a488Gillco.jpg",
    "https://ccsrealestates.com/UploadData/6aeedfae-2cf7-4afb-a9c5-1da6c8592839suntec.jpg",
    "	https://ccsrealestates.com/UploadData/3bf47db9-21d8-499c-9e92-f8f78e428cafaffinity.jpg",
  ];

  return (
    <div className="partner-wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={5}
        spaceBetween={5}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="swiper-container partnerslider-container"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = ".swiper-button-prev";
          swiper.params.navigation.nextEl = ".swiper-button-next";
          swiper.pagination.destroy();
          swiper.pagination.init();
          swiper.pagination.update();
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="img_area">
              <img src={src} alt={`Company ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
