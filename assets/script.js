var generateBtn = document.querySelector("#generate");

//variables for random password options 
var lower = "abcdefghjiklmnopqrstuvwyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!@#$%^&*_-+=";
var number = "0123456789";

function generatePassword(chars, len) {
  retVal = "";

  for (var i = 0, n = len; i < len; ++i) {
    retVal += chars.charAt(Math.floor(Math.random() *n));
  }
  return retVal;

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
//Prompt for character length limit
  passwordChars = "";
  var length = prompt("Choose a password length between 8-128 characters");
  if (length > 128 || length < 8) {
    var length = prompt("Please enter a number between 8-128");
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
