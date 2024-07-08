import { Grid , Container } from "@mui/material";
import logo from "../../assets/images/Left Nav.png"
import Button from '@mui/material/Button';

const Header = () => {
  return (
   <section className="header_section">
    <Container>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
         <div className="header_parts">
          <Grid container>
            <Grid item lg={2}>
              <div className="header_part_1">
                <img src={logo} alt="..." />
              </div>
            </Grid>
            <Grid item lg={9}>
              <div className="header_part_2">
                <ul>
                  <li><a href="javascript:;">Homepage</a></li>
                  <li><a href="javascript:;">Buy</a></li>
                  <li><a href="javascript:;">About Us</a></li>
                  <li><a href="javascript:;">Sell</a></li>
                  <li><a href="javascript:;">Blogs</a></li>
                  <li><a href="javascript:;">Contact Us</a></li>
                  <li><a href="javascript:;">Liked Properties</a></li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={1}>
              <div className="header_part_3">
              <Button variant="contained">
                Login
              </Button>
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
export default Header;
