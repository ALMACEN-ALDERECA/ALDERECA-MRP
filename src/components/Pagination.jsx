import React from 'react';
const Pagination = ({ postsPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <nav className='Page navigation mx-4 my-4'>
      <ul className='pagination justify-content-center pagination-sm'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a href='!#' className='page-link' onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
