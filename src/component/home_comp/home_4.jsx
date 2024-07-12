import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const images = [
  'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg',
  'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg',
  'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg',
  'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg',
  'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg',
  'https://ogs.ny.gov/sites/g/files/oee981/files/media/2019/01/gettyimages-173844271.jpeg'
];

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-left-arrow" onClick={onClick}>
      <ArrowBackIos />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-right-arrow" onClick={onClick}>
      <ArrowForwardIos />
    </div>
  );
};

const Home_4 = () => {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item lg={12}>
            <div className="slider-container">
              <h2 className="slider-title">See More Properties</h2>
              <p className="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Carousel
                responsive={responsive}
                infinite
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
              >
                {images.map((src, index) => (
                  <div key={index} className="slider-card">
                    <img src={src} alt={`Slide ${index}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home_4;
