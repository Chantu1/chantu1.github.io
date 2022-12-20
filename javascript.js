
function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    let random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}
let playerScore = 0;
let enemyScore = 0;
let playerSelection;
let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose?").toLowerCase();
    if (playerSelection === computerSelection) {
        alert("It was a tie");
    }
    else if (playerSelection == "rock"){
        if(computerSelection == "paper"){
            alert("Computer Won")
            enemyScore++;
        }else{
            alert("You Won")
            playerScore++;
        }
    }
    else if (playerSelection == "scissors"){
        if(computerSelection == "rock"){
            alert("Computer Won")
            enemyScore++;
        }else{
            alert("You Won")
            playerScore++;
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            alert("Computer Won")
            enemyScore++;
        }else{
            alert("You Won")
            playerScore++;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        computerSelection = getComputerChoice();
     }
}