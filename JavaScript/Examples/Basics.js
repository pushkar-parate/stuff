/* ==================== CHAPTER 5 : ARRAYS ==================== */

// Initialising array
let array = ["noun", "pronoun", true, null, false, 83];

// For Loop
console.log(
  "%cFOR LOOP",
  "color:red; font-size:16px; text-transform:uppercase; font-weight: bolder; padding:12px",
);
for (let index = 0; index < array.length; index++) {
  console.log(`${array[index]}`);
}

// For IN Loop
console.log(
  "%cFOR IN LOOP",
  "color:red; font-size:16px; text-transform:uppercase; font-weight: bolder; padding:12px",
);
for (keys in array) {
  console.log(`${array[keys]}`);
}

// For OF Loop
console.log(
  "%cFOR OF LOOP",
  "color:red; font-size:16px; text-transform:uppercase; font-weight: bolder; padding:12px",
);
for (let keys of array) {
  console.log(`${keys}`);
}

// All have same results...

// MAP vs FOR EACH
let array0 = [45, 24, 8, 23, 1, 77, 30];

console.log(
  "%cFOR EACH LOOP",
  "color:red; font-size:16px; text-transform:uppercase; font-weight: bolder; padding:12px",
);

array0.forEach((element) => {
  console.log(`${element}`);
});

// MAP METHOD FOR ARRAYS
console.log(
  "%cMAP",
  "color:red; font-size:16px; text-transform:uppercase; font-weight: bolder; padding:12px",
  "Used to create new array by making changes in existing array. Can be used same as FOR EACH LOOP for arrays like this:",
);
array0.map((element) => {
  console.log(`${element}`);
});

console.log("%cYou can create new arrays like this:", "color:aqua");
let array1 = array0.map((element) => {
  return element + 10;
});
array1.forEach((element) => {
  console.log(`${element}`);
});
console.log("%cFor Each wont do that shit.", "color:aqua");

// FILTER METHOD FOR ARRAYS
console.log(
  "%cFILTER",
  "color:red; font-size:16px; text-transform:uppercase; font-weight: bolder; padding:12px",
  "Used to filter values using relational operators and it creates 'new arrays' like this:",
);
let arr = array0.filter((element) => {
  return element < 50;
});
arr.forEach((element) => {
  console.log(`${element}`);
});
console.log(
  "%cMAP wont do that shit.\nIf you use map() then the created array will be BOOLEAN LOGIC.",
  "color:aquamarine",
);

/* ==================== PRACTISE SET QUESTIONS ==================== */

// Create array of numbers and prompt user to enter more
let arr0 = [45, 24, 77, 30]; // Initialised Array

// FIRST
let a0 = prompt("Enter a number to push in array");
a0 = Number.parseInt(a0);
arr0.push(a0);

// SECOND
let a1 = prompt("Enter a number to push in array");
a1 = Number.parseInt(a1);
arr0.push(a1);

// THIRD
let a2 = prompt("Enter a number to push in array");
a2 = Number.parseInt(a2);
arr0.push(a2);

// Showing Final Array
arr0.forEach((element) => {
  console.log(`${element}`);
});

alert("Question 1 : Passed");

// Keep adding the numbers until 0 is given by user
do {
  let ab = prompt("Enter a number to push in array");
  var a = Number.parseInt(ab);
  if (a != 0) {
    arr0.push(a);
  } else {
    console.warn("ENTERED 0: PROGRAM FAILED");
  }
} while (a != 0);

alert("Question 2 : Passed");

// Filter numbers divisible by 7 & 10 using filter()
let brr = arr0.filter((element) => {
  return element % 10 == 0 || element % 7 == 0;
});
brr.forEach((element) => {
  console.log(`${element}`);
});

console.info("Question 3: Passed");

// Create an array of squares of numbers entered by user
squaredUpArr0 = arr0.map((element) => {
  return element * element;
});
squaredUpArr0.forEach((element) => {
  console.log(element);
});

console.info("Question 4: Passed");

alert("Thats all into Chapter 5 and Arrays!");
console.info("Thats all into Chapter 5 and Arrays!");

/* ==================== EXERCISE 1: GUESS THE NUMBER ==================== */
let randomNum = Math.round(Math.random() * 100);

do {
  var userInput = prompt("Guess the number ..!");
  if (userInput < randomNum) {
    alert("The number is greater");
  } else if (userInput > randomNum) {
    alert("The number is smaller");
    console.log(userInput);
  } else if (userInput == randomNum) {
    alert("Number is correct ..!");
    console.log(userInput);
  } else {
    alert("Enter number not shitt");
    console.error("Entered a character");
  }
} while (randomNum != userInput);

/* ==================== EXERCISE 2: STONE-PAPER-SCISSORS GAME ==================== */
alert("STARTING ROCK-PAPER-SCISSORS GAME ..!");
let score = 0;

// GAME OUTPUT FUNCTIONS
const win = () => {
  score++;
  alert(`You Win\nSCORE:\t${score}`);
  console.log("%cWON\t" + score, "color:green; font-weight:bolder");
};

const lose = () => {
  score--;
  alert(`You lose\nSCORE:\t${score}`);
  console.log("%cLOST\t" + score, "color:red; font-weight:bolder");
};

const tie = () => {
  alert(`Its a TIE ..!\nSCORE:\t${score}`);
  console.log("%cTIE\t" + score, "color:gray; font-weight:bolder");
};

const error = () => {
  alert("The game is case-sensitive...\nAlso, Enter correct spellings");
  console.error("User entered unexpected values");
};

let Array = ["Rock", "Paper", "Scissors"];

// Game Loop
do {
  // User Input Logic
  let userInput = prompt("Enter: Rock / Paper / Scissors");
  if (userInput == "Rock") {
    var input = 0;
  } else if (userInput == "Paper") {
    var input = 1;
  } else if (userInput == "Scissors") {
    var input = 2;
  } else {
    var input = undefined;
  }

  // Random Input Logic
  let randomInput = Math.floor(Math.random() * 3);

  // Game Logic
  if (userInput == Array[randomInput]) {
    tie();
  } else if (input == 0 && randomInput == 1) {
    lose();
  } else if (input == 0 && randomInput == 2) {
    win();
  } else if (input == 1 && randomInput == 0) {
    win();
  } else if (input == 1 && randomInput == 2) {
    lose();
  } else if (input == 2 && randomInput == 0) {
    lose();
  } else if (input == 2 && randomInput == 1) {
    win();
  } else {
    error();
  }
} while (confirm("Once Again ..?") == true);

// Show Score before EXIT
alert(`Your Score was ${score} Points`);
