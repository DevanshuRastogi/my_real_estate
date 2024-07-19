import { Grid, Container } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { NavLink } from 'react-router-dom';
import logo from "../../src/assets/images/Left Nav.png";
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <section className="header_section">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="header_parts">
              <div className="header_part_1">
                <NavLink to="/homepage">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </div>
              <div className="header_part_2">
                <ul>
                  <li><NavLink to="/homepage">Homepage</NavLink></li>
                  <li><NavLink to="/buy">Buy</NavLink></li> {/* Not linked */}
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><a href="javascript:;">Sell</a></li> {/* Not linked */}
                  <li><NavLink to="/blogpage">Blogs</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                  <li><a href="javascript:;">Liked Properties</a></li> {/* Not linked */}
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
