
//const playerSelection = getPlayerChoice;
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const documentBody = document.querySelector('body');

const roundResult = document.createElement('div');
roundResult.style.margin = '20px 0px 20px 0px';
documentBody.appendChild(roundResult);

const displayPlayerScore = document.createElement('div');
documentBody.appendChild(displayPlayerScore);
let playerScore = 0;
const displayComputerScore = document.createElement('div');
documentBody.appendChild(displayComputerScore);
let computerScore = 0;

rockBtn.addEventListener('click', function() {
    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerSelection);
    runningScore();
    displayPlayerScore.textContent = 'Player score: ' + playerScore;
    displayComputerScore.textContent = 'Computer score: ' + computerScore;
    console.log(playerScore);
    console.log(computerScore);
});

paperBtn.addEventListener('click', function() {
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerSelection);
    runningScore();
    displayPlayerScore.textContent = 'Player score: ' + playerScore;
    displayComputerScore.textContent = 'Computer score: ' + computerScore;
    console.log(playerScore);
    console.log(computerScore);
});

scissorsBtn.addEventListener('click', function() {
    const playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    roundResult.textContent = playRound(playerSelection, computerSelection);
    runningScore();
    displayPlayerScore.textContent = 'Player score: ' + playerScore;
    displayComputerScore.textContent = 'Computer score: ' + computerScore;
    console.log(playerScore);
    console.log(computerScore);
});

function runningScore(){
    if (roundResult.textContent.startsWith("You Win!") === true) {
        playerScore += 1;
    } else if (roundResult.textContent.startsWith("You Lose!") === true) {
        computerScore += 1;
    };

    if (playerScore === 5) {
        const finalResult = document.createElement('div');
        finalResult.textContent = `You won the game ${playerScore} to ${computerScore}. Refresh the page to play again.`;
        finalResult.style.margin = '20px 0px 20px 0px';
        documentBody.appendChild(finalResult);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore === 5) {
        const finalResult = document.createElement('div');
        finalResult.textContent = `You lost the game ${playerScore} to ${computerScore}. Refresh the page to play again.`;
        finalResult.style.margin = '20px 0px 20px 0px';
        documentBody.appendChild(finalResult);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    };
};


/*
function getPlayerChoice() {
    let input = prompt("Type in your choice: Rock, Paper or Scissors, to play a 5 round game vs computer");
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
*/

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


/*
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
*/
    
    


//console.log(game());