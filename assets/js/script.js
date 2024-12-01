/* These are the const Quiz Questions
 will will remain the same throughout,
 This section of code was also adapted from a
 quiz video online i have referenced in my README.MD
*/
const questions = [
  {
      question: "what football team won the world cup in 1966?",
      answers: [
          {text: "England", correct: true},
          {text: "Germany", correct: false},
          {text: "Brazil", correct: false},
          {text: "France", correct: false},
      ],
  },
  {
      question: "How many coloured rings in the Olympic Flag?",
      answers: [
          {text: "2", correct: false},
          {text: "6", correct: false},
          {text: "4", correct: false},
          {text: "5", correct: true},
      ],
  },
  {
      question: "Who directed the film pulp fiction?",
      answers: [
          {text: "Daniel Day Lewis", correct: false},
          {text: "Quentin Taratino", correct: true},
          {text: "Steven Speilberg", correct: false},
          {text: "Martin Scorses", correct: false},
      ],
  },
  {
      question:
          "In the film Lion King Mufasa dies from being trampled on by a pack of?",
      answers: [
          {text: "sheep", correct: false},
          {text: "hyenas", correct: false},
          {text: "wildebeests", correct: true},
          {text: "bears", correct: false},
      ],
  },
  {
      question: "Who wrote the novel of mice and men?",
      answers: [
          {text: "Virginia Woolf", correct: false},
          {text: "Elaine Anderson", correct: false},
          {text: "William Faulkner", correct: false},
          {text: "John Steinbeck", correct: true},
      ],
  },
  {
      question: "What is the name of the fourth book in the Harry Potter Series?",
      answers: [
          {text: "Harry Potter and the Goblet of Fire", correct: true},
          {text: "Harry Potter and the Deathly Hallows", correct: false},
          {text: "Harry Potter and Philosophers Stone", correct: false},
          {text: "Harry Potter and Half Blood Prince", correct: false},
      ],
  },
  {
      question: "What year did world war II end?",
      answers: [
          {text: "1950", correct: false},
          {text: "1945", correct: true},
          {text: "1960", correct: false},
          {text: "1940", correct: false},
      ],
  },
  {
      question: "Where did sushi originate?",
      answers: [
          {text: "China", correct: false},
          {text: "Fiji", correct: false},
          {text: "South Korea", correct: false},
          {text: "Japan", correct: true},
      ],
  },
];

//const variables
const startCard = document.querySelector("#start-box");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");
const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");
const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");

  //global variables
  let intervalID;
  let time;
  let currentQuestion;

//hide box attribue
function hideBox() {
    startCard.setAttribute("hidden", true);
    questionCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
    leaderboardCard.setAttribute("hidden", true);
  }
  
  //hide result div
  function hideResultText() {
    resultDiv.style.display = "none";
  }



document.querySelector("#start-button").addEventListener("click", startQuiz);

 //hide any boxes and show question
function startQuiz() {
    hideBox();
    questionCard.removeAttribute("hidden");
  
    //current question starts at 0
    currentQuestion = 0;
    displayQuestion();
  
    //total time depending on question
    time = questions.length * 10;
  
    //countdown every 1000ms to update time and display on page
    intervalID = setInterval(countdown, 1000);
  
    //display time as soon as page is clicked
    displayTime();
  }
  
  //countdown by 1 and quiz will end if time runs out
  function countdown() {
    time--;
    displayTime();
    if (time < 1) {
      endQuiz();
    }
  }

  //display time on page
const timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display the question & answer options for the current question
function displayQuestion() {
  let question = questions[currentQuestion];
  let options = question.options;

  let h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.questionText;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}

//event listner for when answer button clicked
document.querySelector("#quiz-options").addEventListener("click", checkAnswer);

//option function compare option to current question
function optionIsCorrect(optionButton) {
  return optionButton.textContent === questions[currentQuestion].answer;
}

//if answer is incorrect,  time is added
function checkAnswer(eventObject) {
  let optionButton = eventObject.target;
  resultDiv.style.display = "block";
  if (optionIsCorrect(optionButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      //if time is less than 10, display time as 0 and end quiz
      time = 0;
      displayTime();
      endQuiz();
    }
  }
}

  //increment current question by 1
  currentQuestion++;
  //if we have not run out of questions then display next question, else end quiz
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }

//display scorecard & hide other divs
const score = document.querySelector("#score");

//at end of quiz, clear the timer, hide sore card
function endQuiz() {
  clearInterval(intervalID);
  hideCards();
  scoreCard.removeAttribute("hidden");
  score.textContent = time;
}

// user initials and score when submit button is clicked
submitButton.addEventListener("click", storeScore);

function storeScore(event) {
  //prevent default behaviour of form submission
  event.preventDefault();

  //check for input
  if (!inputElement.value) {
    alert("Please enter your initials before pressing submit!");
    return;
  }

  //store score and initials in object
  let leaderboardItem = {
    initials: inputElement.value,
    score: time,
  };

  updateStoredLeaderboard(leaderboardItem);

  //hide the question card, display the leaderboardcard
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}