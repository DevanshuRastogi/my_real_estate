import React, { useEffect, useRef } from 'react';
import { Container } from "@mui/material/";
import Grid from "@mui/material/Grid";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home_5 = () => {
  const cardsRef = useRef([]);
  const centerRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const center = centerRef.current;

    const startAnimation = () => {
      const centerRect = center.getBoundingClientRect();
      const centerX = centerRect.left + centerRect.width / 2;
      const centerY = centerRect.top + centerRect.height / 2;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left + cardRect.width / 2;
        const cardY = cardRect.top + cardRect.height / 2;

        gsap.fromTo(card, {
          x: centerX - cardX,
          y: centerY - cardY,
          opacity: 0,
          scale: 0.5
        }, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1
        });
      });
    };

    ScrollTrigger.create({
      trigger: center,
      start: "top 80%",
      onEnter: startAnimation,
      once: true
    });

  }, []);

  return (
    <section className="more_properties">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="all_prop">
              <div className="prop_upper">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <Grid container spacing={2} ref={centerRef}>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <div className="prop_details" ref={el => cardsRef.current[0] = el}>
                    <div className="prop_img_big">
                      <img
                        src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>8 properties</p>
                      <h4>New York</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <div className="prop_details" ref={el => cardsRef.current[1] = el}>
                    <div className="prop_img_small">
                      <img
                        src="https://images.unsplash.com/photo-1504883303951-581cbf120aa4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>2 properties</p>
                      <h4>Chicago</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <div className="prop_details" ref={el => cardsRef.current[2] = el}>
                    <div className="prop_img_small">
                      <img
                        src="https://images.unsplash.com/photo-1601394025790-b95533df1241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxsb3MlMjBhbmdsZXN8ZW58MHx8MHx8fDA%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>2 properties</p>
                      <h4>Los Angeles</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <div className="prop_details" ref={el => cardsRef.current[3] = el}>
                    <div className="prop_img_small">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1697730091472-5d74e4737111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNhbiUyMGRpZWdvfGVufDB8fDB8fHww"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>10 properties</p>
                      <h4>San Diego</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                  <div className="prop_details" ref={el => cardsRef.current[4] = el}>
                    <div className="prop_img_small">
                      <img
                        src="https://images.unsplash.com/photo-1587117187126-a0f6208e6739?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>3 properties</p>
                      <h4>Florida</h4>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <div className="prop_details" ref={el => cardsRef.current[5] = el}>
                    <div className="prop_img_big">
                      <img
                        src="https://images.unsplash.com/photo-1567439098853-010b8c263f6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                      />
                    </div>
                    <div className="details_head">
                      <p>3 properties</p>
                      <h4>Miami</h4>
                    </div>
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

export default Home_5;
