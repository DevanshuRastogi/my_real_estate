import React, { useEffect, useRef } from "react";
import { Grid, Container } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/images/Left Nav.png";
import Button from "@mui/material/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElements = headerRef.current.children;

    gsap.set(headerElements, { autoAlpha: 0, y: -50 });

    ScrollTrigger.batch(headerElements, {
      onEnter: (elements) => {
        gsap.to(elements, {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
          ease: "power3.out"
        });
      },
      start: "top 90%",
    });

  }, []);



  return (
    <section className="header_section">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="header_parts" >
              <div className="header_part_1">
                <NavLink to="/homepage">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </div>
              <div className="header_part_2">
                <ul ref={headerRef}>
                  <li><NavLink to="/homepage">Homepage</NavLink></li>
                  <li><NavLink to="/buy">Buy</NavLink></li> {/* Not linked */}
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/seller">Sell</NavLink></li>
                  <li><NavLink to="/blogpage">Blogs</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                  <li><NavLink to="/liked">Liked Properties</NavLink></li> {/* Not linked */}
                </ul>
              </div>
              <div className="header_part_3">
                <NavLink to="/login">
                  <Button variant="contained">Login</Button>
                </NavLink>
                <div className="menu">
                  <MenuOutlinedIcon />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Header;
