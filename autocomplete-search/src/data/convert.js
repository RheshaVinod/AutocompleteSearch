const fs = require("fs");

// Load your old JSON (key-value style)
const oldData = require("./words-old.json"); // make sure your current JSON is named 'words-old.json'

// Convert key-value to array of objects
const newData = [];

for (const [word, freq] of Object.entries(oldData)) {
  newData.push({ word, freq });
}

// Save the new JSON
fs.writeFileSync("./words.json", JSON.stringify(newData, null, 2));

console.log("Conversion done! words.json is ready.");
