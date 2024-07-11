import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Blogcard = ({ blogs, currentPage, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => blogs.id <= 70)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <div className="cards_section">
        {filteredBlogs.length > 0 && (
          <Link
            to={`/blogs/${filteredBlogs[0].id}`}
            key={filteredBlogs[0].id}
            className="blogs_link"
          >
            <div className="blog_card">
              <div className="floating_left">
                <div className="card_image">
                  <img
                    src={filteredBlogs[0].image}
                    alt={filteredBlogs[0].title}
                  />
                </div>
              </div>
              <div className="floating_right">
                <div className="card_content">
                  <div className="arrow_icon">
                    <ArrowOutwardIcon />
                  </div>
                  <h5>
                    {filteredBlogs[0].author} •{" "}
                    {filteredBlogs[0].published_date}
                  </h5>
                  <h3>{filteredBlogs[0].title}</h3>
                  <p>{filteredBlogs[0].content.substring(0, 700)}...</p>
                </div>
              </div>
            </div>
          </Link>
        )}

        
      </div>
      <div className="simple_heading">
          <h2>All blog posts</h2>
        </div>
      
      <div className="grid_section">
        {filteredBlogs.slice(1).map((blogs) => (
          <Link to={`/blogs/${blogs.id}`} key={blogs.id} className="blogs_link">
            <div className="grid_card">
              <div className="card_image">
                <img src={blogs.image} alt={blogs.title} />
              </div>
              <div className="card_content">
                <div className="arrow_icon">
                  <ArrowOutwardIcon />
                </div>
                <h5>
                  {blogs.author} • {blogs.published_date}
                </h5>
                <h2>{blogs.title}</h2>
                <p>{blogs.content.substring(0, 80)}...</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogcard;
