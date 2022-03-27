//Global veriables
var timer = startTimer();
var time = 60;
var questionPlace = document.getElementById("question");
var choice1 = document.getElementById("c1");
var choice2 = document.getElementById("c2");
var choice3 = document.getElementById("c3");
var choice4 = document.getElementById("c4");
var right = time + 10;
var wrong = time - 10;

//Questions array
var questions = [
  {
    question: "To see if two variables are equal in an if / else statement you would use ____.",
    choices: ["1. =+", "2. ==", "3. 'equals'", "4. !="],
    answer: "2. =="
},
{
  question: "How to write an IF statement in JavaScript?",
  choices: ["1. if i == 5 then", "2. if i = 5 then", "3. if(i == 5)", "4. if i = 5"],
  answer: "3. if(i == 5)"
},
{
    question: "The first index of an array is ____.",
    choices: ["1. 0", "2. 1", "3. 4", "4. any"],
    answer: "1. 0"
},
{
    question: "Who invented JavaScript?",
    choices: ["1. Beyonce", "2. Joe Biden", "3. Brendan Eich", "4. Ben Javascript"],
    answer: "3. Brendan Eich"
},
{
    question: "How do you add a comment in a JavaScript?",
    choices: ["1. //This is a comment", "2. <!--This is a comment-->", "3. 'This is a comment", "4. * This is a comment *"],
    answer: "1. //This is a comment"
}];






function startTimer(){
    setInterval(function() {
      time--;
      if (time >= 0) {
        span = document.getElementById("timer");
        span.innerHTML = time;
      }
      if (time === 0) {
          alert('Sorry, out of time');
          clearInterval(time);
      }
    }, 1000);
}

function start(){
    document.getElementById("startQ");
    startTimer();
};