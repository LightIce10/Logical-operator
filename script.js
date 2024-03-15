// // example. create a random decimal number between 0 and 100
// var random1 = Math.random() * 100;
// console.log(random1);

// // example. create a random integer between 0 and 10 (not including 10)
// var random2 = Math.random() * 10;
// random2 = Math.floor(random2);
// console.log(random2);

// // example. create a random number -5 and 5
// // range is (5-(-5)) = 10
// // low # is -5
// var random3 = Math.random() * 10 + -5;
// random3 = Math.floor(random3);
// console.log(random3);

// // example. create a delivery application that prompts the user for the length, width, and height of a package then rehect if any dimension is greater than 10 and accept if dimensions are less than or equal to 10
// var length = +prompt("Length?");
// var width = +prompt("Widith?");
// var height = +prompt("Height?");

// // check if any dimension is bigger than 10, reject if so
// if (length > 10 || width > 10 || height > 10) {
//   alert("Reject");
// } else {
//   alert("Accept");
// }

// Example. Create a vilid grade application that asks the user to enter a final grade for english class. output "grade submitted" if it is between 0 and 100 and "Grades must be between 0 and 100" and grades must be between

// var random4 = Math.random() * 1;
// console.log(random4);

// var random5 = Math.random() * 10;
// random5 = Math.floor(random5);
// console.log(random5);

// Enter a single digit number between 1 and 9
// var userNum = parseInt(prompt("Enter a single digit number?"));

// if (userNum < 10) {
//   alert("Good choice");
//   console.log(userNum);
// } else userNum < 0 && userNum > 10;
// {
//   alert("INCORRECT");
//}

// if (userNum < 0 || userNum > 9) {
//   alert("That's not a single digit number");
// } else {
//   alert("Thanks!");
// }

// var random6 = Math.floor(Math.random() * 1001);
// console.log(random6);

// var random7 = Math.floor(Math.random() * 10 + 5);
// console.log(random7);

// var random8 = Math.floor(Math.random() * 3 + 1);
// console.log(random8);

// var random9 = Math.floor(Math.random() * 100 + 51);
// console.log(random9);

// food >= 1 && hunger == 0
// (day == "Monday" || day == "Friday") && pool == "open";

// (day == "Friday" || day == "Saturday ") && (MathMark > 80 || chores == "done")

// var number = +prompt("Choose a number between 0 and 100");

// if (number > 0 && number < 100) {
//   alert("Thanks!");
// } else {
//   alert("Incorrect Value");
// }

// var color = prompt("Enter any colour");

// if (
//   color == "red" ||
//   color == "orange" ||
//   color == "yellow" ||
//   color == "green" ||
//   color == "blue" ||
//   color == "indigo" ||
//   color == "violet"
// ) {
//   alert("That's a rainbow color!");
// } else {
//   alert("Color submitted.");
// }

var singleD = +prompt("Enter a single digit number");
var twoD = +prompt("Enter a two digit number");

if (singleD < 10 && singleD >= 0 && twoD >= 10) {
  alert(singleD + twoD);
} else {
  alert("You didn't follow instructions.");
}
