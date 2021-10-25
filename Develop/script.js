// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




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
const generatePW = document.getElementById('generate')
const PWlength = document.getElementById('length')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')

const randomFunction = {
  lower: callLowercase,
  upper: callUppercase,
  number: callNumber,
  symbol: callSymbol,
};

generatePW.addEventListener('click', () => {
  const length = +PWlength.value;
  const yesLower = lowercase.addEventListener(true/false);
  const yesUpper = uppercase.addEventListener(true/false);
  const yesNumber = number.addEventListener(true/false);
  const yesSymbol = symbol.addEventListener(true/false);
});

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



