import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import nextID from "react-id-generator";
import { UserContext } from "../../features/context/UserContext";
import { Button, InputGroup, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { validate } from "react-email-validator";
import styles from "./edit-user.module.scss";

export const EditUser = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [countries, setCountries] = useState();
  const [email, setEmail] = useState("");
  const [users, setUsers] = useContext(UserContext);
  // Takes the current id from route and sets the current user by that id
  const { id } = useParams();
  const currentUser = users.filter((user) => user.id === id);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const countryList = response.data.map((countries) => {
        return countries.name.common;
      });
      setData(...data, countryList);
    });
    // eslint-disable-next-line
  }, []);
  // Form validation and handle
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
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
      const handleRemove = (id) => {
        setUsers(users.filter((user) => !(user.id === id)));
      };
      handleRemove(id);
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

  return (
    <section className={styles.editUser}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.editUserFieldText}>
            First name
          </InputGroup.Text>
          <Form.Control
            onChange={updateName}
            value={name}
            name="name"
            placeholder={currentUser[0].name}
            aria-label={currentUser[0].name}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.editUserFieldText}>
            Last name
          </InputGroup.Text>
          <Form.Control
            onChange={updateLastName}
            value={lastName}
            name="lastName"
            placeholder={currentUser[0].lastName}
            aria-label={currentUser[0].lastName}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.editUserFieldText}>
            Address
          </InputGroup.Text>
          <Form.Control
            onChange={updateAddress}
            value={address}
            name="address"
            placeholder={currentUser[0].address}
            aria-label={currentUser[0].address}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={styles.editUserFieldText}>
            Email
          </InputGroup.Text>
          <Form.Control
            onChange={updateEmail}
            value={email}
            name="email"
            type="email"
            placeholder={currentUser[0].email}
            aria-label={currentUser[0].email}
            required
          />
        </InputGroup>
        <div className={styles.editUserCountry}>
          <Form.Label className={styles.editUserCountryTitle} htmlFor="country">
            Country
          </Form.Label>
          <Form.Select
            onChange={updateCountries}
            value={countries}
            name="countries"
            className={styles.editUserCountrySelect}
            id="countries"
            aria-label="Countries"
            required
          >
            <option className={styles.addUserCountrySelect} value="">
              {currentUser[0].country}
            </option>
            {data.sort().map((country) => (
              <option
                className={styles.editUserCountrySelect}
                key={country}
                value={country}
              >
                {country}
              </option>
            ))}
          </Form.Select>
        </div>
        <Button className={styles.editUserButton} type="submit">
          Update user
        </Button>
      </Form>
      <div>
        <Link to={"/"}>
          <Button className={styles.editUserCancelButton} variant="secondary">
            cancel
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EditUser;
