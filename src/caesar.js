// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25 || shift === 0) { return false }; //if a shift is outside of parameters return false
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //create alphabet variable
    const result = []; //create a result array variable
    input = input.toLowerCase().split(''); //ignore upper case letters and split input into an array

    if (encode === true) {
      input.forEach((char, index) => { //loop through input
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newLetter = index + shift; //find index and add shift
              if (newLetter < 0) { newLetter = newLetter + 26 }; //if a letter goes "off" the alphabet loop it around to the other side
              if (newLetter > 25) { newLetter = newLetter - 26 };
              newChar = alphabet[newLetter];
              result.push(newChar);
            }
          })
        } else {
          result.push(char); //push new alphabet index into the result
        }
      });
    } else { //if encode != true
      input.forEach((char, index) => {
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let newLetter = index - shift;
              if (newLetter < 0) { newLetter = newLetter + 26 };
              if (newLetter > 25) { newLetter = newLetter - 26 };
              newChar = alphabet[newLetter];
              result.push(newChar);
            }
          })
        } else {
          result.push(char);
        }
      });
    }
    return result.join(''); //returned array becomes a string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
