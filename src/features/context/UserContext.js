import React, {useState, createContext} from "react";

export const UserContext = createContext();

export const UserProvider = props => {
    const [users, setUsers] = useState([
        {
          name: "Aurimas",
          lastName: "Rimkus",
          address: "Kauno g. 1",
          country: "Lietuva",
          email: "labas@aurimasrimkus.lt",
          id: 1,
        },
        {
          name: "Linas",
          lastName: "Jonas",
          address: "Vilniaus g. 1",
          country: "Lietuva",
          email: "labas@linai.lt",
          id: 2,
        },
      ]);
    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}