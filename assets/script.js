//Global variables
var time = 60;
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var homePage = document.getElementById("homePage");
var startQBtn = document.getElementById("startQ");
var questionPlace = document.getElementById("question");
var quizArea = document.getElementById("quiz-area")
var choice1 = document.getElementById("c1");
var choice2 = document.getElementById("c2");
var choice3 = document.getElementById("c3");
var choice4 = document.getElementById("c4");
var answerResult = document.getElementById("answer-result")
var summary = document.getElementById("summary")
var initialInput = document.getElementById("initialInput");
var initialBtn = document.getElementById("initialBtn");
var finalScore = document.getElementById("finalScore");
var highScores = document.getElementById("highScores");
var viewHighScores = document.getElementById("viewHighScores");
var listOfScores = document.getElementById("listOfScores");
var clearHighScores = document.getElementById("clearHighScores");
var goBackBtn = document.getElementById("goBackBtn");
var questionNumber = 0;
var result;
var questionIndex = 0;
var correctAnswer = 0;
var i = 0;

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


//functions

function quiz() {
  questionIndex = 0;
  time = 59;
  timeLeft.textContent = time;
  initialInput.textContent = "";

  homePage.style.display = "none";
  quizArea.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function() {
    time--;
    timeLeft.textContent = time;
    if (time <= 0) {
      clearInterval(startTimer);
      if (questionIndex < question.length - 1) {
        gameOver();
      }
    }
  }, 1000);
  showQuiz();
};

function showQuiz() {
  nextQuestion();
};

function nextQuestion() {
  questionPlace.textContent = questions[questionIndex].question;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
};

function answerResult(answer) {
  var line = document.getElementById("line")
  line.style.display = "block";
  answerResult.style.display = "block";
  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
    correctAnswer++;
    answerResult.textContent = "Correct!";
  } else {
    time -= 10;
    timeLeft.textContent = time;
    answerResult.textContent = "Wrong... The correct answer was " + questions[questionIndex].answer;
  }

  questionIndex++;
  if (questionIndex < questions.length) {
    nextQuestion;
  } else {
    gameOver();
  }
};

function c1() {
  answerResult(0);
};
function c2() {
  answerResult(1);
};
function c3() {
  answerResult(2);
};
function c4() {
  answerResult(3);
};

function gameOver() {
  summary.style.display = "block";
  quizArea.style.display = "none";
  homePage.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block"

  finalScore.textContent = correctAnswer;
};

function storeHS(event) {
  event.preventDefult();
  if (initialInput.value === "") {
    alert("Please enter your initials.");
    return;
  }

  highScores.style.display = "block";
  timer.style.display = "none";
  timesUp.style.display = "none";
  homePage.style.display = "none";
  quizArea.style.display = "none";
  summary.style.display = "none";

  var savedHS = localStorage.getItem("high scores");
  var scoresArray;
  var userScore = {
    initials: initialInput.value,
    score: finalScore.textContent
  };

  if (savedHS = null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHS)
  }

  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  showHS()
}

function showHS() {
  highScores.style.display = "block";
  timer.style.display = "none";
  timesUp.style.display = "none";
  homePage.style.display = "none";
  quizArea.style.display = "none";
  summary.style.display = "none";

  var savedHS = localStorage.getItem("high scores");
  var storedHS = JSON.parse(savedHS);

  if (savedHS === null) {
    return;
  }

  for (; i < storedHS.length; i++) {
    var hs = document.createElement("p");
    hs.innerHTML = storeHS[i].initials + ": " + storeHS[i].score;
    listOfScores.appendChild(hs);
  }
};
