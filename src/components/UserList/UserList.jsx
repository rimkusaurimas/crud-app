import React, { useContext, useState } from "react";
import { ListGroup } from "reactstrap";
import { SingleUser } from "./SingleUser/SingleUser";
import { UserContext } from "../../features/context/UserContext";
import { Pagination } from "../Pagination";
import { Search } from "../Search";

export const UserList = () => {
  const [users, setUsers] = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [objPerPage] = useState(2);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastObj = currentPage * objPerPage;
  const indexOfFirstObj = indexOfLastObj - objPerPage;
  const currentObj = users.slice(indexOfFirstObj, indexOfLastObj);

  const handleRemove = (id) => {
    setUsers(users.filter((user) => !(user.id === id)));
  };
  users.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <Search />
      <ListGroup>
        {currentObj.map((user) => (
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
      <Pagination
        objPerPage={objPerPage}
        totalObj={users.length}
        paginate={paginate}
      />
    </div>
  );
};
