// strings from which to choose characters
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChars = "1234567890";
var specialChars = "!@#$%^&*()_-=+[]{}~`':?<>,.";

// Function to randomly generate user's password
function generatePassword() {
  // pull value of selector buttons from page and assign to value
  var length = document.querySelector("#length").value;
  var lowercase = document.querySelector("#lowercase-yes").checked;
  var uppercase = document.querySelector("#uppercase-yes").checked;
  var numerics = document.querySelector("#numerics-yes").checked;
  var special = document.querySelector("#special-yes").checked;
  // comment-out testing code // console.log("lower:", lowercase, ";upper:", uppercase, ";numeric:", numerics, ";special:", special);

  // **** checks
  // make sure at least one character type is selected
  if (!lowercase && !uppercase && !numerics && !special) {
    window.alert("Please select one or more type(s) of character to include in the password.");
    return;
  }
  // check if user has inputted a valid length
  if (length > 128 || length < 8 || length === undefined || length === null) {
    window.alert("Please choose a length between 8 and 128 characters.");
    return;
  }

  // *** if checks pass:
  // create an array of strings from within which the valid character strings can be pulled
  var validChars = []
  if (lowercase) {
    validChars.push(lowerChars);
  }
  if (uppercase) {
    validChars.push(upperChars);
  }
  if (numerics) {
    validChars.push(numChars);
  }
  if (special) {
    validChars.push(specialChars);
  }

  // generate a password using these values as guide
  var genPass = "";
  // loop until password length reached
  for (var i = 0; i < length; i++) {
    // select which string from array of valid strings using random number gen
    var pickCharType = Math.floor(Math.random() * (validChars.length));
    // append a character from the chosen string 
    genPass += validChars[pickCharType].charAt(Math.floor(Math.random() * (validChars[pickCharType].length)));
  }

  // return the generated password
  return genPass;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === undefined || password === null) {
    password = "Please choose a valid set of parameters.";
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
