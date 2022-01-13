import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ objPerPage, totalObj, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalObj / objPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mt-3">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to={""}
              onClick={() => {
                paginate(number);
              }}
              href={"!#"}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
