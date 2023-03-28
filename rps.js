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

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const paperBtn = document.getElementById('paperBtn');
const btn = document.querySelectorAll('button');
const restartBtn = document.getElementById('restartBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')

btn.forEach((button) => {
    button.addEventListener('mouseenter', () => {button.style.backgroundColor = "goldenrod";});
    button.addEventListener('mouseleave', () => {button.style.backgroundColor = ""});
    button.addEventListener('mousedown', () => {button.style.transform = "scale(1.1)"});
    button.addEventListener('mouseup', () => {button.style.transform = "none"});
});

rockBtn.addEventListener('click', () => handleClick('rock'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))
paperBtn.addEventListener('click', () => handleClick('paper'))
restartBtn.addEventListener('click', restartGame)

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function handleClick(playerSelection) {
    if (isGameOver()) {
        openGameModal();
        return
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (isGameOver()) {
        openEndgameModal();
        setFinalMessage();
    }
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

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost 😔')
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Time to choose your weapon!'
    scoreMessage.textContent = 'First to 5 points wins the game!'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '?'
    computerSign.textContent = '?'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}