# Führerschein Quiz (English)
![Führerschein quiz image](/assets/images/responsive-img.webp)

Welcome to the Führerschein Quiz English version.
## Introduction 
The Führerschein English quiz is designed to provide the English version of the driving licence theory exam questions in Germany. Dedicated to migrants in Germany who wishes to optain a drivers licence and prefers to write the exam in English language.

The live link can be found here -[Führerschein (English)](https://adimserious.github.io/drivers-licence-quiz/)

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
  - Understand the main purpose of the site and know how many questions it provides.
  - Easily navigate throughout the site.
  - Find the Sign Up form and fill it out.
  - Find out if they can visit as a guest to get the look and feel of the app.

- ### Returning User
As a frequent user:
- I want to check if there are any new questions and answers added to get updated with. 
- I want to be familiar with most questions, understand them and know the right answers.
- I want very few or no fails with the questions.

### Colors
- The main color scheme of the quiz application is burlywood, black and white.

## Features
### Existing Features 
#### The Heading
![The header](/assets/images/header.webp)
- The heading text is the first thing the users will see on the landing page which describes the purpose of the website at first sight.
- The heading is present throughout the entire quiz window; namely: The landing page, start quiz area and result area.
- The heading is responsive across all devices.
- The welcome text describes further the main purpose of the Quiz, located underneath the header. it welcomes the user and give then a brief overview of the quiz they are about to partake on.
- The welcome text is also present throughout the entire quiz window; namely: The landing page, start quiz and exit area.
- The welcome text is responsive on all devices. the background color provides a very good contrast against the body of the website hereby optimising user accessibility.

### The Prompt text
![The prompt text image](/assets/images/welcom-prompt.png)
- Below the header is a welcome text and brief description of the next step which is  a create username.

### Username Form
![Username form image](/assets/images/username-form.png)
- The sign up form allows the user to sign up to the website in order to access the quiz .
- The sign up has a create username, email, password and confirm password field.
- The form has a continue as guest botton which helps users to have the look and feel of the quiz before sigining up.
- I checked the form to make sure users cant submit without meeting the form criteria:

### The Form Validation 
![tht form validation prompt](/assets/images/form-validation.webp)
- The validator makes sure the username field is not empty.

### Start Quiz Area
![Start quiz image](/assets/images/start-quiz.webp)
- The start quiz area displays after 2 seconds of signing in.
- The Start quiz area gives way for the question area once clicked.

### The Question Area
 ![Qestion image](/assets/images/qstn-area.webp)
- The question area displays the first question out of eleven.
- the question area has three answers to choose from.
- The choosen answers shows a green color.
- Once an answer is choosen, it moves to the next question.

### Question Increment
 ![question increment](/assets/images/qustn2of11.webp)
 - The question increases as the user proceed accordingly to describe the number of question the user has attempted.

### The Answer and Next Question Area
![Answers image](/assets/images/answers.webp)
- The answer area will show red for the wrong answers upon choosing an answer.
- The correct answer will show a green color.
- There is also a hover effect which changes the burder and text color to burlywood when hovered before clicking.
- The next question button is disabled but appears once the user chose an answer.

### the X Icon
![The x icon image](/assets/images/x-icon.webp)
- The x icon allow users to leave the question area at any desired time.


### Result Area
![Result image](/assets/images/result.webp)
- The result area displays the test 'you scored' together with the number of score the user got out of 11.
- the result area also has a try again button which allow users to try the quiz again and shuffles the questions each try.
- The result area contains an exit quiz button that takes the users out from the question area and back to the welcome page.

### Try again and Exit button
![Try again and exit image](/assets/images/try-again-exit.webp)
- The try again button allows user to try the quiz again.
- The exit bitton takes the users out from the quiz area.

### Exit Message
![Exit Message](/assets/images/exit-msg.webp)
- The exit message is seen when user click the exit button and x-icon

### The Footer
![The footer image](/assets/images/footer.webp)
- The footer contents two social network icons of LinkedIn and GitHub. 

## Wireframes
- Pen and paper in a notebook: simple and effective.

## Features Left to Implement
- Additional questions might be available in the question section.
- Updated questions with images.
- In the future, there could be more languages to choose from.

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
- I encountered a bug on laptops and larger screens with the "Try again and Exit" buttons while using media query to make sure its responsive on all device.
- I formally used a div element for the "try again and exit" quiz area but changing the div to button elements fixed the bug on larger screens.

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
part of my inspiration came from [this youTube video](https://www.youtube.com/watch?v=LTPGyaEyTI4&t=1195s) by Great stack in creating a sign up form  and
from [Web Dev Simplified](https://www.youtube.com/c/webdevsimplified) very helpful in understanding how to structure a quiz.

# Content
https://www.theorie24.de/- i used this app to gather the questions and answers for this quiz.

## Media
[Pexels](https://www.pexels.com/) free stock photos, royalty free images. [Pixabay](https://pixabay.com/) free stock photos, royalty free images. Canva to Resize images.
[favicon](https://favicon.io/favicon-converter/#google_vignette)to display the driving licence icon on the browser.

# Acknowledgements
My mentor Mitko Bachvarov provided me with the resource i used to learn the css overlay and gave me a description of what is expected for this project.

Slack is a great community. very helpful and offers much encouragement as well as information. 

