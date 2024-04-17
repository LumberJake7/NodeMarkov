const fs = require("fs");
const axios = require("axios");
const MarkovMachine = require("./markov");

function generateText(path, isUrl = false) {
  if (isUrl) {
    axios
      .get(path)
      .then((res) => {
        let mm = new MarkovMachine(res.data);
        console.log(mm.makeText());
      })
      .catch((err) => {
        console.error(`Error fetching ${path}: ${err}`);
        process.exit(1);
      });
  } else {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      }
      let mm = new MarkovMachine(data);
      console.log(mm.makeText());
    });
  }
}

const [, , sourceType, path] = process.argv;

if (sourceType === "file") {
  generateText(path);
} else if (sourceType === "url") {
  generateText(path, true);
} else {
  console.error('Invalid command. Use "file <path>" or "url <path>"');
  process.exit(1);
}
