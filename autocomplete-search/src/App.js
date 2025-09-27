// src/App.js
import React from "react";
import SearchBar from "./components/SearchBar";
import { Trie } from "./trie/Trie";
import wordList from "./data/words.json"; // large JSON with { word: "apple", freq: 1 }

const App = () => {
  const trie = new Trie(10); // top 10 suggestions

  wordList.forEach((w) => trie.insert(w.word, w.freq || 1));

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>Autocomplete Search Engine</h1>
      <SearchBar trie={trie} />
    </div>
  );
};

export default App;
