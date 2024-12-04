# Quiz Game
 Quiz game is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also general knowledge questions. Quiz Game is a fully responsive JavaScript Quiz Game that will allow users to challenge their general knowledge. It does this by asking the user of the website 6 random general knowledge quiz questions.

![image](https://github.com/user-attachments/assets/f7b2ffef-c7ae-4ea3-8922-d15f8903a1eb)



### Existing Features

The Quiz Game Homepage and Heading

Featured in the middle of the page, the Quiz Game logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game with a little message saying "Every incorrect answers will effect your score/time by ten seconds! GOOD LUCK!". I Have created this in my index.html using a div element and within div element i have used ids that can be styled and called in css & javascript. H2 and P elements have been used for the text.

![image](https://github.com/user-attachments/assets/f7b2ffef-c7ae-4ea3-8922-d15f8903a1eb)


- __The Question & Answer Section__

-This section will allow the user to play the quiz game. The user will be able to easily see the questions for the quiz game.
-The user will be able to select the question answer of there choice below the question, i have used a multiple choice layout format. Also as an addition to make the quiz more exciting i have used a javascript time function, everytime the user answers the question wrong there time will be effected by 10s. I Have also created the question section in my index.html using a div element and within div element i have used ids that can be styled and called in css & javascript. The answers have also been created using option buttons in my index.html and check answer (event object) function has been created using an if statment to check the users answer is correct 

![image](https://github.com/user-attachments/assets/5e3a4846-9f39-499a-89d0-bbb0cc1f512b)


- __The Score Area__

When the quiz has finished by either time running out or questions are finished, you will be automatically shown a message saying "Well done". Beneth this message you will be shown a message saying "your final score is...(whatever your final score is"). Then beneth this message you will be given a message saying "Enter your initials" with a text box to enter in your initals, also if you do not enter your initials you will be given a pop up message aswell saying "Please enter your initials before pressing submit!". I have used index.html to create my div element with ids in it & one of these ids are hidden id that will be called in my javascript. Within the div element i have created another h2 and p element for the text that the user sees. I have then styled these in my css. I have then created an end quiz function in my js and have called the hidden attribute and hide cards attribue to clear any visable cards at the end of the quiz and show the the final score. I also used a if loop for the submit initals text inside a storescore function and also within this prevent default to prevent behaviour of form submission.

![image](https://github.com/user-attachments/assets/f0fd243e-c74a-43d9-9212-1cdab08195b7)

![image](https://github.com/user-attachments/assets/0334cae6-d700-43d9-8934-72cbeb79a234)

 __Quiz Timer__

-This section the user will see a timer count down from 60seconds in the top right of the page, this is the amount of time the user will have to finish unless they get there questions wrong which means there time will be penelized. I have created the time function in my javascript using an if loop.

![image](https://github.com/user-attachments/assets/e2cbf601-fc50-460b-b2eb-9397cbf32874)


 __Highscores & Restart Quiz__
-I have created a leaderboard function where the score will be stored in locallly in a JSON file storage, this leaderboard function will allow other users to use the quiz and there scores to be stored. I have also used a get Leaderboard function to get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object using JSON.parse. This will use an if loop to check if the leaderboard is equal to null. I Also have a sort leaderboard and render leaderboard fucntion which will use document query selector to find highscores and display it while also using an if statement to sore the order of leaderboard.
![image](https://github.com/user-attachments/assets/4d71a83b-c506-4407-8abd-665fd8c3f36e)
![image](https://github.com/user-attachments/assets/ca121b0a-add6-4965-b163-20977a057a87)

__Footer__
- I have added my personal details with my name and email at the bottom of the quiz for anybody who would like to speak to me personally about the game and is interested in my work, this has been created in my index.html using mailto href.
![image](https://github.com/user-attachments/assets/9144131a-0316-478b-9324-e5edd51b2081)

### Manual Testing Steps
| Testcase                          | Expected Result                                                       | Test Result |
|-----------------------------------|-----------------------------------------------------------------------|-------------|
| Open the Quiz                     | The Quiz loads with the correct template and data                     | ✅ PASS          |
| Start Quiz                        | Start Quiz button is successful, quiz appears for user                | ✅ PASS          |
| User clicks question              | Correct answer is chose and incorrect answer time will be penlized    | ✅ PASS          |
| Timer                             | Timer runs down from 60seconds and if answer is incorrect, time effect| ✅ PASS          |
| Enter user initials               | Pop up message will appear if user doesnt enter details               | ✅ PASS          |
| View Highscores                   | View Highscores link in top left of page takes you to leaderboard     | ✅ PASS          |
|Go Back                            | Go back button takes you back to start of quiz                        | ✅ PASS          |
|Clear Highscores                   | Clear high scores will clear away all high scores on the page         | ✅ PASS          |
| Email Link                        | Click the link and it takes you to mail options                        | ✅ PASS          |
|                              
| **Testing**                       |                                                                       |             |
| HTML                              | HTML Validator Testing Passed                                         | ✅ PASS          |
| CSS                               | CSS Validator Testing Passed                                          | ✅ PASS          |
| Javascript                        | Javascript Validator Testing Passed                                   | ✅ PASS          |


### Features Left to Implement

- Another feature idea for the future of the website is to do add more questions if the user gets them all correct and everytime the user gets them correct the time will go up.

## Testing 

- The website has been tested numerous times to make sure the user has an easy and enjoyable experience, along the project i opened the website in the browser and used devtools to check everything was running smoothly. I Also used console.log to make sure certain elements of the quiz were being logged and working with the computer.

## Questions & Answers
- Starting with the questions and answers, i had a slight issue at the start with displaying the answers as during the start i had both the answer buttons i created in html and also there answers i had created in javascript, after putting the answers into the correct function i was able to over come this.
- 
## Clear Score Function
- I then also had issues with my clear score button, i was able to display the clear score button in the browser but it wouldnt work, I overcame this problem by fixing the clear score function in my javascript.

### Start Quiz Function
- I also had some issues with start quiz function it wasnt doing anything and one point. I found out i hadnt been calling it in my correct function and used the advent listner so when the user would click it, there would be interactivity.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator]
- CSS
  - No errors were found when passing through the official [(Jigsaw)]

- JavaScript
No errors were found when passing through the official Jshint validator
The following metrics were returned:
There are 7 functions in this file.
Function with the largest signature take 1 arguments, while the median is 0.
Largest function has 9 statements in it, while the median is 5.

The most complex function has a cyclomatic complexity value of 2 while the median is 2.

### Unfixed Bugs
There were no unfixed bugs in the final code. But in JSHint there were version errors found, if the software was not up to date the javascript on that particular machine may not work.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the main branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://8000-olutobi1996-javascriptg-r0heca27x2q.ws-eu117.gitpod.io/


## Credits 
The general knowledge quiz was partly inspired by code institue project module walk through 2, this project i done as a practice walk through helped me get more understanding on how javascript worked. As this is a completely new language for me it helped me go through back through the javascript essentials module and get more understanding on how to write functions, call functions and correct syntax of writing variables and different elements for the quiz game.

### Content 
- General Knowledge Quiz Questions were made up by me

### Media 
https://mailtrap.io/blog/mailto-links-explained/ - i used this for my footer element for people to email me.