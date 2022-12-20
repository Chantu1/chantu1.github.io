
function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    let random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}
let playerScore = 0;
let enemyScore = 0;
let playerSelection;
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("What do you choose?").toLowerCase();
    if (playerSelection === computerSelection) {
        alert("It was a tie");
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            alert("Computer Won")
            enemyScore++;
        } else {
            alert("You Won")
            playerScore++;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            alert("Computer Won")
            enemyScore++;
        } else {
            alert("You Won")
            playerScore++;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            alert("Computer Won")
            enemyScore++;
        } else {
            alert("You Won")
            playerScore++;
        }
    }
}

function game() {
    let i = 0;
    do {
        i++;
        if (i === 5) continue;
        playRound();
    } while (playerScore < 5 && enemyScore < 5);
     if (playerScore > enemyScore) {
        alert("You win! You have " + playerScore + " points! " + "Enemy has " + enemyScore + " points.");
     } else {
        alert("You lost. You have " + playerScore + " points. " + "Enemy has " + enemyScore + " points.");
     }
     playerScore = 0;
     enemyScore = 0;
}