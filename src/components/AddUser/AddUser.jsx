import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./add-user.module.scss";

export const AddUser = () => {
  return (
    <section className={styles.addUser}>
      <InputGroup className="mb-3">
        <InputGroup.Text className={styles.addUserFieldText}>First name</InputGroup.Text>
        <FormControl aria-label="First name" required />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text className={styles.addUserFieldText}>Last name</InputGroup.Text>
        <FormControl aria-label="Last name" required />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text className={styles.addUserFieldText}>Email</InputGroup.Text>
        <FormControl aria-label="Email" />
      </InputGroup>
    </section>
  );
};
