import React, { useState, useContext } from "react";
import styles from "./search.module.scss";
import { SearchResultsContext } from "../../features/context/StatesContext";
import { Form, Button } from "react-bootstrap";

export const Search = () => {
  const [validated, setValidated] = useState(false);
  const [searchTerm, setSearchTerm] = useContext(SearchResultsContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
