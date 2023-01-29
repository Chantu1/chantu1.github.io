const INPUTNAMEBOX = document.getElementById("inputGroup-sizing-default");
const HINTBOX = document.getElementById("hint-box");
const SUBMITBTN = document.getElementById("submitguess");
const GUESSLABEL = document.getElementById("guessCount");
const PLAYAGAINBTN = document.getElementById("playagain");
const INPUTFIELD = document.getElementById("number");

let inputvalue = document.getElementById("number").value;
let inputs = document.querySelectorAll("input");
let randomNum = Math.floor(Math.random() * 100);
let guesses = 0;

// If user reloads page
inputs.forEach((input) => (input.value = ""));
SUBMITBTN.value = "Guess";

SUBMITBTN.addEventListener("click", function() {
    inputvalue = document.getElementById("number").value;
    if (inputvalue == "")
    {
        HINTBOX.innerHTML = "You must input a value.";
        HINTBOX.style.backgroundColor = "white";
    }
    else if (parseInt(inputvalue) > 100)
    {
        HINTBOX.innerHTML = "Must not be greater than 100.";
        HINTBOX.style.backgroundColor = "white";
    }
    else if (parseInt(inputvalue) < 0)
    {
        HINTBOX.innerHTML = "Must not be lower than 0.";
        HINTBOX.style.backgroundColor = "white";
    }
    else if (Number.isInteger(parseInt(inputvalue)) == false)
    {
        HINTBOX.innerHTML = "Must be a number.";
        HINTBOX.style.backgroundColor = "white";
    }
    else
    {
        guesses += 1;
        GUESSLABEL.innerHTML = ("Guesses: " + guesses)
        checkNum(inputvalue);
        inputs.forEach((input) => (input.value = ""));
        SUBMITBTN.value = "Guess";
    }
});

function checkNum(num) {
    if (num == randomNum)
    {
        HINTBOX.innerHTML = "You are correct!";
        PLAYAGAINBTN.hidden = false;
        HINTBOX.style.backgroundColor = "rgb(255, 236, 91)";
        SUBMITBTN.hidden = true;
        INPUTFIELD.hidden = true;
        INPUTNAMEBOX.hidden = true;
        PLAYAGAINBTN.addEventListener("click", function() {
            resetGame();
        });
    }
    else if (num > randomNum)
    {
        HINTBOX.innerHTML = "Lower";
        HINTBOX.style.backgroundColor = "rgba(255, 114, 114, 0.69)";
    }
    else if (num < randomNum)
    {
        HINTBOX.innerHTML = "Higher";
        HINTBOX.style.backgroundColor = "#00ff8f";
    }
}

function resetGame() {
    guesses = 0;
    randomNum = Math.floor(Math.random() * 100);
    GUESSLABEL.innerHTML = "";
    HINTBOX.innerHTML = "";
    PLAYAGAINBTN.hidden = true;
    HINTBOX.style.backgroundColor = "white";
    SUBMITBTN.hidden = false;
    INPUTFIELD.hidden = false;
    INPUTNAMEBOX.hidden = false;
}