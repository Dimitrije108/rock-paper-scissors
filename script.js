console.log("Hello World");

const computerSelection = getComputerChoice();

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice());
