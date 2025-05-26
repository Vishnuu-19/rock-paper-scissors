console.log("Rock, Paper, Scissors Game");

getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[randomIndex]);
}

let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
// console.log(getComputerChoice());
let humanScore = 0;
let computerScore = 0;

const playround = (userChoice, getComputerChoice ) => {
    if(userChoice === getComputerChoice){
        console.log("Its a tie!");
    }
    if((userChoice==='rock' && getComputerChoice === 'scissors') ||
       (userChoice==='paper' && getComputerChoice === 'rock') ||
       (userChoice==='scissors' && getComputerChoice === 'paper')) {
        console.log("You win!");
        humanScore++;
    }else{
        console.log("You Lose!!");
        computerScore++;
    }
}
// while(true){
    playround(userChoice, getComputerChoice());
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);

    // console.log("continue? (yes/no)");
    // if(prompt().toLowerCase() != 'yes'){
    //     console.log("GameOver!!");
    //     break;
    // }
// }
