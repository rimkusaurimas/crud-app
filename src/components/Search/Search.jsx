import React, { useState, useContext } from "react";
import styles from "./search.module.scss";
import { SearchResultsContext } from "../../features/context/StatesContext";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../features/context/UserContext";

export const Search = () => {
  const [validated, setValidated] = useState(false);
  const [searchTerm, setSearchTerm] = useContext(SearchResultsContext);
  const [users, setUsers] = useContext(UserContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false && searchTerm === "") {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setUsers(searchedObj);
    setValidated(true);
  };

  const searchedObj = users.filter((val) => {
    if (
      val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });

  console.log(searchedObj);

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mt-3 d-flex">
          <Form.Control
            className={styles.searchInput}
            type="text"
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
