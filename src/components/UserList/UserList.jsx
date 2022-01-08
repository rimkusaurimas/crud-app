import React, { useState, useContext } from "react";
import { ListGroup } from "reactstrap";
import { SingleUser } from "./SingleUser/SingleUser";
import { UserContext } from "../../features/context/UserContext";

export const UserList = () => {
  const [users, setUsers] = useContext(UserContext);
  return (
      <ListGroup>
        {users.map((user) => (
          <SingleUser
            name={user.name}
            lastName={user.lastName}
            address={user.address}
            country={user.country}
            email={user.email}
            key={user.id}
          />
        ))}
      </ListGroup>
  );
};
