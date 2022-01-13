import React, { useState } from "react";
import styles from "./search.module.scss";
import { Form, Button } from "react-bootstrap";

export const Search = () => {
  const [validated, setValidated] = useState(false);

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
        <Form.Group className="mt-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            className={styles.searchInput}
            type="text"
            placeholder="Type something..."
            id="search"
            aria-describedby="passwordHelpBlock"
            required
          />
          <Button variant="primary text-uppercase" type="submit" className={styles.searchButton}>
            search
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
