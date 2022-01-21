import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./pagination.module.scss";

export const Pagination = ({ objPerPage, totalObj, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalObj / objPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mt-3 d-flex justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to={""}
              onClick={() => {
                paginate(number);
              }}
              href={"!#"}
              className={`page-link ${styles.paginationPageLink}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  objPerPage: PropTypes.any,
  totalObj: PropTypes.any,
  paginate: PropTypes.any,
};
