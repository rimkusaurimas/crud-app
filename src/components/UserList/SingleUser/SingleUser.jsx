import React from "react";
import { Link } from "react-router-dom";
import { ListGroupItem, Button } from "reactstrap";

export const SingleUser = ({name, lastName, address, country, remove, email, id}) => {
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center mt-3 border rounded">
      <div className="d-flex flex-column justify-content-between">
        <strong className="my-1">{name} {lastName}</strong>
        <p className="my-1">{address}, {country}</p>
        <p className="my-1">{email}</p>
      </div>
      <div className="ml-auto">
        <Link className="btn btn-dark me-1" to={`edit-user/${id}`}>
          Edit
        </Link>
        <Button id={id} onClick={() => remove(id)} color="danger">Delete</Button>
      </div>
    </ListGroupItem>
  );
};
