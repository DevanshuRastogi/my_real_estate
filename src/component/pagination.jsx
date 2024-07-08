import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationLinks = () => {
    let pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <li className={i === currentPage ? "activePagination" : ""} key={i}>
            <a href="#" onClick={() => handlePageChange(i)}>
              {i}
            </a>
          </li>
        );
      }
    } else {
      pages.push(
        <li className={1 === currentPage ? "activePagination" : ""} key={1}>
          <a href="#" onClick={() => handlePageChange(1)}>
            1
          </a>
        </li>
      );
      pages.push(
        <li className={2 === currentPage ? "activePagination" : ""} key={2}>
          <a href="#" onClick={() => handlePageChange(2)}>
            2
          </a>
        </li>
      );
      pages.push(
        <li className={3 === currentPage ? "activePagination" : ""} key={3}>
          <a href="#" onClick={() => handlePageChange(3)}>
            3
          </a>
        </li>
      );

      if (currentPage > 4) {
        pages.push(<li key="ellipsis1">...</li>);
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(
          <li className="activePagination" key={currentPage}>
            <a href="#" onClick={() => handlePageChange(currentPage)}>
              {currentPage}
            </a>
          </li>
        );
      }

      if (currentPage < totalPages - 3) {
        pages.push(<li key="ellipsis2">...</li>);
      }

      pages.push(
        <li className={totalPages - 2 === currentPage ? "activePagination" : ""} key={totalPages - 2}>
          <a href="#" onClick={() => handlePageChange(totalPages - 2)}>
            {totalPages - 2}
          </a>
        </li>
      );
      pages.push(
        <li className={totalPages - 1 === currentPage ? "activePagination" : ""} key={totalPages - 1}>
          <a href="#" onClick={() => handlePageChange(totalPages - 1)}>
            {totalPages - 1}
          </a>
        </li>
      );
      pages.push(
        <li className={totalPages === currentPage ? "activePagination" : ""} key={totalPages}>
          <a href="#" onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </a>
        </li>
      );
    }

    return pages;
  };

  return (
    <ul className="pagination">
      <li>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
       <ArrowBackIcon />  Previous
        </button>
      </li>
      <div className="pagination-links">{renderPaginationLinks()}</div>
      <li>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
         Next <ArrowForwardIcon/>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
