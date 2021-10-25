// prompt: enter preferred length of password (select from 8 - 128 characters)
    // --> function needs to iterate over 26 alphabetic characters 
    // --> random [lowercase alphabet array]
    // --> random [uppercase alphabet array]
    // --> random [number between 0-9] 
    // --> random [special character array] 

// prompt: do you want an uppercase letter? (yes or no)
  // -- > if, else statements 

// prompt: do you want your password to contain a number? (yes or no)
  // --> if, else statements 

// prompt: do you want your password to contain a special character? (yes or no)
  // --> if, else statements

function callLowercase () {
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function callUppercase () {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function callNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function callSymbol () {
const symbols = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
return symbols [Math.floor(Math.random() * symbols.length)];
}

console.log(callLowercase); 