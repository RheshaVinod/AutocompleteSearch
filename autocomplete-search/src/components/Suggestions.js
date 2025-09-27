// src/components/Suggestions.js
import React from "react";

const Suggestions = ({ suggestions, prefix, onClick }) => {
  const highlight = (word) => {
    if (!word || !prefix) return word || "";
    const start = word.toLowerCase().indexOf(prefix.toLowerCase());
    if (start === -1) return word;
    const end = start + prefix.length;
    return (
      <>
        {word.substring(0, start)}
        <b>{word.substring(start, end)}</b>
        {word.substring(end)}
      </>
    );
  };

  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0",
        margin: "5px 0 0 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#fff",
        position: "absolute",
        width: "100%",
        zIndex: 10,
      }}
    >
      {suggestions.map((s, index) => (
        <li
          key={index}
          onClick={() => onClick(s)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          {highlight(s)}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
