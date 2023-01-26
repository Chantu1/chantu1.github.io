
function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    let random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}

//computerSelect = getComputerChoice();

let playerScore = 0;
let enemyScore = 0;
let currentRound = 0;
let playerSelect;
//computerSelect = getComputerChoice;

const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const PLAY = document.getElementById("play");
const roundWinner = document.getElementById("roundwinner");
const playerScoring = document.getElementById("playerScore");
const enemyScoring = document.getElementById("enemyScore");
const roundNum = document.getElementById("currentRound");
const enemySelection = document.getElementById("enemySelection");
const RESETBUTTON = document.getElementById("resetGame");

ROCK.addEventListener("click", function() {
    playerSelect = "rock";
    playRound(playerSelect)
    playerScoring.innerHTML = "Your Score " + playerScore;
    enemyScoring.innerHTML = "Enemy Score " + enemyScore;
    roundNum.innerHTML = "Round " + currentRound;
    enemySelection.innerHTML = "Enemy: " + computerSelection.toUpperCase();
    handleRestart()
});
PAPER.addEventListener("click", function() {
    playerSelect = "paper";
    playRound(playerSelect)
    playerScoring.innerHTML = "Your Score " + playerScore;
    enemyScoring.innerHTML = "Enemy Score " + enemyScore;
    roundNum.innerHTML = "Round " + currentRound;
    enemySelection.innerHTML = "Enemy: " + computerSelection.toUpperCase();
    handleRestart()
});
SCISSORS.addEventListener("click", function() {
    playerSelect = "scissors";
    playRound(playerSelect)
    playerScoring.innerHTML = "Your Score " + playerScore;
    enemyScoring.innerHTML = "Enemy Score " + enemyScore;
    roundNum.innerHTML = "Round " + currentRound;
    enemySelection.innerHTML = "Enemy: " + computerSelection.toUpperCase();
    handleRestart()
});

RESETBUTTON.addEventListener("click", function() {
    playerScore = 0;
    enemyScore = 0;
    currentRound = 0;
    playerScoring.innerHTML = "Your Score " + playerScore;
    enemyScoring.innerHTML = "Enemy Score " + enemyScore;
    roundNum.innerHTML = "Round " + currentRound;
    enemySelection.innerHTML = "Enemy: ";
    roundWinner.innerHTML = "Round Winner: ";
});



function playRound(playerSelection) {
    //playerSelection = prompt("What do you choose?").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        //alert("It was a tie");
        handleWinner("TIE");
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            //alert("Computer Won")
            handleWinner("ENEMY");
            enemyScore++;
        } else {
            //alert("You Won")
            handleWinner("YOU");
            playerScore++;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            //alert("Computer Won")
            handleWinner("ENEMY");
            enemyScore++;
        } else {
            //alert("You Won")
            handleWinner("YOU");
            playerScore++;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            //alert("Computer Won")
            handleWinner("ENEMY");
            enemyScore++;
        } else {
            //alert("You Won")
            handleWinner("YOU");
            playerScore++;
        }
    }
    currentRound++;
}

function handleWinner(winner) {
    roundWinner.innerHTML = "Round Winner: " + winner;
}

function handleRestart() {
    if (playerScore == 5)
    {
        alert("You win!")
    }
    if (enemyScore == 5)
    {
        alert("Enemy wins.")
    }
    if (playerScore == 5 || enemyScore == 5)
    {
        playerScore = 0;
        enemyScore = 0;
        currentRound = 0;
    }
}