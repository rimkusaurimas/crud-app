import React, { useState, createContext } from "react";

export const SearchResultsContext = createContext();

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchResultsContext.Provider value={[searchTerm, setSearchTerm]}>
      {props.children}
    </SearchResultsContext.Provider>
  );
};
