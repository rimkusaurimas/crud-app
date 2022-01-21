import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListGroupItem, Button } from "reactstrap";
import styles from "./single-user.module.scss";

export const SingleUser = ({
  name,
  lastName,
  address,
  country,
  remove,
  email,
  id,
}) => {
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center mt-3 border rounded">
      <div className="d-flex flex-column justify-content-between">
        <strong className="my-1">
          {name} {lastName}
        </strong>
        <p className="my-1">
          {address}, {country}
        </p>
        <p className="my-1">{email}</p>
      </div>
      <div className={`ml-auto ${styles.buttons}`}>
        <Link className="w-100" to={`edit-user/${id}`}>
          <Button
            color="secondary"
            className={`btn me-1 text-uppercase ${styles.buttonsEdit}`}
          >
            Edit
          </Button>
        </Link>
        <Button
          className="btn text-uppercase"
          id={id}
          onClick={() => remove(id)}
          color="danger"
        >
          Delete
        </Button>
      </div>
    </ListGroupItem>
  );
};

SingleUser.propTypes = {
  name: PropTypes.any,
  lastName: PropTypes.any,
  address: PropTypes.any,
  country: PropTypes.any,
  remove: PropTypes.any,
  email: PropTypes.any,
  id: PropTypes.any,
};
