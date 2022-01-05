// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  //helper function to check for unique characters
  function uniqueCharacters(alphabet) {
    let cipherArray = [];
    for(let i = 0; i < alphabet.length; i++) {
      cipherArray.push(alphabet[i].toLowerCase());
    };
    const sortedArray = cipherArray.sort((charA, charB) => charA > charB ? -1: 1);
    for(let i = 1; i < sortedArray.length; i++) {
      if(sortedArray[i] === sortedArray[i - 1]) {
        return false; 
      };
    };
  }
  
  
  function substitution(input, alphabet, encode = true) {
  //check if the cipher alphabet exists or if the length is not 26 - return false if either of these conditions is true
    if(!alphabet || alphabet.length != 26) {
      return false; 
    }
  //check for unique characters (no repeated characters) - utilizes the uniqueCharacters() function
    const checkForUniqueCharacters = uniqueCharacters(alphabet);
    if(checkForUniqueCharacters === false) return false; 
    
    
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r", "s", "t", "u", "v", "w", "x","y","z"];

    let decodeCipher = {}
    for(let i = 0; i < alphabet.length; i++) {
      if(encode) {
        decodeCipher[letters[i]] = alphabet[i];
      } else {
      decodeCipher[alphabet[i]] = letters[i];
      }
    }

    let inputArray = [];
    for(let i = 0; i < input.length; i++) {
      inputArray.push(input[i].toLowerCase());
    }
 
    const codedMessage = inputArray.map((character) => {
      if(character === " ") {
        character = " ";
      } else {
      character = decodeCipher[character];
    }
      return character;
    });
    return codedMessage.join("");
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };