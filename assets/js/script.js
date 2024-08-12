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




// Grab elements from DOM and assign variables to them 
let signup = document.getElementById('signupBtn');
let title = document.getElementById('title');
let usernameArea = document.getElementById('username');
let passwordArea = document.getElementById('password');
let passwordConfirmedArea = document.getElementById('confirm-password');



// This is the sign up function 
function displaySignUp() {
    title.innerHTML = 'Sign-Up';
    signup.classList.add('active');
    passwordConfirmedArea.style.maxHeight = '80px';
    passwordConfirmedArea.style.paddingBottom = '1px';
    passwordConfirmedArea.style.paddingTop = '1px';
    passwordArea.setAttribute('placeholder', 'Create Password');
    usernameArea.setAttribute('placeholder', 'Create Username');
}

signup.addEventListener('click', displaySignUp);

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

    if (usernameLength < 8) {
        console.log('Username must be at least 8 characters');
        userErrorMsg.innerHTML = 'Username must be at least 8 characters';
    } else if (!user.match(/[0-9]/)) {
        console.log('Username must contain a number');
        userErrorMsg.innerHTML = 'Username must contain a number';
    } else if (passwordValue !== confirmPasswordValue) {
        userErrorMsg.innerHTML = '';
        console.log('Passwords do not match');
        passErrorMsg.innerHTML = 'Passwords do not match.';
    } else if (passwordValueLength < 8) {
        userErrorMsg.innerHTML = '';
        console.log('Password must be at least 8 characters');
        passErrorMsg.innerHTML = 'Password must be at least 8 characters.';
    } else if (passwordValueLength > 20) {
        console.log('Password must be less than 20 characters');
        passErrorMsg.innerHTML = 'Password must be less than 20 characters.';
    } else if (!passwordValue.match(/[0-9]/)) {
        userErrorMsg.innerHTML = '';
        console.log('Password must contain a number');
        passErrorMsg.innerHTML = 'Password must contain a number.';
    } else {
        passErrorMsg.innerHTML = '';
        userErrorMsg.innerHTML = '';
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

// This function shows the start Quiz area

function showBeginWindow() {
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = '1000px';
    begin.style.transitionDelay = '2s';
    begin.style.backgroundColor = 'burlywood';
}

/**
 * This function makes the start Quiz button change border and font
 * color to black and burlywood respectively when pointed
 */

function beginHover(event) {
    beginBtn.style.borderColor = 'black';
    beginBtn.style.color = 'burlywood';
    beginBtn.style.backgroundColor = 'black';
    beginBtn.style.cursor = 'pointer';
}

/**
 * This function makes the Start Quiz Button and border 
 * color change from white/burlywood to white at mouse-out
 */
function beginOut(event) {
    beginBtn.style.borderColor = 'white';
    beginBtn.style.color = 'white';
}

let beginBtn = document.getElementById('beginBtn');
beginBtn.addEventListener('mouseover', beginHover);
beginBtn.addEventListener('mouseout', beginOut);

/**
 * This function hides the Begin Quiz Area by setting the max-height
 * to 0px, as well also removes the transition delay
 */
function hideBeginArea() {
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = '0';
    begin.style.transitionDelay = '0s';
}

/**
 * This function reveals the quiz area by setting the max-height
 * property to 1000px
 */
function showQuestionArea() {
    let questionArea = document.getElementById('questionArea');
    let windowWidth = window.innerWidth;
    questionArea.style.maxHeight = '1000px';
    questionArea.style.transitionDelay = '0s';


    //  If statement  to set the min-height of the quiz area

    if (windowWidth < '500') {
        questionArea.style.minHeight = '710px';
    } else if (windowWidth < '768') {
        questionArea.style.minHeight = '850px';
    } else if (windowWidth < '1000') {
        questionArea.style.minHeight = '850px';
    } else {
        questionArea.style.minHeight = '750px';
    }
}


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

// Variables to keep track of current quiz question and score
let currentQuiz = 0;
let score = 0;

// Load the first quiz question
loadQuiz();

// Function to load the current quiz question and choices
function loadQuiz() {
    // Deselect any previously selected answer
    deselectAnswers();

    // Get the current quiz data
    const currentQuizData = licenceQuestions[currentQuiz];

    // Update the question and choices in the DOM
    questionElement.innerText = currentQuizData.question;
    choiceTextElements.forEach((choiceTextElement, index) => {
        choiceTextElement.innerText = currentQuizData.choices[index];
    });
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
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        // Move to the next question
        currentQuiz++;

        // Check if there are more questions
        if (currentQuiz < quizData.length) {
            // Load the next question
            loadQuiz();
        } else {
            // No more questions, show the results
            quiz.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
            scoreElement.innerText = `Your Score: ${score} out of ${quizData.length}`;
        }
    }
});