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

  const lowercase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  const uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
  const special = [!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~]
  const randomNumber = Math.floor(Math.random(0-10))
  
  function callLowercase () {
      return String.fromCharCode(Math.floor(Math.random()*26)+97)
    }
  
  function callUppercase () {
      return String.fromCharCode(Math.floor(Math.random()*26)+65)
    }
  
    console.log(callUppercase());


