function getComputerChoice() {
    num = floor( ((Math.random() * 3) + 1) ); //rand int from 1 to 3
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