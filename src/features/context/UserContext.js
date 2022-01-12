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
      name: "Petras",
      lastName: "Petraitis",
      address: "Vilniaus g.",
      country: "Greece",
      email: "labas@petrai.lt",
      key: "petras-petraitis",
      id: "petras-petraitis",
    },
    {
      name: "Jonas",
      lastName: "Jonaitis",
      address: "Kauno g.",
      country: "Lithuania",
      email: "labas@jonai.lt",
      key: "jonas-jonaitis",
      id: "jonas-jonaitis",
    },
    {
      name: "Deividas",
      lastName: "Ponaitis",
      address: "Panevėžio g.",
      country: "Germany",
      email: "labas@deivi.lt",
      key: "deividas-ponaitis",
      id: "deividas-ponaitis",
    },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
