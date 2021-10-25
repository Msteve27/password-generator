// Assignment code here
let promptPWlength = window.prompt("How long do you want your password to be? Must be between 8 and 128 characters.");
let promptlowercase = window.prompt("Do you want to use lowercase letters? Keep in mind you will need at least one character type selected.");
let promptuppercase = window.prompt("Do you want to use uppercase letters?");
let promptnumber = window.prompt("Do you want to use a number?");
let promptsymbol = window.prompt("Do you want to use a symbol?");

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

function generatePassword () {

  // if a person picks a length not between 8 - 128, break
  if (promptPWlength < 8 && promptPWlength > 128)
      // tell the user password must be between 8 and 128 characters in length
      window.prompt("Password must be between 8 and 128 characters in length.");
      return; 
  }
  // validate the inputs (at least one special character, and length)
  // generate PW

  // function getLower () {
  //   (String.fromCharCode(Math.floor(Math.random()*26)+97))
  // }
  
  // function getUpper () {
  //   (String.fromCharCode(Math.floor(Math.random()*26)+65))
  // }
    
  // function getNumber () {
  //   (String.fromCharCode(Math.floor(Math.random()*10)+48))
  // }
  
  // function getSymbol () {
  //   const symbols = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  //   (symbols [Math.floor(Math.random() * symbols.length)]);
  // }



  // generated PW displayed
  //return "generated password will go here";


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
