const questions = [
  {
    questionText: "what football team won the world cup in 1966?:",
    options: ["1. Brazil", "2. England", "3. France", "4. Italy"],
    answer: "2. alerts",
  },
  {
    questionText: "How many coloured rings in the Olympic Flag ______.",
    options: [
      "1. Two",
      "2. Three",
      "3. Four",
      "4.Five",
    ],
    answer: "4. Five",
  },
  {
    questionText:
      "In the film Lion King Mufasa dies from being trampled on by a pack of?",
    options: ["1. sheep", "2. hyenas", "3. wildebeests", "4. bears"],
    answer: "3. quotes",
  },
  {
    questionText:
      "Who directed the film pulp fiction?:",
    options: [
      "1. Daniel Day Lewis",
      "2. Steven Speilberg",
      "3. Steven Speilberg",
      "4. Quentin Taratino",
    ],
    answer: "4. five",
  },
  {
    questionText:
      "What is the name of the fourth book in the Harry Potter Series?",
    options: ["1. Harry Potter and the Goblet of Fire", "2. Harry Potter and the Deathly Hallows", "3. Harry Potter and Philosophers Stone", "4. Harry Potter and Half Blood Prince"],
    answer: "1. break",
  },
  {
    questionText:
      "Where did sushi originate?",
    options: ["1. China", "2. America", "3. Italy", "4. Japan"],
    answer: "4. break",
  },
  {
    questionText:
      "What year did world war II end?",
    options: ["1. 1945", "2. 1912", "3. 1935", "4. 1942"],
    answer: "1. break",
  },
];

//const variables
const startCard = document.querySelector("#start-box");
const questionCard = document.querySelector("#question-box");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");
const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");
const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");
const clearButton = document.querySelector("#clear-button");
const backButton = document.querySelector("#back-button");


  //global variables
  var intervalID;
  var time;
  var currentQuestion;

//hide box attribue
function hideBoxs() {
    startBox.setAttribute("hidden", true);
    questionBox.setAttribute("hidden", true);
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

//updates the leaderboard stored, in localally 
function updateStoredLeaderboard(leaderboardItem) {
    let leaderboardArray = getLeaderboard();
    //append new leaderboard item to leaderboard array
    leaderboardArray.push(leaderboardItem);
    localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
  }

//get "leaderboardArray" (if exists) from local storage & parse it into a javascript obj using JSON.parse
function getLeaderboard() {
  let storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    let leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}

//display leaderboard on leaderboard card
function renderLeaderboard() {
  let sortedLeaderboardArray = sortLeaderboard();
  const highscoreList = document.querySelector("#highscore-list");
  highscoreList.innerHTML = "";
  for (let i = 0; i < sortedLeaderboardArray.length; i++) {
    let leaderboardEntry = sortedLeaderboardArray[i];
    let newListItem = document.createElement("li");
    newListItem.textContent =
      leaderboardEntry.initials + " - " + leaderboardEntry.score;
    highscoreList.append(newListItem);
  }
}

//sort leaderboard array from highest to lowest
function sortLeaderboard() {
  let leaderboardArray = getLeaderboard();
  if (!leaderboardArray) {
    return;
  }

  leaderboardArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return leaderboardArray;
}

clearButton.addEventListener("click", clearHighscores);
//clear high score
function clearHighscores() {
  localStorage.clear();
  renderLeaderboard();
}

backButton.addEventListener("click", returnToStart);

//show start card
function returnToStart() {
  hideCards();
  startCard.removeAttribute("hidden");
}

//use link to view highscores from any where on the page
const leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");
  //stop countdown
  clearInterval(intervalID);
  //assign undefined to time and display that, so that time does not appear on page
  time = undefined;
  displayTime();
  //display leaderboard
  renderLeaderboard();
}

