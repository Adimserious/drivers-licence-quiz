// Grab elements from DOM and assign variables to them 
let signup = document.getElementById('signupBtn');
let title = document.getElementById('title');
let usernameArea = document.getElementById('username');
let passwordArea = document.getElementById('password');
let passwordConfirmedArea = document.getElementById('confirm-password');



 // This is the sign up function 
function displaySignUp(){
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
 
function hideForm(){
    event.preventDefault();
    form.style.maxHeight = ('0');
    showBeginWindow();
}

// This function shows the Begin Quiz area
 
function showBeginWindow(){
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = '1000px';
    begin.style.transitionDelay = '2s';
    begin.style.backgroundColor = 'burlywood'
}

/**
 * This function makes the Begin Quiz button change border and font
 * color to black and burlywood respectively when pointed
 */

function beginHover(event){
    beginBtn.style.borderColor = 'black';
    beginBtn.style.color = 'burlywood';
    beginBtn.style.backgroundColor = 'black';
    beginBtn.style.cursor = 'pointer';
}

/**
 * This function makes the Start Quiz Button and border 
 * color change from white/burlywood to white at mouse-out
 */
function beginOut(event){
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
function hideBeginArea(){
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

// This section adds functionality to the quiz area

let nextQuestionBtn = document.getElementById('nextQuestionBtn');
let questionText = document.getElementById('questionText');
let answerDiv = document.getElementById('answerDiv');
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;


/**
 * This function hides the Begin Quiz Area and reveals the Question Area. It also shuffles the
 * question order using the sort and random functions. Sets question index to 0.
 */
function runQuiz() {
    hideBeginArea();
    showQuestionArea();
    shuffledQuestions = licenceQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    getQuestion();
}
beginBtn.addEventListener('click', runQuiz);

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    getQuestion();
});

/**
 * This function takes the parameters of the question objects and passes them into
 * the getNextQuestion function. Sets the question number in the quiz area.
 */
function getQuestion(){
    resetState();
    getNextQuestion(shuffledQuestions[currentQuestionIndex]);
    let questionNumber = document.getElementById('questionNoText');
    questionNumber.innerHTML = `<span class="blue">Question ` + (parseInt(currentQuestionIndex) + 1) + ` of 10</span>`;

    /**
 * This function sets the question Inner-html using question parameter.
 * Creates new question divs with the answers passed to the function.
 * It adds the class of correct to the answers that are correct.
 */
function getNextQuestion(licenceQuestions) {
    questionText.innerHTML = licenceQuestions.question;
    licenceQuestions.answer.forEach(answer => {
        let button = document.createElement('div');
        button.innerHTML = answer.text;
        button.classList.add('answerText');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        } button.addEventListener('click', showAnswer);
        answerDiv.appendChild(button);
    });
}

}

/**
 * This function removes the div elements created in the function above,
 * Thereby setting the state of the questionArea back to default.
 * Removes the display of the Next Question button.
 */
function resetState(){
    nextQuestionBtn.style.display = 'none';
    while (answerDiv.firstChild){
        answerDiv.removeChild(answerDiv.firstChild);
    }
}

/**
 * This function deactivates the answer buttons after first click.
 * Passes the correct value to the function of setAnswerClass.
 * Determines whether to show the Next Question button or See Results Button.
  */
function showAnswer(e){
    // This removes the event listener after the first click.
    let eventButtons = document.getElementsByClassName('answerText');
    for (let eventButton of eventButtons) {
        eventButton.removeEventListener('click', showAnswer);
    }
    
    // This will take the object's correct value and passes it to the setAnswer Class function
    let clickedButton = e.target;
    Array.from(answerDiv.children).forEach(button => {
        setAnswerClass(button, button.dataset.correct);
    });

    // This increments the user's score by 1 if its answered correctly
    let dataType = clickedButton.classList.contains('correct');
    if (dataType) {
        score = ++score;
        let scoreText = document.getElementById('score');
    scoreText.innerHTML = parseInt(score);
    };   

    // This if statement determines whether the nextQuestion Button or seeResults button is shown
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
         nextQuestionBtn.style.display = 'block';
    } else if (shuffledQuestions.length = currentQuestionIndex + 1) {
        let seeResultsBtn = document.getElementById('seeResultsID');
        seeResultsBtn.classList.add('seeResultsBtn');
        seeResultsBtn.classList.add('question-btn');
        seeResultsBtn.style.cursor = 'pointer';
        seeResultsBtn.style.display = 'block';
        seeResultsBtn.addEventListener('click', showResultsArea);
    }
}

/**
 * This function takes the parameter of the question objects answer values, if correct it adds
 * the data-type of correct, if wrong it adds the data-type of wrong.
  */
function setAnswerClass(element, correct){
    // This clear answer class removes the datatype and class for the next question
    clearAnswerClass(element);
    if (correct) {
        element.classList.add('correct');
        element.setAttribute('data-type', 'correct');
    } else {
        element.classList.add('wrong');
        element.setAttribute('data-type', 'false');
    }
}

