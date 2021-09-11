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

var lowercase = confirm("Would you like to include lowercase letters?");
if (lowercase == true) {
  passwordChars = passwordChars.concat(lower)
}

var uppercase = confirm("Would you like to include uppercase letters?");
if (uppercase == true) {
  passwordChars = passwordChars.concat(upper)
}

var special = confirm("Do you want to include special characters?");
if (special == true) {
  passwordChars = passwordChars.concat(specials)
}

var numbers = confirm("Do you want to include numbers?");
if(numbers == true) {
  passwordChars = passwordChars.concat(number)
}



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
