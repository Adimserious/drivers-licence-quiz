# Drivers Licence Quiz
![Drivers Licence Quiz image](/assets/images/responsive-img.webp)

Welcome to the Drivers Licence Quiz.
## Introduction 
The Drivers Licence Quiz is designed to provide the English version of the driving licence theory exam questions in Germany. Dedicated to migrants in Germany who wishes to optain a drivers licence and prefers to write the exam in English language.

The live link can be found here -[Drivers Licence Quiz](https://adimserious.github.io/drivers-licence-quiz/)

# **Table of Contents**
- [**Project and Site Owner Goals**](#project-and-site-owner-goals) 
- [**Target Audience**](#target-audience)
## User Experience 
- [**User Stories**](#user-stories)
- [**Colors**](#colors)
## Features
- [**Existing Features**](#existing-features)
- [**Features Left to Implement**](#features-left-to-implement)
- [**Technologies Used**](#technologies-used)
- [**Frameworks, Libraries & Programs Used**](#frameworks-libraries--programs-used)
## Testing
- [**Validation Results**](#validation-results)
- [**Manual Testing**](#manual-testing)
- [**Lighthouse Report**](#lighthouse-report)
## Deployment and local development
- [**GitHub Pages**](#github-pages)
- [**Forking the GitHub Repository**](#forking-the-github-repository)
- [**Local Clone**](#local-clone)
- [**Credits**](#credits)
- [**Acknowledgements**](#acknowledgements)

## Project and Site Owner Goals
 Because the spoken language in Germany is deutsch, many migrants find it difficult to achieve their goal of obtaining a drivers licence on time due to the language barrier. Our goal is to help make the dream of learning and writing the theory exam in English language come through at the time of need for people who want it.

 ## Target Audience 

- Migrants in Germany whose first language is English.
- People who want new Language challenge training 
- People who prefers to write the driving licence exam in English language.

## User Stories
- ### First time user
  As a first-time user, i would like to:
  - Find the log in form and fill it out.
  - Understand the main purpose of the site and know how many questions it provides.
  - Easily navigate throughout the site.
  
  
- ### Returning User
As a frequent user:
- I want to check if there are any new questions and answers added to get updated with. 
- I want to be familiar with most questions, understand them and know the right answers.
- I want very few or no fails with the questions.

### Colors
- The main colors scheme of the quiz application is #2E7248, and #80D5A1.
![color combination](/assets/images/colors.webp)

## Features
### Existing Features 
#### The Heading
![The header](/assets/images/header.webp)

- The heading text is the first thing the users will see on the landing page which describes the purpose of the website at first sight.

- The heading is present throughout the entire quiz window; namely: The landing page, start quiz area and result area.
- The heading is responsive across all devices.

### The Welcome Message and Prompt text
![The prompt text image](/assets/images/welcom-prompt.png)
- Below the header is a welcome text and brief description of the next step which is to create a username.

- The welcome text describes further the main purpose of the Quiz, located underneath the header. it welcomes the user and give then a brief overview of the quiz they are about to partake on.

- The welcome text is responsive on all devices. the background color provides a very good contrast against the body of the website hereby optimising user accessibility.

### Username Form
![Username form image](/assets/images/username-form.png)
- The log in form allows the user to log in to the website in order to access the quiz.
- I checked the form to make sure users cant submit empty form.

### The Form Validation 
![tht form validation prompt](/assets/images/form-validation.webp)
- The validator makes sure the username field is not empty.

### Start Quiz Area
![Start quiz image](/assets/images/start-quiz.webp)
- The start quiz area displays once the form is submitted.
- The Start quiz area shows some rules to the quiz.

### Rules of the quiz
![Rules of the quiz](/assets/images/rules.webp)
- The rules show three rules about the game.

### The Question Area
 ![Qestion image](/assets/images/qstn-area.webp)
- The question area displays the first question out of eleven.
- the question area has three answers to choose from.
- The choosen answers shows a green color.
- Once an answer is choosen, it moves to the next question.

### Question Increment
 ![question increment](/assets/images/qustn2of11.webp)
 - The question increases as the user proceed accordingly to describe the number of question the user has attempted.

### Timer
![Timer](/assets/images/timer.webp)
- The timer is set to 15 seconds for each question
- If user doesn't select an answer before the 15 seconds elapse, it moves to the next question and the score wont be counted.

### The Answer Area
![Answers image](/assets/images/answers.webp)
- There is also a hover effect which changes the burder to green when hovered before clicking.

### the X Icon
![The x icon image](/assets/images/x-icon.webp)
- The x icon allow users to leave the question area at any desired time.


### Result Area
![Result image](/assets/images/result-area.webp)
- The result area displays the test 'You scored' together with the number of score the user got out of 11.
- the result area also has a restart quiz button which allow users to try the quiz again and shuffles the questions each try.
- The result area contains an exit quiz button that takes the users out from the result area and back to the start quiz page with the message, You have exited the quiz.

### Restart and Exit button
![Restart again and exit image](/assets/images/try-again-exit.webp)
- Restart button allows user to try the quiz again.
- The exit bitton takes the users out from the quiz area.

### Exit Message
![Exit Message](/assets/images/exit-msg.webp)
- The exit message is seen when user click the exit button and x-icon

### Score and score messages

- Score less than 50%
![Score less than 50%](/assets/images/score-50%25.webp)

- Score 50% plus
![Score 50% plus](/assets/images/score50+.webp)

- Score 80% plus
![Score 80% plus](/assets/images/score80%25+.webp)

- Score all correct
![Score all correct](/assets/images/score-all.webp)

- The Score message is displayed based on the users score.

### The Footer
![The footer image](/assets/images/footer.webp)
- The footer contents two social network icons of LinkedIn and GitHub. 

## Wireframes
- Pen and paper in a notebook: simple and effective.

## Features Left to Implement
- Additional questions might be available in the question section.
- Updated questions with images.
- In the future, there could be more languages to choose from.
- I intend to add username to userscore in the future

## Technologies Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs Used
### [Gitpod](https://www.gitpod.io/)
- To write the code.
### [Git](https://git-scm.com/)
- for vesion control.
### [Github](https://github.com/)
- Deployment of the website and storing the files online.
### [Google Fonts](https://fonts.google.com/)
- Import main font the website.
### [Am I Responsive](https://ui.dev/amiresponsive)
- Mockup picture for the README file.

## Testing
### Manual Testing
- Manually testing each section while building the quiz for appearance and responsiveness using Chrome developer tools and Microsoft Edge
- Family and friends helped to test it by taking part in the quiz and gave me no issues as feedback.
- I tested it on mobile, tablet and laptop to make sure it works well across all devices.

### User Input/Form Validation
| Feature            | Tested? | Action        | Expected Outcome | Pass/Fail | 
|--------------------|---------|---------------|------------------|-----------|
| Log in Form  | Yes | Submit form | user is redirected to the start quiz area| pass |
| Start quiz button  | Yes | hides the start quiz | user is redirected to the quiz question area| pass |
| Answer buttons  | Yes | click | the next question and answers displays | pass |
| Score area  | Yes | displays | the score is displayed after the last quiz| pass |
| Restart button  | Yes | hides score area | user is redirected to the quiz area| pass |
| Exit quiz  | Yes | hides the score area | user is redirected to the start quiz area and a message is displayed to confirm exit| pass |


## **Post Development Testing**
- [The W3C Markup Validator](https://validator.w3.org/) and 
- [W3C CSS Validator](https://validator.w3.org) services were used to validate every page of the project to ensure there were no errors.

- aswell as [JavaScript Validator](https://jshint.com/)

### Validation results
**HTML**
- Returned no error nor warnings when checking the HTML document.
 ![HTML Validator](/assets/images/html-testing.webp)

**CSS**
- Returned no error however i got 2 warnings when checking CSS document which was the Google import link so i cant do much about it and the same color for background and border which was intended. 
 ![CSS Validator](/assets/images/css-validator.webp)

 ![CSS Warning](/assets/images/css-warning.webp)

**JavaScript**
 ![JavaScript Validator](/assets/images/jshint.webp)

**Lighthouse**
 ![Lighthouse Report](/assets/images/light-house.webp)

### Bugs Encountered
- I encountered a bug on laptops and larger screens with the start quiz area  while using media query to make sure its responsive on all device.

## Deployment and local development
### GitHub Pages 
- used to deploy live version of the website.

1. Log in to GitHub and locate GitHub Repository [drivers-licence-quiz](https://adimserious.github.io/drivers-licence-quiz/)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
Scroll back to locate the now-published site link in the "GitHub Pages" section.

## Forking the GitHub Repository
By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to GitHub and locate GitHub Repository [drivers-licence-quiz](https://adimserious.github.io/drivers-licence-quiz/)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your GitHub account.

## Local Clone
1. Log in to GitHub and locate GitHub Repository [drivers-licence-quiz](https://adimserious.github.io/drivers-licence-quiz/)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
Open Git Bash
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type git clone and then paste The URL copied in the step 3.
6. Press Enter and your local clone will be created.

# Credits
- The content lessens in JavaScript with code institute played a major role in this project.
- part of my inspiration came from [this youTube video](https://www.youtube.com/watch?v=LTPGyaEyTI4&t=1195s) by Great stack in creating a sign up form  and
from [Web Dev Simplified](https://www.youtube.com/c/webdevsimplified) very helpful in understanding how to structure a quiz.
- i learnt about Destructuring assignment from this website [website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

# Content
https://www.theorie24.de/- i used this app to gather the questions and answers for this quiz.

## Media
[Pexels](https://www.pexels.com/) free stock photos, royalty free images. [Pixabay](https://pixabay.com/) free stock photos, royalty free images. Canva to Resize images.
[favicon](https://favicon.io/favicon-converter/#google_vignette)to display the driving licence icon on the browser.

# Acknowledgements
My mentor Mitko Bachvarov provided me with the resource i used to learn the css overlay and gave me a description of what is expected for this project.

Slack is a great community. very helpful and offers much encouragement as well as information. 

