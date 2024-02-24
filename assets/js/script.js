// This code switches between sign-in and sign-up 
let signin = document.getElementById('signinBtn');
let signup = document.getElementById('signupBtn');
let title = document.getElementById('title');
let usernameArea = document.getElementById('username');
let passwordArea = document.getElementById('password');
let passwordConfirmedArea = document.getElementById('confirm-password');

/**
 * This function will change the title to 'sign-in and hide the 'confirm password' area
 * also highlights the sign-in button. Placeholder text will change aswell.
 */
function displaySignIn(){
    title.innerHTML = 'Sign-In';
    signin.classList.add('active');
    signup.classList.remove('active');
    passwordConfirmedArea.style.maxHeight = '0';
    passwordConfirmedArea.style.paddingTop = '0';
    passwordConfirmedArea.style.paddingBottom = '0';
    passwordArea.setAttribute('placeholder', 'Enter Password');
    usernameArea.setAttribute('placeholder', 'Enter Username');
}

/**
 * This function will show the 'confirm passowrd' field, change the title to 'sign-up'
 * and highlight the sign-up button. Placeholder text changes as well.
 */
function displaySignUp(){
    title.innerHTML = 'Sign-Up';
    signup.classList.add('active');
    signin.classList.remove('active');
    passwordConfirmedArea.style.maxHeight = '80px';
    passwordConfirmedArea.style.paddingBottom = '10px';
    passwordConfirmedArea.style.paddingTop = '10px';
    passwordArea.setAttribute('placeholder', 'Create Password');
    usernameArea.setAttribute('placeholder', 'Create Username');
}

signin.addEventListener('click', displaySignIn);

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

// This function shows the Begin Quiz Window
 
function showBeginWindow(){
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = '1000px';
    begin.style.transitionDelay = '1s';
}

/**
 * This function makes the Begin Quiz button change border and font
 * color to yellow
 */

function beginHover(event){
    beginBtn.style.borderColor = 'yelow';
    beginBtn.style.color = 'yellow';
    beginBtn.style.cursor = 'pointer';
}

/**
 * This function makes the Begin Quiz Button and border 
 * color change from yeloow to white
 */
function beginOut(event){
    beginBtn.style.borderColor = 'white';
    beginBtn.style.color = 'white';
}

let beginButton = document.getElementById('beginBtn');
beginButton.addEventListener('mouseover', beginHover);
beginButton.addEventListener('mouseout', beginOut);

/**
 * This function hides the Begin Quiz Window by setting the max-height
 * to 0px, as well also removes the transition delay
 */
function hideBeginWindow(){
    let begin = document.getElementById('beginDiv');
    begin.style.maxHeight = '0';
    begin.style.transitionDelay = '0s';
}

/**
 * This function reveals the quiz window by setting the max-height
 * property to 1000px
 */
function showQuestionWindow() {
    let questionWindow = document.getElementById('questionWindow');
    let windowWidth = window.innerWidth;
    questionWindow.style.maxHeight = '1000px';
    questionWindow.style.transitionDelay = '0s';
}

