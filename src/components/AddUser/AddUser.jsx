import React, { useState, useContext } from "react";
import nextID from "react-id-generator";
import { UserContext } from "../../features/context/UserContext";
import { Button, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./add-user.module.scss";

export const AddUser = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useContext(UserContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
  const updateCountry = (e) => {
    setCountry(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  const addUser = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name: name,
        lastName: lastName,
        address: address,
        country: country,
        email: email,
        id: nextID(),
      },
    ]);
  };

  return (
    <section className={styles.addUser}>
      <Form noValidate validated={validated} onSubmit={(handleSubmit, addUser)}>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.addUserFieldText}>
            First name
          </InputGroup.Text>
          <Form.Control
            onChange={updateName}
            value={name}
            name="name"
            placeholder="John"
            aria-label="First name"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.addUserFieldText}>
            Last name
          </InputGroup.Text>
          <Form.Control
            onChange={updateLastName}
            value={lastName}
            name="lastName"
            placeholder="Doe"
            aria-label="Last name"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.addUserFieldText}>
            Address
          </InputGroup.Text>
          <Form.Control
            onChange={updateAddress}
            value={address}
            name="address"
            placeholder="Somewhere st. 1"
            aria-label="Address"
            required
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={styles.addUserFieldText}>
            Email
          </InputGroup.Text>
          <Form.Control
            onChange={updateEmail}
            value={email}
            name="email"
            type="email"
            placeholder="name@example.com"
            aria-label="Email"
            required
          />
        </InputGroup>
        <div className={styles.addUserCountry}>
          <Form.Label className={styles.addUserCountryTitle} htmlFor="country">
            Country
          </Form.Label>
          <Form.Select
            onChange={updateCountry}
            value={country}
            name="country"
            className={styles.addUserCountrySelect}
            id="country"
            aria-label="Country"
            required
          >
            <option value={"Lithuania"}>Lithuania</option>
            <option value={"UK"}>UK</option>
            <option value={"Armenia"}>Armenia</option>
          </Form.Select>
        </div>
        <Button className={styles.addUserButton} type="submit">
          Add user
        </Button>
      </Form>
      <div>
        <Link to={"/"}>
          <Button className={styles.addUserCancelButton} variant="dark">
            cancel
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AddUser;
