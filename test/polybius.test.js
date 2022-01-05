// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("Polybius tests", () => {
    it("When encoding, it traslates i and j to 42", () => {
      const input = "ij"
      const expected = "4242"
      const actual = polybius(input, true);
      expect(actual).to.equal(expected);
    });
    it("When decoding, it translates 42 to 'i/j'.", () => {
      const input="42";
      const expected = "(i/j)";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
    it("It ignores capital letters", () => {
      const input = "HELLO WORLD";
      const expected = "3251131343 2543241341";
      const actual = polybius(input, true);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces before and after encoding", () => {
      const input = "h e l l o";
      const expected = "32 51 13 13 43";
      const actual = polybius(input, true);
      expect(actual).to.equal(expected);
    })
    it("should maintain spaces before and after decoding", () => {
      const input = "32 51 13 13 43";
      const expected = "h e l l o";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    })
  });