// These are the quiz questions
const licenceQuestions = [

    {
        question: 'Your passenger wants to discuss something with you during the journey. what should you do?',
        choices: ["Concentrate on the discussion",
                  "Concentrate on the driving",
                  "Concentrate on both"],
        correct: "Concentrate on both"
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
const quiz = document.getElementById('quiz');
const choices = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const choiceTextElements = [
    document.getElementById('choice1_text'),
    document.getElementById('choice2_text'),
    document.getElementById('choice3_text'),
];

const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');
const exitButton = document.getElementById('exit');
const exitMessage = document.getElementById('exit-message');


/**
 *  This function checks for form validation to see
 * if the username and passwords matches the criteria provided before
 * submiting.
 */
function handleSubmit(event) {
    event.preventDefault();

    let usernameLength = document.getElementById('username').value.length;
    let user = document.getElementById('username').value;
    let passwordValue = document.getElementById('password').value;
    let passwordValueLength = document.getElementById('password').value.length;
    let confirmPasswordValue = document.getElementById('confirm-password').value;
    let userErrorMsg = document.getElementById('user-msg');
    let passErrorMsg = document.getElementById('error-msg');

    if (usernameLength < 2) {
        userErrorMsg.innerHTML = 'Username must be at least 2 characters';
    } else if (passwordValue !== confirmPasswordValue) {
        userErrorMsg.innerHTML = '';
        passErrorMsg.innerHTML = 'Passwords do not match.';
    } else if (passwordValueLength < 6) {
        userErrorMsg.innerHTML = '';
        passErrorMsg.innerHTML = 'Password must be at least 6 characters.';
    } else if (passwordValueLength > 20) {
        passErrorMsg.innerHTML = 'Password must not be greater than 20 characters.';
    } else if (!passwordValue.match(/[0-9]/)) {
        userErrorMsg.innerHTML = '';
        passErrorMsg.innerHTML = 'Password must contain at least a number.';
    } else {
        userErrorMsg.innerHTML = '';
        passErrorMsg.innerHTML = '';
        form.submit();
        showBeginWindow();
        hideForm();
    }
}

let guestButton = document.getElementById('guestBtn');
guestButton.addEventListener('click', hideForm);

let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

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
    begin.style.maxHeight = '1000px';
    begin.style.transitionDelay = '1s';
    begin.style.backgroundColor = 'Green';
    begin.addEventListener('click', hideStartQuiz)
}

// This function hides the start Quiz and load the first quiz
function hideStartQuiz() {
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = ('0');
    begin.style.transitionDelay = '1s';
    exitMessage.style.display = 'none';
    // Load the first quiz question
    loadQuiz()
} 


// Variables to keep track of current quiz question and score
let currentQuiz = 0;
let score = 0;


// Function to load the current quiz question and choices
function loadQuiz() {
    document.getElementById('quiz').style.display = 'block'
    // Deselect any previously selected answer
    deselectAnswers();

    // Get the current quiz data
    const currentQuizData = licenceQuestions[currentQuiz];

    // Update the question and choices in the DOM
    questionElement.innerText = currentQuizData.question;
    choiceTextElements.forEach((choiceTextElement, index) => {
        choiceTextElement.innerText = currentQuizData.choices[index];
    });
    // quiz number count
    let questionNumber = document.getElementById('questionNoText');
    questionNumber.innerHTML = `<span class="count">Question ` + (parseInt(currentQuiz) + 1) + ` of 11</span>`;
    // shuffle quiz questions
    shuffledQuestions = licenceQuestions.sort(() => Math.random() - 0.5);
}

// Function to deselect any selected answers
function deselectAnswers() {
    choices.forEach(choice => choice.checked = false);
}

// Function to get the selected answer
function getSelected() {
    let answer;
    choices.forEach(choice => {
        if (choice.checked) {
            // Get the text of the selected answer
            answer = choice.nextElementSibling.innerText;
        }
    });
    return answer;
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        // Check if the selected answer is correct
        if (answer === licenceQuestions[currentQuiz].correct) {
            score++;
        }
        // Move to the next question
        currentQuiz++;

        // Check if there are more questions
        if (currentQuiz < licenceQuestions.length) {
            // Load the next question
            loadQuiz();
        } else {
            // No more questions, show the results
            quiz.classList.add('hidden');
            quiz.style.display = 'none'
            resultsContainer.classList.remove('hidden');
            resultsContainer.style.display = 'block';
            scoreElement.innerText = `Your Score: ${score} out of ${licenceQuestions.length}`;
        }
    }
});

// Event listener for the restart button
restartButton.addEventListener('click', () => {
    // Reset the quiz variables
    currentQuiz = 0;
    score = 0;

    // Show the quiz and hide the results
    quiz.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    resultsContainer.style.display = 'none';

    // Load the first question
    loadQuiz();
});

// Event listiner for exit button to hide the quiz and result container then show begin div
exitButton.addEventListener('click', () => {
    quiz.classList.add('hidden');
    quiz.style.display = 'none';
    resultsContainer.classList.add('hidden');
    resultsContainer.style.display = 'none'
    exitMessage.classList.remove('hidden');
    exitMessage.style.display = 'block'
    showBeginWindow();

    // Reset the quiz variables
    currentQuiz = 0;
    score = 0;

    
});

// Event listiner for x icon to hide the quiz and result container then show bigin div
let cross = document.getElementById('xExit');
cross.addEventListener('click', () => {
    quiz.classList.add('hidden');
    quiz.style.display = 'none';
    resultsContainer.classList.add('hidden');
    resultsContainer.style.display = 'none';
    exitMessage.classList.remove('hidden');
    exitMessage.style.display = 'block';
    showBeginWindow();

    // Reset the quiz variables
    currentQuiz = 0;
    score = 0;

    

});