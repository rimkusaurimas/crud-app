import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import nextID from "react-id-generator";
import { UserContext } from "../../features/context/UserContext";
import { Button, InputGroup, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "react-email-validator";
import styles from "./add-user.module.scss";

export const AddUser = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [countries, setCountries] = useState();
  const [email, setEmail] = useState("");
  const [users, setUsers] = useContext(UserContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const countryList = response.data.map((countries) => {
        return countries.name.common
      });
      setData(...data, countryList);
    });
  }, []);

  const navigate = useNavigate();

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
  const updateCountries = (e) => {
    setCountries(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false ) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    if (
      name.length &&
      lastName.length &&
      address.length &&
      email.length &&
      validate(email) &&
      countries !== undefined
    ) {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          name: name,
          lastName: lastName,
          address: address,
          country: countries,
          email: email,
          id: nextID(),
        },
      ]);
      navigate("/");
    }
  };

  return (
    <section className={styles.addUser}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            onChange={updateCountries}
            value={countries}
            name="countries"
            className={styles.addUserCountrySelect}
            id="countries"
            aria-label="Countries"
            required
          >
            <option className={styles.addUserCountrySelect} value="">Select a country..</option>
            {data.map((country) => (
              <option className={styles.addUserCountrySelect} key={country} value={country}>{country}</option>
            ))}
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
