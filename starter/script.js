// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 10 characters but no more than 64.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page



// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var arrays = [specialCharacters, upperCasedCharacters, lowerCasedCharacters, numericCharacters];

var reqPassLength = 10;

// Function to prompt user for password options
function getPasswordOptions() {
  var OK = false
do{
  reqPassLength = prompt('What length do you require?') 
  if(reqPass2Length > 9 && reqPassLength < 65) { OK = true; }
} while (OK === false);
}


// Function for getting a random element from an array
function getRandom(arr) {
//get random elements from an array
return arr[Math.floor(Math.random()*arr.length)];
}


// Function to generate password with user input

function generatePassword() {
  let passText = "";
  let matched = [0, 0, 0, 0];
  let validated = false;
  let i = 0;
  while(i < 64) {
    let arrayNumber = Math.floor(Math.random()*arrays.length);
    matched[arrayNumber] = 1;
    let temp1 = passText;
    let temp2 = getRandom(arrays[arrayNumber]);
    passText = temp1.concat(temp2);
    if(matched[0] === 1 && matched[1] === 1 && matched[2] === 1 && matched[3] === 1) { validated = true; }
    i++;

     if (i > reqPassLength && validated === true) break;
  }
 
  return passText;
}

getPasswordOptions()
// while ()

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

