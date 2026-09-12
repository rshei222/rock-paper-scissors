//global scope

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function getComputerChoice() {
    let num = Math.floor( ((Math.random() * 3) + 1) ); //rand int from 1 to 3
    if (num == 1) {
        return "rock";
    }
    else if (num == 2) {
        return "scissors";
    }
    else if (num == 3) {
        return "paper";
    }
}

function getHumanChoice () {
    choice = prompt("rock, paper, or scissors: ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" & computerChoice == "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");
    }
    else if (humanChoice == "scissors" & computerChoice == "rock") {
        computerScore++;
        console.log("You lose. Rock beats scissors");
    }
    else if (humanChoice == "paper" & computerChoice == "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");
    }
    else if (humanChoice == "rock" & computerChoice == "paper") {
        computerScore++;
        console.log("You lose. Paper beats rock");
    }
    else if (humanChoice == "scissors" & computerChoice == "paper") {
        humanScore++;
        console.log("You win! Scissors beats paper");
    }
    else if (humanChoice == "paper" & computerChoice == "scissors") {
        computerScore++;
        console.log("You lose. Scissors beats paper");
    }
    else if (humanChoice == computerChoice) {
        console.log("Tie. You both selected the same choice");
    }
}

