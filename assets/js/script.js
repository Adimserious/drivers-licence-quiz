// These are the quiz questions
const licenceQuestions = [

    {
        question: 'Your passenger wants to discuss something with you during the journey. what should you do?',
        choices: ["Concentrate on the discussion",
                  "Concentrate on the driving",
                  "Concentrate on both"],
        correct: "Concentrate on the driving"
    },
    {
        question: 'What could cause the vehicle to leave the road?',
        choices: ["Tiredness","Distraction","Inattention", ],
        correct: "Inattention"
    },
    {
        question: 'What can inpair fitness to drive?',
        choices: ["Fatigue", 
                  "Certain medicines", 
                  "Alcohol and other intoxicants"],
        correct:  "Fatigue"
    },
    {
        question: 'What should you do if you start feeling tired while driving?',
        choices: ["Take a break straightaway",
                  "Get out of the car",
                  "Listen to stimulating music"],
        correct:  "Take a break straightaway"
    },
    {
        question: 'What emotions can influence driving behaviour?',
        choices: ["Sorrow and worry",
                  "Happiness and exuberance",
                  "Anger and rage"],
        correct:  "Anger and rage"
    },
    {
        question: 'What can be the effect of even small quantities of alcohol?',
        choices: ["Reckless driving",
                  "Delayed reactions",
                  "Impairment of hearing and vision"],
        correct:  "Reckless driving"
    },
    {
        question: 'Are drivers during their probation period allowed to be under the influence of alcohol when driving?',
        choices: ["yes, up to 30 miligrams",
                  "No, definitely not",
                  "yes, upto 50 miligram"],
        correct:  "No, definitely not"
    },
    {
        question: 'When will offences carrying two points be deleted from the Central Register of Road Traffic Offenders?',
        choices: ["-5 years",
                  "-2 years",
                  "-3 years"],
        correct:  "-5 years"
    },
    {
        question: 'You want to carry a child in your car, when must you use a child seat for this purpose?',
        choices: ["If the child is older than 12",
                  "If the child is taller than 150 cm",
                  "If the child is younger than 12"],
        correct:  "If the child is younger than 12"
    },
    {
        question: 'What is the maximum length of time you are allowed to stop at a bus stop provided you do not present an obstruction to buses?',
        choices: ["3 minutes",
                 "8 minutes",
                 "5 minutes"],
        correct: "8 minutes"
    },
    {
        question: 'Is it irresponsible to overtake a truck and trailer a short distance before crossroads?',
        choices: ["No, they drive at low speed",
                  "No, they understands",
                  "Yes, they can obscure traffic signs"],
        correct:  "Yes, they can obscure traffic signs"
    }

];

// DOM elements for quiz and result sections
const info = document.getElementById('info');
const quiz = document.getElementById('quiz');
const choices = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const choiceTextElements = [
    document.getElementById('choice1_text'),
    document.getElementById('choice2_text'),
    document.getElementById('choice3_text'),
];

const timerCount = document.getElementById('timerCount');
const resultsContainer = document.getElementById('results');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');
const exitButton = document.getElementById('exit');
const exitMessage = document.getElementById('exit-message');

/**
 *  This function checks for form validation to see
 * if the username is provided before
 * submiting.
 */
 function handleSubmit(event) {

    let usernameLength = document.getElementById('username').value.length;
    
    let userErrorMsg = document.getElementById('user-msg');
    
    if (usernameLength !== "") {
        userErrorMsg.innerHTML = 'Username must not be empty';
    
    } else {
        userErrorMsg.innerHTML = '';
        showBeginWindow();
        hideForm();
    }
}

let form = document.getElementById('form');
form.addEventListener('click', handleSubmit);

// This function hides the form

function hideForm() {
    event.preventDefault();
    form.style.maxHeight = ('0');
    showBeginWindow();
}

/**
 * This function makes the start Quiz button change border
 * color to black when pointed
 */

function beginHover(event) {
    beginBtn.style.borderColor = 'black';
    beginBtn.style.backgroundColor = 'black';
    beginBtn.style.cursor = 'pointer';
}

/**
 * This function makes the Start Quiz border 
 * color change to white at mouse-out
 */
function beginOut(event) {
    beginBtn.style.borderColor = 'white';
    beginBtn.style.color = 'white';
}
// Add eventlistner to mouseover and mouseout for beginBtn
let beginBtn = document.getElementById('beginBtn');
beginBtn.addEventListener('mouseover', beginHover);
beginBtn.addEventListener('mouseout', beginOut);


// This function shows the start Quiz area

function showBeginWindow() {
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = '100px';
    begin.style.backgroundColor = 'Transparent';
    begin.style.display = 'block';
    begin.style.transitionDelay = '1s';
    info.style.display = 'block';
    begin.addEventListener('click', hideStartQuiz);
}

// This function hides the start Quiz and load the first quiz
function hideStartQuiz() {
    let wrap = document.querySelector('.wrapper');
    wrap.style.display = 'none';
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = ('0');
    begin.style.display = 'none';
    begin.style.transitionDelay = '1s';
    info.style.display = 'none';
    exitMessage.style.display = 'none';
    // Load the first quiz question
    loadQuiz();
} 

