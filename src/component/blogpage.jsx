import React, { useEffect, useState } from "react";
import Blogcard from "./blogcards";
import Pagination from "./pagination";
import { Container, Grid } from "@mui/material";

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  useEffect(() => {
    async function fetchBlogs() {
      let url =
        "http://localhost:5001/blogs?page=${currentPage}&limit=${pageSize}";
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="blog_sec">
      <Container>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div>
              {/* Cards for blogs */}
              <div className="blogCards">
                <Blogcard
                  blogs={blogs}
                  currentPage={currentPage}
                  pageSize={pageSize}
                />
              </div>
              {/* Pagination Effect  */}
              <div className="pagination_effect">
                <Pagination
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                  blogs={blogs}
                  pageSize={pageSize}
                />
              </div>
            </div>
            
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Blogpage;
