var generateBtn = document.querySelector("#generate");

//variables for random password options 
var lower = "abcdefghjiklmnopqrstuvwyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!@#$%^&*_-+=";
var number = "0123456789";

function generatePassword(chars, len) {
  retVal = "";

  for (var i = 0, n = len; i < len; ++i) {
    retVal += chars.charAt(Math.floor(Math.random() *chars.length));
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
//Wether or not user wants to include lowercase letters
var lowercase = confirm("Would you like to include lowercase letters?");
if (lowercase == true) {
  passwordChars = passwordChars.concat(lower)
}
//Wether or not user wants to use uppercase letters
var uppercase = confirm("Would you like to include uppercase letters?");
if (uppercase == true) {
  passwordChars = passwordChars.concat(upper)
}
//Wether or not user wants to include special characters
var special = confirm("Do you want to include special characters?");
if (special == true) {
  passwordChars = passwordChars.concat(specials)
}
//Whether or not user wants to include numbers
var numbers = confirm("Do you want to include numbers?");
if(numbers == true) {
  passwordChars = passwordChars.concat(number)
}
//Generate the password using specified length and characters
var password = generatePassword(passwordChars, length);

var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listener 
generateBtn.addEventListener("click", writePassword);
