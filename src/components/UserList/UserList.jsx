import React, { useContext } from "react";
import { ListGroup } from "reactstrap";
import { SingleUser } from "./SingleUser/SingleUser";
import {  UserContext } from "../../features/context/UserContext";

export const UserList = () => {
  const [users, setUsers] = useContext(UserContext);

  const handleRemove = (index) => {
    setUsers(() => {
      const user = [...users];
      user.splice(index, 1);
      return user;
    });
  };

  console.log(users);

  return (
    <div>
      <ListGroup>
        {users.map((user) => (
          <SingleUser
            name={user.name}
            lastName={user.lastName}
            address={user.address}
            country={user.country}
            email={user.email}
            key={user.id}
            id={user.id}
            remove={handleRemove}
          />
        ))}
        {users.length === 0 && <p>No users to show..</p>}
      </ListGroup>
    </div>
  );
};
