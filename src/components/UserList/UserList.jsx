import React, { useContext, useState, useEffect } from "react";
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
  const [searchHistory, setSearchHistory] = useState("");
  const handleSearch = (searchResults) => {
    if (
      (searchResults?.length !== users.length && searchResults !== undefined) ||
      searchTerm !== ""
    ) {
      setSearchResults(searchResults);
      setSearchHistory(searchTerm);
      setCurrentPage(1);
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
  useEffect(() => {
    if (objPerPage >= users.length || objPerPage >= searchResults?.length) {
      setCurrentPage(1);
    }
  }, [users, objPerPage, searchResults]);
  const indexOfLastObj = currentPage * objPerPage;
  const indexOfFirstObj = indexOfLastObj - objPerPage;
  const usersCurrentObj = users?.slice(indexOfFirstObj, indexOfLastObj);
  const searchedUsersCurrentObj = searchResults?.slice(
    indexOfFirstObj,
    indexOfLastObj
  );
  // User delete
  const handleRemove = (id) => {
    if (
      (searchResults?.length !== users.length && searchResults !== undefined) ||
      searchTerm !== ""
    ) {
      setSearchResults(searchResults.filter((user) => !(user.id === id)));
    }
    setUsers(users.filter((user) => !(user.id === id)));
  };
  // User sorting by name
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
      {searchResults?.length === 0 && searchHistory !== "" && (
        <p className="text-center mt-3">
          User &#34;{searchHistory}&#34; cannot be found...
        </p>
      )}
    </>
  );
};
