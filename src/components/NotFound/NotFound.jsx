import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-center">404 error: Page not found</h1>
      <Link
        className="d-flex justify-content-center mt-3 text-decoration-none"
        to={"/"}
      >
        <Button className="text-uppercase">Back to main page</Button>
      </Link>
    </section>
  );
};
