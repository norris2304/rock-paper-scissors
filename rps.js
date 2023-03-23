let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1)
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    } else if 
        ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        roundWinner = 'player'
    } else if 
        ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const paperBtn = document.getElementById('paperBtn')

rockBtn.addEventListener('click', () => handleClick('rock'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))
paperBtn.addEventListener('click', () => handleClick('paper'))

rockBtn.addEventListener("mouseenter", () => {rockBtn.style.backgroundColor = "goldenrod"});
rockBtn.addEventListener("mouseleave", () => {rockBtn.style.backgroundColor = ""});

scissorsBtn.addEventListener("mouseenter", () => {scissorsBtn.style.backgroundColor = "goldenrod"});
scissorsBtn.addEventListener("mouseleave", () => {scissorsBtn.style.backgroundColor = ""});

paperBtn.addEventListener("mouseenter", () => {paperBtn.style.backgroundColor = "goldenrod"});
paperBtn.addEventListener("mouseleave", () => {paperBtn.style.backgroundColor = ""});

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection){
        case 'rock':
            playerSign.textContent = '🪨'
            break
        case 'paper':
            playerSign.textContent = '📄'
            break
        case 'scissors':
            playerSign.textContent = '✂️'
            break
    }

    switch (computerSelection){
        case 'rock':
            computerSign.textContent = '🪨'
            break
        case 'paper':
            computerSign.textContent = '📄'
            break
        case 'scissors':
            computerSign.textContent = '✂️'
            break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = "You won!"
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = "You lost!"
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}.`
        return;
    } else if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}.`
        return;
    } else {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}.`
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }