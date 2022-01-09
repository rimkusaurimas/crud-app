import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "Aurimas",
      lastName: "Rimkus",
      address: "Raudondvario pl.",
      country: "Lithuania",
      email: "labas@aurimasrimkus.lt",
      key: "aurimas-rimkus",
      id: "aurimas-rimkus",
    },
    {
      name: "Jonas",
      lastName: "Jonaitis",
      address: "Kauno g.",
      country: "Lithuania",
      email: "labas@jonai.lt",
      key: "jonas-jonaitis",
      id: "jonas-jonaitis",
    }
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
