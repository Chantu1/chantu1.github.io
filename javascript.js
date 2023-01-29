
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
const TROPHY = document.getElementById("winnerImage");

ROCK.addEventListener("click", function() {
    TROPHY.hidden = true;
    enemySelection.hidden = false;
    playerSelect = "rock";
    playRound(playerSelect)
    playerScoring.innerHTML = "Your Score " + playerScore + "/5";
    enemyScoring.innerHTML = "Enemy Score " + enemyScore + "/5";
    roundNum.innerHTML = "Round " + currentRound;
    roundWinner.hidden = false;
    handleEnemy(computerSelection)
    handleRestart()
});
PAPER.addEventListener("click", function() {
    TROPHY.hidden = true;
    enemySelection.hidden = false;
    playerSelect = "paper";
    playRound(playerSelect)
    playerScoring.innerHTML = "Your Score " + playerScore + "/5";
    enemyScoring.innerHTML = "Enemy Score " + enemyScore + "/5";
    roundNum.innerHTML = "Round " + currentRound;
    roundWinner.hidden = false;
    handleEnemy(computerSelection)
    handleRestart()
});
SCISSORS.addEventListener("click", function() {
    TROPHY.hidden = true;
    enemySelection.hidden = false;
    playerSelect = "scissors";
    playRound(playerSelect)
    playerScoring.innerHTML = "Your Score " + playerScore + "/5";
    enemyScoring.innerHTML = "Enemy Score " + enemyScore + "/5";
    roundNum.innerHTML = "Round " + currentRound;
    roundWinner.hidden = false;
    handleEnemy(computerSelection)
    handleRestart()
});

RESETBUTTON.addEventListener("click", function() {
    playerScore = 0;
    enemyScore = 0;
    currentRound = 0;
    playerScoring.innerHTML = "Your Score " + playerScore + "/5";
    enemyScoring.innerHTML = "Enemy Score " + enemyScore + "/5";
    roundNum.innerHTML = "Round " + currentRound;
    roundWinner.hidden = true;
    enemySelection.hidden = true;
    enemySelection.innerHTML = "Enemy: ";
    roundWinner.innerHTML = "Round Winner: ";
    TROPHY.hidden = true;
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

function handleEnemy(enemy) {
    if (computerSelection == "rock")
    {
        enemySelection.innerHTML = "Enemy: " + "&#9994";
    }
    else if (computerSelection == "paper")
    {
        enemySelection.innerHTML = "Enemy: " + "&#9995";
    }
    else if (computerSelection == "scissors")
    {
        enemySelection.innerHTML = "Enemy: " + "&#9996";
    }
}

function handleWinner(winner) {
    roundWinner.innerHTML = "Round Winner: " + winner;
}

function handleRestart() {
    if (playerScore == 5)
    {
        roundWinner.innerHTML = "YOU WIN!";
        enemySelection.hidden = true;
        TROPHY.hidden = false;
    }
    if (enemyScore == 5)
    {
        roundWinner.innerHTML = "You lose.";
        enemySelection.hidden = true;
    }
    if (playerScore == 5 || enemyScore == 5)
    {
        playerScore = 0;
        enemyScore = 0;
        currentRound = 0;
    }
}