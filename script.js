const computerSelection = getComputerChoice;
const playerSelection = getPlayerChoice;


function getPlayerChoice() {
    let input = prompt("Type in your choice: Rock, Paper or Scissors, to play a 5 round game vs computer");
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Draw! You've both selected Rock";
    }   if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }       if (playerSelection === "Scissors" && computerSelection === "Rock") {
                    return "You Lose! Rock beats Scissors";
                }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                    return "You Win! Scissors beat Paper";
                }   else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                    return "Draw! You've both selected Scissors";
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return "Draw! You've both selected Paper";
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "You Lose! Scissors beat Paper";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else {
        return "Type in Rock, Paper or Scissors";
    }
    }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (roundResult.startsWith("You Win!") === true) {
            playerScore += 1;
            alert(roundResult);
        } else if (roundResult.startsWith("You Lose!") === true) {
            computerScore += 1;
            alert(roundResult);
        } else {
            alert(roundResult);
            continue;
        }

        console.log(playerScore);
        console.log(computerScore);
        console.log(roundResult);
    }

    if (playerScore > computerScore) {
        return alert (`You Win! ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        return alert(`You Lose! ${playerScore} to ${computerScore}`);
    } else {
        return alert(`Draw! ${playerScore} to ${computerScore}`);
    }
}

    
    


console.log(game());