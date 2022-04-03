var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
];

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var startScreen = document.querySelector("#start-screen");
var quiz = document.querySelector("#quiz");
var feedbackEl = document.querySelector("#feedback");

var currentQuestion = 0;
var time = questions.length * 15;
var timer;

// Method that starts the quiz
function startQuiz() {
    // Hide start screen
    startScreen.setAttribute("class", "hide");
  
    // Unhide questions section
    quiz.setAttribute("class", "show");
  
    // Start timer
    timer = setInterval(tick, 1000);
  
    // Show starting time
    timerEl.textContent = time;
  
    getQuestion();
  }

  function decrementTimer() {
    // Update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

  function quizFinished() {
      clearInterval(timer);
      quiz.setAttribute("class", "hide");
  }