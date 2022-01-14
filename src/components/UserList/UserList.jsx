import React, { useContext, useState } from "react";
import { ListGroup } from "reactstrap";
import { Button } from "react-bootstrap";
import { SingleUser } from "./SingleUser/SingleUser";
import { UserContext } from "../../features/context/UserContext";
import { SearchResultsContext } from "../../features/context/StatesContext";
import { Pagination } from "../Pagination";
import { Search } from "../Search";

export const UserList = () => {
  const [users, setUsers] = useContext(UserContext);
  const [searchTerm] = useContext(SearchResultsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [objPerPage] = useState(3);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [searchResults, setSearchResults] = useState();
  const handleSearch = (searchResults) => {
    setSearchResults(searchResults);
  };
  const resetSearch = () => {
    setSearchResults();
  };

  const indexOfLastObj = currentPage * objPerPage;
  const indexOfFirstObj = indexOfLastObj - objPerPage;
  const usersCurrentObj = users?.slice(indexOfFirstObj, indexOfLastObj);
  const searchedUsersCurrentObj = searchResults?.slice(
    indexOfFirstObj,
    indexOfLastObj
  );

  const handleRemove = (id) => {
    setUsers(users.filter((user) => !(user.id === id)));
  };

  users.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Search search={handleSearch} />
      {searchResults !== undefined && users.length !== searchResults?.length && (
        <Button
          className="mt-3 d-flex justify-content-center text-uppercase w-100"
          variant="secondary"
          onClick={resetSearch}
        >
          Back to all users
        </Button>
      )}
      <ListGroup>
        {searchResults !== undefined
          ? searchedUsersCurrentObj?.map((user) => (
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
            ))
          : usersCurrentObj.map((user) => (
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
      </ListGroup>
      {searchResults !== undefined
        ? searchResults.length > objPerPage && (
            <Pagination
              objPerPage={objPerPage}
              totalObj={searchResults.length}
              paginate={paginate}
            />
          )
        : users.length > objPerPage && (
            <Pagination
              objPerPage={objPerPage}
              totalObj={users.length}
              paginate={paginate}
            />
          )}
      {searchResults?.length === 0 && (
        <p className="text-center mt-3">
          User "{searchTerm}" cannot be found...
        </p>
      )}
    </>
  );
};
