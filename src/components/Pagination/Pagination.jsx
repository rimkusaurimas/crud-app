import React from "react";

export const Pagination = ({ objPerPage, totalObj }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalObj / objPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination mt-3">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
