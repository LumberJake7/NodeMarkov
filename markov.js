/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      this.chains[word].push(nextWord);
    }
  }

  makeText(numWords = 100) {
    let currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    let output = [];
  
    while (output.length < numWords && currentWord !== null) {
      output.push(currentWord);
      let nextWords = this.chains[currentWord];
      currentWord = nextWords[Math.floor(Math.random() * nextWords.length)];
    }
  
    return output.join(" ");
  }
  