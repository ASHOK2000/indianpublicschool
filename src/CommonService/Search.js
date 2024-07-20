import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import CommonService from "./CommonService";

const SearchBox = ({ collectionName = "user" }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [collection, setCollection] = useState(collectionName);
  const Token = CommonService.authToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4858/api/${collection}/search/records`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${Token}`,
            },
            body: JSON.stringify({ search_string: query }),
          }
        );

        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Only fetch data if query has at least 3 characters
    if (query.length >= 3) {
      fetchData();
    } else {
      // Clear results if query is less than 3 characters
      setSearchResults([]);
    }
  }, [query, Token, collection]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-search"
        label="Search...."
        type="search"
        variant="standard"
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {searchResults &&
          searchResults.map((result) => (
            <li key={result.uuid}>{result.firstName}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBox;
