const MarkovMachine = require("./markov");
const fs = require("fs");

describe("MarkovMachine", () => {
  let mm;
  beforeAll(() => {
    const text = fs.readFileSync("eggs.txt", "utf8");
    mm = new MarkovMachine(text);
  });

  test("makeChains should create a chain map", () => {
    expect(Object.keys(mm.chains).length).toBeGreaterThan(0);
  });

  test("makeText should return a string", () => {
    const output = mm.makeText();
    expect(typeof output).toBe("string");
  });

  test("makeText should handle different word limits", () => {
    const shortText = mm.makeText(10);
    expect(shortText.split(" ").length).toBeLessThanOrEqual(10);
  });
});
