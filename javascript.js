
let computerChoice = getComputerChoice();
let userChoice = prompt("What do you choose");

function getComputerChoice() {
    const CHOICES = ["Rock", "Paper", "Scissors"];
    let random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return random;
}

if (userChoice === "Rock" && computerChoice === "Rock") {
    alert("ITS A TIE");
    computerChoice = getComputerChoice;
} else if (userChoice === "Rock" && computerChoice === "Paper") {
    alert("COMPUTER WINS")
    computerChoice = getComputerChoice;
} else if (userChoice === "Rock" && computerChoice === "Scissors") {
    alert("YOU WIN")
    computerChoice = getComputerChoice;
}

function rockPaperScissors(playerSelection, computerSelection) {
    
}