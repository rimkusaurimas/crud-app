import React from "react";

export const Pagination = ({ objPerPage, totalObj, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalObj / objPerPage); i++) {
    pageNumbers.push(i);
  }

  const href = (e) => {
      e.preventDefault();
  }

  return (
    <nav>
      <ul className="pagination mt-3">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href={href} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
