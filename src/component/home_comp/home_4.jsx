import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';



const Home_4 = () => {
  useEffect(() => {
    new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  const imageUrl = 'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg';

  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Trending food</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
            {[...Array(7)].map((_, index) => (
              <div className="swiper-slide tranding-slide" key={index}>
                <div className="tranding-slide-img">
                  <img src={imageUrl} alt="Trending" />
                </div>
              </div>
            ))}
          </div>
          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_4;
