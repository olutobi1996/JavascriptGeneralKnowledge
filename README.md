<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./assets/css/style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <title>General Knowledge Quiz</title>
      <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon">
   </head>
   <body>
      <header>
         <a id=leaderboard-link>Check Your Highscores! <i class="fas fa-hand-point-left fa-lg"></i>
         </i></a> 
         <time>Time: <span id="time"></span></time>
      </header>
      <main>
         <div id=start-box class="box">
            <h2 id=title>Welcome To General Knowledge Quiz</h2>
            <p>Answer the following quiz questions best you can!
               <br><br>Incorrect answers will effect your time, be careful!!
            </p>
            <button id=start-button class="button">Start Quiz</button>
         </div>

         <div hidden id=question-box class="card">

            <h2 id=question-text></h2>

            <div id=quiz-options>
                <button id=option0 class="button option-button"></button>
                <button id=option1 class="button option-button"></button>
                <button id=option2 class="button option-button"></button>
                <button id=option3 class="button option-button"></button>
            </div>
      </main>
      <!-- Script JS file -->
      <script src="assets/js/script.js"></script>
   </body>
</html>