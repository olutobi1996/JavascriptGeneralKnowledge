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