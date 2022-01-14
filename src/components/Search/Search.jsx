import React, { useState, useContext } from "react";
import styles from "./search.module.scss";
import { SearchResultsContext } from "../../features/context/SearchContext";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../features/context/UserContext";

export const Search = (props) => {
  const [users] = useContext(UserContext);
  // Search
  const [searchTerm, setSearchTerm] = useContext(SearchResultsContext);
  const searchedObj = users.filter((val) => {
    if (
      val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });
  // Form validation
  const [validated, setValidated] = useState(false);
  const handleSearch = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    props.search(searchedObj);
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSearch}>
        <Form.Group className="mt-3 d-flex">
          <Form.Control
            className={styles.searchInput}
            type="text"
            value={searchTerm}
            placeholder="Type something..."
            id="search"
            aria-describedby="passwordHelpBlock"
            required
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <Button
            variant="primary text-uppercase"
            type="submit"
            className={styles.searchButton}
          >
            search
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
