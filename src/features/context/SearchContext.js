import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const SearchResultsContext = createContext();

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchResultsContext.Provider value={[searchTerm, setSearchTerm]}>
      {props.children}
    </SearchResultsContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.any,
};
