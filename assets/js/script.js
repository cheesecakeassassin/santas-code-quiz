// Questions for quiz
var questions = [
    {
        title: 'Commonly Used data types DO NOT include:',
        choices: ['stings', 'alerts', 'booleans', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statment is enclosed within _____.',
        choices: ['parentheses', 'quotes', 'curly brackets', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'What javascipt method can we use to select an html element?',
        choices: [
            'document.queryselector()',
            'document.getElementChild',
            'document.getElementById',
            'Both 1 and 3',
        ],
        answer: 'Both 1 and 3',
    },
    {
        title: 'What html tag is NOT included in the HEAD tag?',
        choices: ['link', 'meta', 'title', 'header'],
        answer: 'header',
    },
    {
        title: 'What attribute is used in html to decorate content?',
        choices: ['css', 'class', 'src', 'style'],
        answer: 'style',
    },
];

var questionsEl = document.querySelector('#question');
var choicesEl = document.querySelector('#choices');
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('#start-button');
var startScreen = document.querySelector('#start-screen');
var quiz = document.querySelector('#quiz');
var feedbackEl = document.querySelector('#feedback');

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timer;

// Method that starts the quiz
function startQuiz() {
    // Hide start screen
    startScreen.setAttribute('class', 'hide');

    // Unhide questions section
    quiz.setAttribute('class', 'show');

    // Start timer
    timer = setInterval(decrementTimer, 1000);

    // Show starting time
    timerEl.textContent = time;

    getQuestion();
}

function decrementTimer() {
    // Update time
    time--;
    timerEl.textContent = time;

    // Checks if user has run out of time
    if (time <= 0) {
        quizFinished();
    }
}

function getQuestion() {
    // Gets the current question from the array
    var currentQuestion = questions[currentQuestionIndex];

    // Updates title with the current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    // Loops over choices
    currentQuestion.choices.forEach(function (choice, i) {
        // Creates a new button for each choice
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        // Attaches event listener to clicking on answer
        choiceNode.onclick = questionClick;

        // Displays on page
        choicesEl.appendChild(choiceNode);
    });
}

// Method handles clicking on answers
function questionClick() {
    // Checks for answer accuracy
    if (this.value !== questions[currentQuestionIndex].answer) {
        // Penalty for wrong answer
        time -= 10;

        if (time < 0) {
            time = 0;
        }

        // Displays time on page
        timerEl.textContent = time;

        feedbackEl.textContent = 'Wrong!';
    } else {
        feedbackEl.textContent = 'Correct!';
    }

    // Shows feedback for a second
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function () {
        feedbackEl.setAttribute('class', 'feedback hide');
    }, 1000);

    // Move on to next question
    currentQuestionIndex++;

    // Checks if questions are done
    if (currentQuestionIndex === questions.length) {
        quizFinished();
    } else {
        getQuestion();
    }
}

// End of quiz handling
function quizFinished() {
    clearInterval(timer);
    quiz.setAttribute('class', 'hide');
}

// Starts quiz
startButton.onclick = startQuiz;
