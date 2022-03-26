var timer = startTimer();
var time = 60;
var question = document.getElementById("question");
var choice1 = document.getElementById("c1");
var choice2 = document.getElementById("c2");
var choice3 = document.getElementById("c3");
var choice4 = document.getElementById("c4");
var right = time + 10;
var wrong = time - 10;






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
    document.getElementById("homePage")
};