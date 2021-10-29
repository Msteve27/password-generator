// Assignment code here
// Arrays:
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["'", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]
  
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword() {
// const password = generatePassword();




function generatePassword() {

  let PWLength = parseInt(prompt("How long do you want your password to be? Must be between 8 and 128 characters."))

  if (isNaN(PWLength)) {
    alert('Password length must be a number.')
    return
  }

  if (PWLength < 8 || PWLength > 128) {
    alert("Password must be between 8 and 128 characters in length.")
    return
  }

  let promptLowercase = window.confirm("Do you want to use lowercase letters?");
  let promptUppercase = window.confirm("Do you want to use uppercase letters? Keep in mind you will need at least one character type selected.");
  let promptNumber = window.confirm("Do you want to use a number?");
  let promptSymbol = window.confirm("Do you want to use a symbol?");

  let Characters = []

  if (promptLowercase) {
    Characters = Characters.concat(lowercase)
  }

  if (promptUppercase) {
    Characters = Characters.concat(uppercase)
  }
  
  if (promptNumber) {
    Characters = Characters.concat(numbers)
  }

  if (promptSymbol) {
    Characters = Characters.concat(symbols)
  }

  let PWString = '';
  
  for (let i = 0; i < PWLength; i++) {
    let randomNumbers = Math.floor(Math.random() * Characters.length)

    let randomCharacters = Characters[randomNumbers]
    
    PWString = PWString + randomCharacters
  }

  return PWString
}

function writePassword() {
  let password = generatePassword();
  if (password === undefined) {
    password = 'Click "Generate Password" to try again.'
  }
  let passwordText = document.querySelector("#password");

  // passwordText.value = password;
  passwordText.innerHTML = password;

}

// document.getElementById("password").value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
