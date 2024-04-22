const MarkovMachine = require("./markov");
const fs = require("fs");
const axios = require("axios");
const { describe } = require("yargs");

jest.mock('fs');

describe("Text Generator", ()) => {
    const testData = "I am Sam\nSam I am\nThat Sam-I-am\nThat Sam-I-am!\nI do not like\nThat Sam-I-am";
    const expectedOutput = "This is a generated test text."; 

    fs.readFile.mockImplementation((path, encoding, callback) => {
        expect(path).toBe('eggs.txt');
        callback(null, testData);
    });

});