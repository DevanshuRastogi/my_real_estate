import React from "react";
import { Grid, Container, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const BuySubmit = () => {
  const location = useLocation();
  const email = location.state?.email || "";

  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart = localPart.slice(0, -4).replace(/./g, "*") + localPart.slice(-4);
    return `${maskedLocalPart}@${domain}`;
  };

  return (
    <section className="buy_fill buy_sucess">
      <Container>
        <Grid container>
          <Grid item lg={12}>
            <div className="buy_sucess_submit">
              <h1>Successfully Submitted</h1>
              <div className="buy_sucess_p">
                <p>
                  The owner of the property will contact you soon. You will get a
                  confirmation email at {maskEmail(email)}
                </p>
              </div>

              <div className="buy_sucess_btn">
                <Button variant="contained" className="save_btn">
                  View Other Properties
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BuySubmit;
