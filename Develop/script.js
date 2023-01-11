//Assigning varialbles for all uppercase, lowercase, numberical letters and special characters
var lowercaseInput = "abcdefghijklmnopqrstuvwxyz";
var uppercaseInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharactersInput = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
var numbersInput = "0123456789";
var userCharacters = "";
var randomPassword = "";

// Get references to the #generate and the #password element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Defines generate password function
function writePassword() {

  //1) Password length between 8-128 characrers, lowercase, uppercase, numeric, and/or special characters

  //1a) Password length question - between 8 to 128 letters
  var passwordLengthPromptInput = prompt("Your password must be between 8 to 128 characters in length. Enter a number to choose the length you desire below.");
  //1b) Lowercase confirmation
  var lowercasePromptInput = confirm("Do you want your password to contain lowercase letters?");
  //1c) Uppercase confirmation
  var uppercasePromptInput = confirm("Do you want your password to contain uppercase letters?");
  //1d) Numeric confirmation
  var numericPromptInput = confirm("Do you want your password to contain numeric numbers?");
  //1e) Special characters confirmation
  var specialPromptInput = confirm("Do you want your password to contain special characters?");
  
  //2) Validate the input
  if (passwordLengthPromptInput < 8 || passwordLengthPromptInput > 128) {
    alert("Length of password must be between 8 to 128 characters. Please try again.");
    var specialPromptInput = prompt("Please choose a password between 8 to 128 characters.");
  }

  //User cannot cancel password criteria and will be prompted to choose again if none of the criterias have been chosen

  else if (lowercasePromptInput === false && uppercasePromptInput === false && numericPromptInput === false && specialPromptInput === false) {
    alert("Please choose at least one criteria.");
  //Lowercase confirmation again
  var lowercasePromptInput = confirm("Do you want your password to contain lowercase letters?");
  //Uppercase confirmation again
  var uppercasePromptInput = confirm("Do you want your password to contain uppercase letters?");
  //Numeric confirmation again
  var numericPromptInput = confirm("Do you want your password to contain numeric numbers?");
  //Special characters confirmation again
  var specialPromptInput = confirm("Do you want your password to contain special characters?");
  }

  
  //3a) Add user confirmation and assign it to variable userCharacters
  if (lowercasePromptInput) {
    userCharacters += lowercaseInput;
  }

  if (uppercasePromptInput) {
    userCharacters += uppercaseInput;
  }

  if (numericPromptInput) {
    userCharacters += numbersInput;
  }

  if (specialPromptInput) {
    userCharacters += specialCharactersInput;
  }

  //3b) Generating password below

  for (var i = 0; i < passwordLengthPromptInput; i++) {
    randomPassword += userCharacters[Math.floor(Math.random()*userCharacters.length)];
   
  }
    passwordText.value = randomPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
