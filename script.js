const computerSelection = getComputerChoice();
const input = prompt("Type in your choice: Rock, Paper or Scissors");
const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();


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


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return alert("Draw! You've both selected Rock");
    }   if (playerSelection === "Paper" && computerSelection === "Rock") {
            return alert("You Win! Paper beats Rock");
        }       if (playerSelection === "Scissors" && computerSelection === "Rock") {
                        return alert("You Lose! Rock beats Scissors");
                }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                        return alert("You Win! Scissors beat Paper");
                }   else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                        return alert("Draw! You've both selected Scissors");
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
                return alert("Draw! You've both selected Paper");
        }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                return alert("You Lose! Scissors beat Paper");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return alert("You Lose! Paper beats Rock");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return alert("You Win! Rock beats Scissors");
    } else {
        return alert("Type in Rock, Paper or Scissors");
    }
    }

    
    

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));