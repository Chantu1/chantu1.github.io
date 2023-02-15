let WORDINFO = document.getElementById("word-info");
const GUESSBTN = document.getElementById("guessbtn");
const INPUTBOX = document.getElementById("word-input");
const WININFO = document.getElementById("win-info");
const PLAYBTN = document.getElementById("playagain");
const IMAGE = document.getElementById("hangman-img");

let hangmanWord = randomWord();
let guessedLetter;

let returnedWord;
let wordLength;

let isWon;
let wrongCounter = 0;

let guessedLetters;

setWord();
checkImage();
// Event Listener for when guess button is clicked
function getInputValue()
{
    guessedLetter = document.getElementById("word-input").value;
    guessedLetter = guessedLetter.toUpperCase();
    if (checkValidity(guessedLetter) == false)
    {
        WININFO.innerHTML = "Make sure you are entering 1 letter."
    }
    else if (checkAlpha(guessedLetter) == false)
    {
        WININFO.innerHTML = "Make sure you are entering only letters."
    }
    else
    {
        if (guessedLetters.includes(guessedLetter))
        {
            WININFO.innerHTML = "You already guessed the letter " + '"' + guessedLetter + '"';
        }
        else
        {
            guessedLetters.push(guessedLetter);
            WININFO.innerHTML = ""
            checkValidity(guessedLetter);
            checkLetter(guessedLetter);
            checkWord(returnedWord);
            changeImage();
        }
    }

    // Clear the input field
    document.getElementById("word-input").value = "";
}

function checkLetter(letter)
{
    for (let i = 0; i < wordLength; i++)
    {
        if (letter == hangmanWord[i])
        {
            returnedWord[i] = letter;
        }
    }
    if (hangmanWord.includes(letter) == false)
    {
        wrongCounter += 1;
    }
    WORDINFO.innerHTML = returnedWord.join("");
}

function setWord()
{
    wordLength = hangmanWord.length;
    guessedLetters = [9 + hangmanWord.length];

    // This will be returned to the plater
    returnedWord = [wordLength];
    // Set all indexes of returnedWord to "_"
    for (let i = 0; i < wordLength; i++)
    {
        returnedWord[i] = "_";
    }
    WORDINFO.innerHTML = returnedWord.join("");
}

function checkWord(word)
{
    for (let i = 0; i < wordLength; i++)
    {
        if (word.includes("_") != true)
        {
            WININFO.innerHTML = "You win!"
            isWon = true;
            // Set input/info boxes hidden or unhidden
            PLAYBTN.hidden = false;
            GUESSBTN.hidden = true;
            INPUTBOX.hidden = true;
            break;
        }
        else if (wrongCounter > 9)
        {
            WININFO.innerHTML = "You ran out of guesses."
            isWon = true;
            PLAYBTN.hidden = false;
            GUESSBTN.hidden = true;
            INPUTBOX.hidden = true;
            break;
        }
        else
        {
            isWon = false;
        }
    }
}

function randomWord()
{
    const WORDS = ["WORD", "HELLO", "DUDE", "HTML", "JAVASCRIPT", "JANGO", "PHONE", "MOUSE", "YOUTUBE", "JAVA", "SPOTIFY", "WORLD", "HANGMAN"];
    let random = WORDS[Math.floor(Math.random() * WORDS.length)];
    return random;
}

function handleReset()
{
    if (isWon == true)
    {
        checkImage();
        hangmanWord = randomWord();
        clearArray(guessedLetters);
        setWord();
        WININFO.innerHTML = ""
        PLAYBTN.hidden = true;
        GUESSBTN.hidden = false;
        INPUTBOX.hidden = false;
        wrongCounter = 0;
    }
}

function checkValidity(input)
{
    let length = input.length;
    if (length > 1)
    {
        return false;
    }
    else if (length <= 0)
    {
        return false;
    }
    return true;
}

function checkAlpha(input)
{
    const exp = /^[A-Za-z]+$/;
    let result = exp.test(input);
    if (result)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function changeImage()
{
    checkImage();
    IMAGE.src = '../images/hangman/hangman' + wrongCounter + '.png';
    if (wrongCounter > 9)
    {
        IMAGE.src = '../images/hangman/hangman' + 0 + '.png';
    }
    else if (isWon == true)
    {
        IMAGE.src = '../images/hangman/hangman' + 0 + '.png';
    }
}

function clearArray(array)
{
    while (array.length > 0)
    {
        array.pop();
    }
}

function checkImage()
{
    if (wrongCounter == 0 || wrongCounter > 9 || isWon == true)
    {
    IMAGE.style.visibility = 'hidden';
    }
    else
    {
    IMAGE.style.visibility = 'visible';
    }
}