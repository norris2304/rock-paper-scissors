let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

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

function getPlayerChoice() {
    let playerInput = prompt("Type rock, paper, or scissors.");
    let result = playerInput.toLowerCase();
    return result
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return `You lost! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection}!`
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return `You lost! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection}!`
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lost! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection}!`
    } else {
        return `You won! ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)} beats ${computerSelection}!`
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
        if (result.includes("won")) {
            playerScore++;
            console.log(`Computer: ${computerScore} | Player: ${playerScore} | Draws: ${drawScore}`)
        } else if (result.includes("lost")) {
            computerScore++;
            console.log(`Computer: ${computerScore} | Player: ${playerScore} | Draws: ${drawScore}`);
        } else
            drawScore++;
    }
    console.log(`Final results - Player: ${playerScore} Computer: ${computerScore} Draws:${drawScore}`)
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("The game was a draw");
    }
}

game();
