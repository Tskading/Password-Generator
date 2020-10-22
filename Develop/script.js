
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newArr = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newArr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/////////////////////////////////////////////////////////////////////////////////////////

var randomPassword = "";

var incorrectPrompt = true; // this says that it's currently incorrect
var numberOfCharachters;

var customPassArray = [];
console.log(customPassArray);

alert("Please open your console log. (Fn+F12)");

function generatePassword(){

//while the parameters haven't been met yet, it's technically incorrect
while (incorrectPrompt) {
  numberOfCharachters = parseInt(
    prompt(
      "How many charachters would you like your password to be? Pick a value between 8 and 128."
    )
  );
  //user has to meet criteria
  if (numberOfCharachters >= 8 && numberOfCharachters <= 128) {
    alert(
      "Thank you.  Your new password will be " +
        numberOfCharachters +
        " charachters long."
    );
    //below actually means that they got it right bc the above happened
    incorrectPrompt = false;
  }
}

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
  console.log(lowerCase);

  customPassArray.push(...lowerCase);
} else {
  alert("We will not inculde lower case letters in your new password.");
}

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
  console.log(upperCase);

  customPassArray.push(...upperCase);
} else {
  alert("We will not inculde uppercase letters in your new password.");
}

var numbers = confirm("Do you want to include numbers?");

if (numbers) {
  alert("We will include numbers in your new password.");
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  console.log(numbers);

  customPassArray.push(...numbers);
} else {
  alert("We will not include numbers in your new password.");
}

var specialCharachters = confirm("Do you want to inculde special charachters?");

if (specialCharachters) {
  alert("We will include special charachters in your new password.");
  specialCharachters = ["!", "@", "$", "&", "*", "?"];
  console.log(specialCharachters);

  customPassArray.push(...specialCharachters);
} else {
  alert("We will not include special charachters in your new password.");
}

var num;
var indivChar;
var newArr =[] // global arr that we push the new randomized indexes in to 
// generates random number based on the number of charachters requested in the prompt and prints it to the console log
for (i = 0; i < numberOfCharachters; i++) {
  num = Math.floor(Math.random() * customPassArray.length);

  indivChar = customPassArray[num];
  newArr.push(indivChar);
  
  //console.log('newArr:', newArr);

}
return newArr.join("");


}