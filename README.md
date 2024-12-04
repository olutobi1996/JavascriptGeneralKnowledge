# Quiz Game
 Quiz game is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also general knowledge questions. Quiz Game is a fully responsive JavaScript Quiz Game that will allow users to challenge their general knowledge. It does this by asking the user of the website 6 random general knowledge quiz questions.

![image](https://github.com/user-attachments/assets/f7b2ffef-c7ae-4ea3-8922-d15f8903a1eb)



### Existing Features

The Quiz Game Homepage and Heading

Featured in the middle of the page, the Quiz Game logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game with a little message saying "Every incorrect answers will effect your score/time by ten seconds! GOOD LUCK!". I Have created this in my index.html using a div element and within div element i have used ids that can be styled and called in css & javascript. H2 and P elements have been used for the text.

![image](https://github.com/user-attachments/assets/f7b2ffef-c7ae-4ea3-8922-d15f8903a1eb)


- __The Question Section__

-This section will allow the user to play the quiz game. The user will be able to easily see the questions for the quiz game.
-The user will be able to select the question answer of there choice below the question, i have used a multiple choice layout format. Also as an addition to make the quiz more exciting i have used a javascript time function, everytime the user answers the question wrong there time will be effected by 10s. I Have also created the question section in my index.html using a div element and within div element i have used ids that can be styled and called in css & javascript.

![image](https://github.com/user-attachments/assets/5e3a4846-9f39-499a-89d0-bbb0cc1f512b)


- __The Score Area__

When the quiz has finished by either time running out or questions are finished, you will be automatically shown a message saying "Well done". Beneth this message you will be shown a message saying "your final score is...(whatever your final score is"). Then beneth this message you will be given a message saying "Enter your initials" with a text box to enter in your initals, also if you do not enter your initials you will be given a pop up message aswell saying "Please enter your initials before pressing submit!". 

![image](https://github.com/user-attachments/assets/f0fd243e-c74a-43d9-9212-1cdab08195b7)

![image](https://github.com/user-attachments/assets/0334cae6-d700-43d9-8934-72cbeb79a234)

 __Quiz Timer__

-This section the user will see a timer count down from 60seconds and will have this amount of time to finish the quiz otherwise an alert will appear.

![image](https://github.com/user-attachments/assets/e2cbf601-fc50-460b-b2eb-9397cbf32874)


 __Highscores & Restart Quiz__
- When the user has ran out of time a pop up message saying "Sorry You Have Ran Out Of Time" will appear on the quiz at the top and there time has ran out.
![image](https://github.com/user-attachments/assets/4d71a83b-c506-4407-8abd-665fd8c3f36e)
![image](https://github.com/user-attachments/assets/ca121b0a-add6-4965-b163-20977a057a87)

__Footer__
- I have added my personal details with my name and email at the bottom of the quiz for anybody who would like to speak to me personally about the game and is interested in my work.
![image](https://github.com/user-attachments/assets/9144131a-0316-478b-9324-e5edd51b2081)

### Manual Testing Steps
The final general knowledge quiz has made a few adjustments since the first deployment, here i explaina manual testing walkthrough to the quiz.

When the user joins the website they will be be shown a block displaying the placeholder text "enter first name" & "enter last name" and a "welcome button" one the user has entered there first name and last name and press the welcome button they will be taken to the general knowledge quiz.

Once at the general knowledge quiz they will be shown the question and 4 answers (multiple choice question), below this there will be a "restart Quiz" button they can use at any point, incase they click the wrong answer or just wanted to start again.There will also be  with there score displaying at the bottom out of 8 and the timer going simultaneously. Below will also show the creator of the quiz and they will have a link to my email also.

Now at the game playing stage the user will be able to choose 1 out of the 4 answers they think is right, as they hover over the question with there mouse the curser pointer will be shown and there question that they hover over will change colour, this helps the user know they are clicking the right answer they choose. After they have clicked there answer the question they choose will be either red or green showing the user if they have the right answer or not straight away.

During the quiz the user will have 60s to complete the quiz, if they fail to complete this in time the timer will run out and a pop up message will apear saying "Your Time Is Up, Sorry!". Once this appears the quiz will freeze and they will no be able to continue, once they have clicked the ok button on the pop up message the quiz will return to the start and restart quiz function will have been initiated.

If the user gets to the end of the quiz in time there will be another block message that gives the user a "congratulations you finished the quiz" message and there score out of 8. They will will also have the option to continue again to replay the quiz with the restart quiz button.

This is my manual testing steps guide for users who would like to enjoy the quiz i created, thank you i hope you enjoy!

### Features Left to Implement

- Another feature idea for the future of the website is to do add more questions if the user gets them all correct.

## Testing 

- The website has been tested numerous times to make sure the user has an easy and enjoyable experience, along the project i opened the website in the browser and used devtools to check everything was running smoothly. I Also used console.log to make sure certain elements of the quiz were being logged and working with the computer.

## Questions & Answers
- Starting with the questions and answers, i had a slight issue at the start with displaying the answers as during the start i had both the answer buttons i created in html and also there answers i had created in javascript, after putting the answers into the correct function i was able to over come this.
- 
## Submit Button
- I then also had issues with my submit button, i was able to display the submit button in the browser but it wouldnt work, I overcame this problem by instead of a submit button i used an event listner when the user clicked there answer along with display/block so that the user wasnt able to change there answer once chosen.

### Updated Quiz Game
- This new version of my quiz game has been updated newer version for the users, with a header element at the top of the page and below the header i have included a quiz game icon, below that we have the questions of the quiz with new questions. Below the questions we have an updated score with different color format and also a timer of 60seconds for the user to complete the quiz, with a message that pops up and alerts the user when time has ran out. To finish off at the bottom of the page there is my personal details within the footer element for any user who would like to get in contact and see my other work.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator]https://validator.w3.org/nu/?doc=https%3A%2F%2Folutobi1996.github.io%2FGeneral-Knowledge-Quiz%2F
- CSS
  - No errors were found when passing through the official [(Jigsaw)]https://jigsaw.w3.org/css-validator/validator?uri=+https%3A%2F%2Folutobi1996.github.io%2FGeneral-Knowledge-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

- JavaScript
No errors were found when passing through the official Jshint validator
The following metrics were returned:
There are 7 functions in this file.
Function with the largest signature take 1 arguments, while the median is 0.
Largest function has 9 statements in it, while the median is 5.

The most complex function has a cyclomatic complexity value of 2 while the median is 2.

### Unfixed Bugs
There were no unfixed bugs in the final code but for days i had "favicon error" in devtools as i havent added a favicon for this project as there were no icons necessary. Also in JSHint there were version errors found, if the software was not up to date the javascript on that particular machine may not work.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the main branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://olutobi1996.github.io/General-Knowledge-Quiz/


## Credits 
The general knowledge quiz was partly inspired by code institue project module walk through 2, this project i done as a practice walk through helped me get more understanding on how javascript worked. As this is a completely new language for me it helped me go through back through the javascript essentials module and get more understanding on how to write functions, call functions and correct syntax of writing variables and different elements for the quiz game. As you can see in my script.js code i have referenced what functions were inspired by the code institute love maths walk through project. 

### Content 

- The layout style was inspired by(https://www.youtube.com/watch?v=PBcqGxrr9g8) & (https://codeinstitue.com/)
- The text styling was used from https://fonts.google.com/
- General Knowledge Quiz Questions were made up by me

### Media

- Both of the photos used on the page are used from https://www.pexels.com/
- This site is a free image website