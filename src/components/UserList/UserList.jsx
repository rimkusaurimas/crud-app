import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  return (
    <ListGroup>
      <ListGroupItem className="d-flex justify-content-between align-items-center mt-3 border rounded">
        <div className="d-flex flex-column justify-content-between">
          <strong className="my-1">First Name Last Name</strong>
          <p className="my-1">Address, Country</p>
          <p className="my-1">Email</p>
        </div>
        <div className="ml-auto">
          <Link className="btn btn-dark me-1" to={"/edit-user"}>
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
      <ListGroupItem className="d-flex justify-content-between align-items-center mt-3 border rounded">
        <div className="d-flex flex-column justify-content-between">
          <strong className="my-1">First Name Last Name</strong>
          <p className="my-1">Address, Country</p>
          <p className="my-1">Email</p>
        </div>
        <div className="ml-auto">
          <Link className="btn btn-dark me-1" to={"/edit-user"}>
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};
