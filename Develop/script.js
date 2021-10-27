// Assignment code here
let PWlength = window.prompt("How long do you want your password to be? Must be between 8 and 128 characters.");
let promptlowercase = window.prompt("Do you want to use lowercase letters?");
let promptuppercase = window.prompt("Do you want to use uppercase letters? Keep in mind you will need at least one character type selected.");
let promptnumber = window.prompt("Do you want to use a number?");
let promptsymbol = window.prompt("Do you want to use a symbol?");
// let password = document.getElementById("password");

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

let generatePassword = function () {
  if (PWlength < 8 && PWlength > 128) {
    console.log(true)
    alert("Password must be between 8 and 128 characters in length.")
    return false; 
  }
  for (let i = 0; i <= PWlength; i++) {
    if (promptlowercase === "yes" || promptlowercase === "YES") {
      getLower ();
    } else { (promptlowercase === "no" || promptlowercase === "NO")
      alert("Enter 'yes' or 'no.'")
      return false; 
    }
    if (promptuppercase === "yes" || promptuppercase === "YES") {
      getUpper ();
    } else { (promptuppercase === "no" || promptuppercase === "NO")
      alert("Enter 'yes' or 'no.'")
      return false; 
    }
    if (promptnumber === "yes" || promptnumber === "YES") {
      getNumber ();
    } else { (promptnumber === "no" || promptnumber === "NO")
      alert("Enter 'yes' or 'no.'")
      return false; 
    }

    if (promptsymbol === "yes" || promptsymbol === "YES") {
      getSymbol ();
    } else { (promptsymbol === "no" || promptsymbol === "NO")
      alert("Enter 'yes' or 'no.'")
      return false; 
    }


    // let getlower = (String.fromCharCode(Math.floor(Math.random()*26)+97));
    // password += // add chunks of password together;
  }

};

// validate the inputs (at least one special character, and length)
// generate PW



let getLower = function () {
  (String.fromCharCode(Math.floor(Math.random()*26)+97))
}

let getUpper = function () {
  (String.fromCharCode(Math.floor(Math.random()*26)+65))
}
  
let getNumber = function () {
  (String.fromCharCode(Math.floor(Math.random()*10)+48))
}

let getSymbol = function () {
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  (symbols [Math.floor(Math.random() * symbols.length)]);
}


passwordText.value = password;


document.getElementById("password").value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// }