console.log("Rock, Paper, Scissors Game");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You Lose!!");
        computerScore++;
    }
}

while (true) {
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        continue;
    }
    let computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    playRound(userChoice, computerChoice);
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
    let continueGame = prompt("Do you want to play again? (yes/no):").toLowerCase();
    if (continueGame !== 'yes') {
        console.log("Game Over!!");
        break;
    }
}
