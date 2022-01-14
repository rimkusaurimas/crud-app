import React, { useContext, useState } from "react";
import { ListGroup } from "reactstrap";
import { Button } from "react-bootstrap";
import { SingleUser } from "./SingleUser/SingleUser";
import { UserContext } from "../../features/context/UserContext";
import { SearchResultsContext } from "../../features/context/SearchContext";
import { Pagination } from "../Pagination";
import { Search } from "../Search";

export const UserList = () => {
  const [users, setUsers] = useContext(UserContext);
  // Search
  const [searchTerm, setSearchTerm] = useContext(SearchResultsContext);
  const [searchResults, setSearchResults] = useState();
  const handleSearch = (searchResults) => {
    if (
      (searchResults?.length !== users.length && searchTerm !== undefined) ||
      searchTerm !== ""
    ) {
      setSearchResults(searchResults);
    }
  };
  const resetSearch = () => {
    setSearchTerm("");
    setSearchResults();
  };
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [objPerPage] = useState(3);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastObj = currentPage * objPerPage;
  const indexOfFirstObj = indexOfLastObj - objPerPage;
  const usersCurrentObj = users?.slice(indexOfFirstObj, indexOfLastObj);
  const searchedUsersCurrentObj = searchResults?.slice(
    indexOfFirstObj,
    indexOfLastObj
  );
  // User delete
  const handleRemove = (id) => {
    setUsers(users.filter((user) => !(user.id === id)));
  };
  // User sorting by name
  users.sort((a, b) => a.name.localeCompare(b.name));

  console.log(searchResults?.length);
  console.log(users.length);

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
