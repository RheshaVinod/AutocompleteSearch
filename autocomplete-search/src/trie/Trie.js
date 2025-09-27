// src/trie/Trie.js
export class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.frequency = 0;
    this.wordsMap = new Map(); // word -> frequency
  }
}

export class Trie {
  constructor(k = 5) {
    this.root = new TrieNode();
    this.k = k; // top-k suggestions
  }

  insert(word, frequency = 1) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
      const prevFreq = node.wordsMap.get(word) || 0;
      node.wordsMap.set(word, prevFreq + frequency);
    }
    node.isEndOfWord = true;
    node.frequency += frequency;
  }

  incrementFrequency(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return;
      node = node.children[char];
      const prevFreq = node.wordsMap.get(word) || 0;
      node.wordsMap.set(word, prevFreq + 1);
    }
    if (node.isEndOfWord) node.frequency += 1;
  }

  searchPrefix(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }

  getSuggestions(prefix) {
    const node = this.searchPrefix(prefix);
    if (!node) return [];

    const suggestions = Array.from(node.wordsMap.entries())
      .map(([word, freq]) => ({ word, freq }))
      .sort((a, b) => b.freq - a.freq)
      .slice(0, this.k)
      .map((obj) => obj.word);

    return suggestions;
  }
}
