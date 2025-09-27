// src/components/SearchBar.js
import React, { useState } from "react";
import Suggestions from "./Suggestions";

const SearchBar = ({ trie }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value || "";
    setInput(value);
    if (value === "") setSuggestions([]);
    else setSuggestions(trie.getSuggestions(value));
  };

  const handleSuggestionClick = (word) => {
    setInput(word || "");
    trie.incrementFrequency(word || "");
    setSuggestions([]);
  };

  return (
    <div style={{ position: "relative", width: "400px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {input && (
        <Suggestions
          suggestions={suggestions || []}
          prefix={input || ""}
          onClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