// Variables to keep track of current quiz question and score
let currentQuiz = 0;
let score = 0;
// Variable to hold the interval timer
let timer;
// Variable to track the remaining time for the current question
let timeLeft = 15;


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the quiz questions at the start
shuffle(licenceQuestions);

// Function to load the current quiz question and choices
function loadQuiz() {
    document.getElementById('quiz').style.display = 'block';
    // Clear any existing timer to ensure no multiple timers run concurrently
    clearInterval(timer);
    // Reset the time left for the new question
    timeLeft = 15;
    // Start the timer for the current question
    startTimer();

    // Deselect any previously selected answer
    deselectAnswers();

    // Get the current quiz data
    const currentQuizData = licenceQuestions[currentQuiz];

    // Update the question and choices in the DOM
    questionElement.innerText = currentQuizData.question;
    choiceTextElements.forEach((choiceTextElement, index) => {
        choiceTextElement.innerText = currentQuizData.choices[index];
        choiceTextElement.onclick = () => selectAnswer(currentQuizData.choices[index]);
    });
    // quiz number count
    let questionNumber = document.getElementById('questionNoText');
    questionNumber.innerHTML = `<span class="count">Question ` + (parseInt(currentQuiz) + 1) + ` of 11</span>`;
}

// Function to deselect any selected answers
function deselectAnswers() {
    // Deselect  choices
    choices.forEach(choice => choice.checked = false);
}

function startTimer() {
    // Display the initial time left
    timerCount.innerText = `Time left: ${timeLeft} seconds`;
    // Set an interval to decrease the time left every second
    timer = setInterval(() => {
        // Decrease the time left by 1 second
        timeLeft--;
        // Update the timer display
        timerCount.innerText = `Time left: ${timeLeft} seconds`;

        // Check if the time left has reached 0
        if (timeLeft <= 0) {
            // Stop the timer
            clearInterval(timer);
            // Automatically move to the next question
            moveToNextQuestion();
        }
    }, 1000); // Interval is set to 1000 milliseconds (1 second)
}

function selectAnswer(answer) {
    clearInterval(timer);

    if (answer === licenceQuestions[currentQuiz].correct) {
        score++;
    }
    moveToNextQuestion();
}

function moveToNextQuestion() {
    currentQuiz++;
    if (currentQuiz < licenceQuestions.length) {
        loadQuiz();
    } else {
        quiz.classList.add('hidden');
        quiz.style.display = 'none';
        resultsContainer.classList.remove('hidden');
        resultsContainer.style.display = 'block';
        displayScoreMessage();
    }
}

// Function to display a message based on the user's quiz score
function displayScoreMessage() {
    let message = '';
    const totalQuestions = licenceQuestions.length;
    
    if (score === totalQuestions) {
        // If the user answered all questions correctly
        message = `Excellent work, You got all ${score} out of ${totalQuestions} questions correct!`;
    } else if (score >= totalQuestions * 0.8) {
        // If the user scored 80% or more of the total questions
        message = `Great job, You scored ${score} out of ${totalQuestions}.`;
    } else if (score >= totalQuestions * 0.5) {
        // If the user scored 50% or more of the total questions
        message = `Good effort, You scored ${score} out of ${totalQuestions}.`;
    } else {
        // If the user scored less than 50% of the total questions
        message = `You scored ${score} out of ${totalQuestions}, Keep practicing!`;
    }

    // Display the message by setting the inner text of the score element
    scoreElement.innerText = message;
}



// Event listener for the restart button
restartButton.addEventListener('click', () => {
    // Reset the quiz variables
    currentQuiz = 0;
    score = 0;
    shuffle(licenceQuestions);

    // Show the quiz and hide the results
    quiz.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    resultsContainer.style.display = 'none';

    // Load the first question
    loadQuiz();
});

// Event listiner for exit button to hide the quiz and result container then show begin div
exitButton.addEventListener('click', () => {
    clearInterval(timer); // Clear timer on exit
    quiz.classList.add('hidden');
    quiz.style.display = 'none';
    resultsContainer.classList.add('hidden');
    resultsContainer.style.display = 'none';
    exitMessage.classList.remove('hidden');
    exitMessage.style.display = 'block';
    showBeginWindow();
    info.style.display = 'none';
    let wrap = document.querySelector('.wrapper');
    // Wrap was causing issues and i set it empty
    wrap.style.display = '';

    let formDiv = document.querySelector('#form-div');
    formDiv.style.display = 'none';

    // Reset the quiz variables
    currentQuiz = 0;
    score = 0;
    shuffle(licenceQuestions);
});

// Event listiner for x icon to hide the quiz and result container then show bigin div
let cross = document.getElementById('xExit');
cross.addEventListener('click', () => {
    clearInterval(timer); // Clear timer on exit
    quiz.classList.add('hidden');
    quiz.style.display = 'none';
    resultsContainer.classList.add('hidden');
    resultsContainer.style.display = 'none';
    exitMessage.classList.remove('hidden');
    exitMessage.style.display = 'block';
    let wrap = document.querySelector('.wrapper');
    wrap.style.display = '';
    showBeginWindow();
    info.style.display = 'none';
    
    let formDiv = document.querySelector('#form-div');
    formDiv.style.display = 'none';

    // Reset the quiz variables
    currentQuiz = 0;
    score = 0;
});
