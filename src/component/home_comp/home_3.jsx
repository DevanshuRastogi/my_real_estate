import { Grid } from "@mui/material/";
import { Container } from "@mui/material";


const Home_3 = () =>{
    return(
        <section className="featured">
            <Container>
                <Grid Container>
                    <Grid item lg={12}>
                        <div className="f_prop">
                            <h2>Featured Properties</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="f_links">
                                <Grid container>
                                    <Grid item lg={8}>
                                        <div className="f_list">
                                            hello
                                        </div>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <div className="f_list">
                                            hello
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <div>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
export default Home_3;