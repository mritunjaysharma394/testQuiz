var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;

// input >> processing >> output
var userName = readlineSync.question(chalk.cyan("What is your name? "));

console.log(chalk.blue("Welcome "+ userName + " to this demo-app!"));


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Right Answer");
    score = score + 1;
    
  } else {
    console.log("Incorrect");
   
  }

  console.log("Current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Lucknow"
}, {
  question: "My favourite poet? ",
  answer: "Anne Sexton"
},
{
  question: "Where do I work? ",
  answer: "Student"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")