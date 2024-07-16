import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import Header from "../../component/header";
import Footer from "../../component/footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SingleBlog = () => {
  const data = useLoaderData();
  const { title, image, author, published_date, content } = data;

  return (
    <>
      <Header />
      <section className="singleblog_page">
        <Container>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="detail_main">
                <h1>{title}</h1>
                <div className="authr_date">
                  <h5>
                    <AccountCircleIcon /> {author}
                  </h5>
                  <h5>{published_date}</h5>
                </div>
                <div className="detail_page_img">
                  <img src={image} alt={title} />
                </div>
                <div className="para_divs">
                    <p>
                      {content} Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Fugiat praesentium saepe amet laborum
                      quo, repellendus nisi error soluta assumenda iste eligendi
                      neque autem rem culpa facere id quidem beatae fugit
                      aperiam laboriosam! Sapiente reprehenderit quis et
                      doloribus recusandae. Ab nesciunt quis vero facilis sunt
                      nobis dicta, repellat veniam. Autem nesciunt corporis,
                      quae porro tenetur nihil debitis nisi officia quibusdam
                      amet eos sunt earum, aut iusto. Quae qui quibusdam
                      sapiente illum, eligendi quod, laborum quo commodi
                      laudantium rerum a doloremque eaque facilis magnam.
                      Consequatur aut est quia dolore, id veniam assumenda eos
                      corporis earum similique alias consequuntur illum
                      quibusdam porro nam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam natus adipisci ducimus eveniet hic voluptates
                      voluptatibus vitae, rem nisi ullam ea animi laboriosam.
                      Omnis tenetur minus doloribus, beatae fugit assumenda.
                      Blanditiis atque quidem, voluptate quibusdam aliquid velit
                      impedit excepturi deserunt dicta. Molestias tempora
                      voluptatum earum eveniet obcaecati sed possimus voluptate
                      dolores eos ex corporis maxime rem nostrum, consectetur
                      fugiat. Quasi doloribus minima illo rem sed reiciendis,
                      neque optio aliquid. Vero natus dolores laborum esse, ipsa
                      hic totam ipsum excepturi distinctio quia quidem aperiam
                      voluptates cumque tenetur architecto. Ratione voluptates
                      consequuntur amet ullam maiores unde ipsum, quos
                      repellendus aliquam magni dolore velit necessitatibus,
                      enim consectetur eos? Atque tempore nobis, earum aut porro
                      fugiat explicabo iste tenetur non officia, sint blanditiis
                      sunt.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam sapiente nisi voluptate accusamus, harum
                      necessitatibus cumque in earum et veritatis, amet delectus
                      vitae, iusto obcaecati? Expedita eius illo deleniti,
                      quaerat vel tenetur, repellat totam nam accusamus debitis
                      facere, porro libero officiis eligendi non aliquid
                      corrupti possimus dolore natus! Aliquam hic quidem
                      reiciendis soluta consequatur accusamus similique ipsam
                      deleniti atque amet, culpa, reprehenderit praesentium
                      dolores deserunt voluptatum nisi, aliquid eius veritatis
                      perspiciatis dolor? Dolorum quam corrupti blanditiis,
                      magnam expedita itaque fuga!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, suscipit eveniet. Rem ad libero debitis obcaecati
                      unde dignissimos placeat eos saepe totam nostrum dolorum
                      excepturi accusantium voluptates modi incidunt quam, iure
                      culpa mollitia commodi quasi dolorem, beatae minima?
                      Tempora excepturi veniam facilis. Alias, voluptas aliquam,
                      a expedita quas odio, aut cupiditate error minus deleniti
                      nihil aspernatur quidem sint dicta ipsa incidunt eos
                      maxime dolore rerum sed quos nam! Laborum hic vitae vel
                      eligendi, quisquam, impedit non facere sint consectetur
                      modi incidunt veniam quos beatae accusamus exercitationem
                      reprehenderit. Itaque consequatur accusamus magni,
                      laboriosam dignissimos impedit deserunt similique
                      inventore tenetur dolorum exercitationem corporis ea amet
                      modi officiis. Numquam illo ea non recusandae quasi,
                      tenetur deserunt voluptas, obcaecati quae, dolorem odio
                      consequuntur in?
                    </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog;
