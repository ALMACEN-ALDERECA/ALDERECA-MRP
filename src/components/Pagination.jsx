import React from "react";
const Pagination = ({ postsPerPage, totalPost }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <nav>
      <ul className="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}

        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