/**
 * This function removes both the class and data-type of the parameters passed
 * to the function so that they are cleared for the next question.
 */
function clearAnswerClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
    element.removeAttribute('data-type', 'correct');
    element.removeAttribute('data-type', 'false');
}

// This section refers to the Results Area 

 // This function closes the question Area and shows the results Area.

function showResultsArea() {
    let questionArea = document.getElementById('questionArea');
    questionArea.style.maxHeight = '0';
    questionArea.style.minHeight = '0';
    questionArea.style.transitionDelay = '0s';
    let resultsWindow = document.getElementById('resultsDiv');
    resultsWindow.style.maxHeight ='1000px';
    resultsWindow.style.transitionDelay = '2s';
}

 // This function closes the Results Area by setting the maxHeight to 0px.

function closeQuiz() {
    let resultsWindow = document.getElementById('resultsDiv');
    resultsWindow.style.maxHeight ='0';
    resultsWindow.style.transitionDelay = '0s';
}

/**
 * This function closes the Results Area and re-opens the 
 * StartQuiz Area for the user to repeat the quiz. Reset's the user score.
  */
function tryAgain() {
    closeQuiz();
    showBeginWindow();
    let seeResultsBtn = document.getElementById('seeResultsID');
    seeResultsBtn.style.display = 'none';
    seeResultsBtn.classList.remove('seeResultsBtn');
    seeResultsBtn.classList.remove('question-btn');

    // User score is set back to 0
    score = 0;
}

let tryAgainBtn = document.getElementById('tryAgainBtn');
tryAgainBtn.addEventListener('click', tryAgain);

let exitQuizBtn = document.getElementById('exitQuizBtn');
exitQuizBtn.addEventListener('click', closeQuiz);

/**
 * This function allows the user to exit the quiz Area by clicking 
 * the X at the top-right corner of the quiz area.
  */
function exitQuiz() {
    let questionWindow = document.getElementById('questionArea');
    questionArea.style.maxHeight = '0';
    questionArea.style.minHeight = '0';
    questionArea.style.transitionDelay = '0s';
}

let crossBtn = document.getElementById('quizExit');
crossBtn.addEventListener('click', exitQuiz);





// These are the quiz questions
const licenceQuestions = [
    {
        question: 'Your passenger wants to discuss something with you during the journey. what should you do?',
        answer: [
            {text: "Concentrate on the discussion", correct: false},
            {text: "Concentrate on the driving", correct: true},
            {text: "Concentrate on both", correct: false},
        ]
    },
    {
        question: 'What could cause the vehicle to leave the road?',
        answer: [
            {text: "Tiredness", correct: false},
            {text: "Distraction", correct: false},
            {text: "Inattention", correct: true},
        ]
    },
    {
        question: 'What can inpair fitness to drive?',
        answer: [
            {text: "Fatigue", correct: false},
            {text: "Certain medicines", correct: true},
            {text: "Alcohol and other intoxicants", correct: false},
        ]        
    },
    {
        question: 'What should you do if you start feeling tired while driving?',
        answer: [
            {text: "Take a break straightaway", correct: false},
            {text: "Get out of the car and move around", correct: true},
            {text: "Listen to stimulating music", correct: false},
        ]
    },
    {
        question: 'What emotions can influence driving behaviour?',
        answer: [
            {text: "Sorrow and worry", correct: false},
            {text: "Happiness and exuberance", correct: false},
            {text: "Anger and rage", correct: true},
        ]
    },
    {
        question: 'What can be the effect of even small quantities of alcohol?',
        answer: [
            {text: "Reckless driving", correct: true},
            {text: "Delayed reactions", correct: false},
            {text: "Impairment of hearing and vision", correct: false},
        ]
    },
    {
        question: 'Are drivers during their probation period allowed to be under the influence of alcohol when driving?',
        answer: [
            {text: "yes, up to 30 miligrams", correct: false},
            {text: "No, definitely not", correct: true},
            {text: "yes, upto 50 miligram", correct: false},
        ]
    },
    {
        question: 'When will offences carrying two points be deleted from the Central Register of Road Traffic Offenders?',
        answer: [
            {text: "-5 years", correct: true},
            {text: "-2 years", correct: false},
            {text: "-3 years", correct: false},
        ]
    },
    {
        question: 'You want to carry a child in your car, when must you use a child seat for this purpose?',
        answer: [
            {text: "If the child is older than 12 years", correct: false},
            {text: "If the child is taller than 150 cm", correct: false},
            {text: "If the child is younger than 12 years", correct: true},
        ]
    },
    {
        question: 'What is the maximum length of time you are allowed to stop at a bus stop provided you do not present an obstruction to buses?',
        answer: [
            {text: "3 minutes", correct: true},
            {text: "8 minutes", correct: false},
            {text: "5 minutes", correct: false},
        ]
    }




]
