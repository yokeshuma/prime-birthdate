//Importing packages and Variables
let readlineSync = require("readline-sync");
let chalk = require("chalk");
let minDate = 1;
let maxDate = 31;
let maxMonth = 12;

//Name of the Game 
console.log('-------------\n', chalk.black.bold.bgGreenBright('Prime Date (See whether your birth-date is prime or not!'), '\n-------------\n');


//Rules and information
console.log(chalk.white.bold('Info about Prime Number'), chalk.blue.bold('\n1. A number that is divisible only by itself and 1.\n2. Examples (3,5,7,11,13....).\n '));


//Getting Username from the user's input 
let userName = readlineSync.question(chalk.red.bold("May I know your name?\n"));

//Getting Birth Date and Birth Month from user's input
let birthDate = readlineSync.question(chalk.red.bold("\nCan you tell me your birth date (DD)?\n"));
let birthMonth = readlineSync.question(chalk.red.bold("\nCan you tell me your birth month (MM)?\n"));

//Validation Function if user enters wrong input
function handler() {
  let unparsedValue = birthDate + birthMonth;

  if (isNaN(birthDate) || isNaN(birthMonth)) {
    console.log(chalk.red.blue("Please enter input in numbers\n"));
  } else if (birthDate == "" || birthDate == "") {
    console.log(chalk.red.blue("Fields Should Not Be Empty\n"));
  } else if (birthDate > maxDate || birthMonth > maxMonth)
    console.log(chalk.red.blue("It should not exceed", chalk.bold.cyan(maxDate), "for days and ", chalk.bold.cyan(maxMonth), "for month"));
  else {
    //Welcome msg
    console.log("\nWelcome\n", chalk.bold.cyan(userName), "Your Birthdate is", chalk.bold.cyan(birthDate), chalk.bold.cyan(birthMonth), "\n");
    primeChecker(unparsedValue);
  }
}

//Prime Check Function
function primeChecker(unparsedValue) {
  let primeNumber = true;
  let parsedValue = parseInt(unparsedValue);
  for (let i = 2; i < parsedValue; i++) {
    if (parsedValue % i == 0) {
      primeNumber = false;
      break;
    }
  }
  if (primeNumber == true) {
    console.log(chalk.red.green.bold("\nYour birth-date is a prime number\n"));

  } else {
    console.log(chalk.red.blue.bold("Your birth-date is not a prime number\n"));

  }
}

//Function Call
handler()