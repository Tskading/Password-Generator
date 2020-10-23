
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #newArr input - see end of js to view how attained.
function writePassword() {
  var newArr = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newArr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/////////////////////////////////////////////////////////////////////////////////////////

var incorrectPrompt = true; 

var numberOfCharacters;

var customPassArray = [];
console.log("customPassArray:", customPassArray);


// Start of password generation function.
function generatePassword(){

//Set up as incorrect until correct prompt is receivied.
while (incorrectPrompt) {
  numberOfCharacters = parseInt(
    prompt(
      "How many characters would you like your password to be? Pick a value between 8 and 128."
    )
  );
  //Acceptance criteria for password length - numberOfCharcters
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    alert(
      "Thank you.  Your new password will be " +
        numberOfCharacters +
        " characters long."
    );
    
    incorrectPrompt = false;
  }
}

// Start of prompt to confirm and, if accepted, add these characters to the customPassArray.
var lowerCase = confirm("Do you want to include lower case letters?");

if (lowerCase) {
  alert("We will include lowercase letters in your new password.");
  lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  console.log("lowerCase:", lowerCase);

  customPassArray.push(...lowerCase);
} else {
  alert("We will not inculde lower case letters in your new password.");
}

// Start of prompt to confirm and, if accepted, add these characters to the customPassArray.
var upperCase = confirm("Do you want to include upper case letters?");

if (upperCase) {
  alert("We will include uppercase letters in your new password.");
  upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  console.log("upperCase:", upperCase);

  customPassArray.push(...upperCase);
} else {
  alert("We will not inculde uppercase letters in your new password.");
}

// Start of prompt to confirm and, if accepted, add these characters to the customPassArray.
var numbers = confirm("Do you want to include numbers?");

if (numbers) {
  alert("We will include numbers in your new password.");
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  console.log("numbers:", numbers);

  customPassArray.push(...numbers);
} else {
  alert("We will not include numbers in your new password.");
}

// Start of prompt to confirm and, if accepted, add these characters to the customPassArray.
var specialCharacters = confirm("Do you want to inculde special characters?");

if (specialCharacters) {
  alert("We will include special characters in your new password.");
  specialCharacters = ["!", "@", "$", "&", "*", "?"];
  console.log("specialCharcters:", specialCharacters);

  customPassArray.push(...specialCharacters);
} else {
  alert("We will not include special characters in your new password.");
}


var num;
var indivChar;
var newArr =[] 


console.log("newArr:", newArr);

// Generates random number based on the number of characters requested in the prompt.  
// Then uses 'num' value to get a random index value for 'indivChar' and pushes those values into 'newArr'.
for (i = 0; i < numberOfCharacters; i++) {
  num = Math.floor(Math.random() * customPassArray.length);

  indivChar = customPassArray[num];
  newArr.push(indivChar);
  
  
}
return newArr.join("");



}