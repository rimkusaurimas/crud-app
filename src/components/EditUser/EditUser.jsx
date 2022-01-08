import { React, useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./edit-user.module.scss";

export const EditUser = () => {
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
    <section className={styles.editUser}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.editUserFieldText}>
            First name
          </InputGroup.Text>
          <Form.Control placeholder="John" aria-label="First name" required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.editUserFieldText}>
            Last name
          </InputGroup.Text>
          <Form.Control placeholder="Doe" aria-label="Last name" required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.editUserFieldText}>
            Address
          </InputGroup.Text>
          <Form.Control
            placeholder="Somewhere st. 1"
            aria-label="Address"
            required
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={styles.editUserFieldText}>
            Email
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            aria-label="Email"
            required
          />
        </InputGroup>
        <div className={styles.editUserCountry}>
          <Form.Label className={styles.editUserCountryTitle} htmlFor="country">
            Country
          </Form.Label>
          <Form.Select
            className={styles.editUserCountrySelect}
            id="country"
            aria-label="Country"
            required
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <Button className={styles.editUserButton} type="submit">Add user</Button>
      </Form>
      <div>
        <Link to={"/"}>
          <Button className={styles.editUserCancelButton} variant="dark">
            cancel
          </Button>
        </Link>
      </div>
    </section>
  );
};
