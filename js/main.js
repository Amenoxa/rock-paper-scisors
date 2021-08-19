let userScore = 0;
let npcScore = 0;
const userScoreSpan = document.getElementById("userScore");
const npcScoreSpan = document.getElementById("npcScore");
const scoreBoardSection = document.getElementById("scoreboard");
const resultSection = document.getElementById("result");
const loveDiv = document.getElementById("love");
const deathDiv = document.getElementById("death");
const robotsDiv = document.getElementById("robots");


function getNpcChoice() {
    const choices = ['love', 'death', 'robots'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function win(userChoice, npcChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    npcScoreSpan.innerHTML = npcScore;
    resultSection.innerHTML = userChoice + " beats " + npcChoice + ". You won!!!";
}
function lose(userChoice, npcChoice) {
    npcScore++;
    userScoreSpan.innerHTML = userScore;
    npcScoreSpan.innerHTML = npcScore;
    resultSection.innerHTML = userChoice + " loses to " + npcChoice + ". You lost!!!";
}
function draw(userChoice, npcChoice) {
    userScoreSpan.innerHTML = userScore;
    npcScoreSpan.innerHTML = npcScore;
    resultSection.innerHTML = "It's a draw. Try again!";
}



function ldr(userChoice, userScore, npcScore) {
    const npcChoice = getNpcChoice();
    switch (userChoice + npcChoice) {
    case "loverobots":
    case "robotsdeath":
    case "deathlove":
        win(userChoice, npcChoice);
        break;
    case "robotslove":
    case "deathrobots":
    case "lovedeath":
        lose(userChoice, npcChoice);
        break;
    case "robotsrobots":
    case "deathdeath":
    case "lovelove":
        draw(userChoice, npcChoice);
        break;
    }
}




  function refreshPage(){
    window.location.reload();
  }



  


function main() {
    loveDiv.addEventListener('click', function() {
        ldr('love');
    })
    deathDiv.addEventListener('click', function() {
        ldr('death');
    })
    robotsDiv.addEventListener('click', function() {
        ldr('robots');
    })   
}

main();
