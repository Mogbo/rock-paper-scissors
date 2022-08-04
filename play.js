let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    hands =  ["rock", "paper", "scissors"];

    const sel = hands[Math.floor(Math.random() * hands.length)];
    console.log(`Computer played ${sel}`);
    return sel;
}

function playRound(playerSelection, computerSelection) {
    const resultDiv = document.querySelector(`.result`);
    const finalResultDiv = document.querySelector(`.final-result`);
    finalResultDiv.textContent = "";
    computerScoreSpan = document.querySelector(`.computer-score`);
    humanScoreSpan = document.querySelector(`.human-score`);

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        resultDiv.textContent = "Computer wins";
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    else {
        resultDiv.textContent = "Human wins";
        playerScore++;
        humanScoreSpan.textContent = playerScore;
    }

    if (computerScore >= 5) {
        finalResultDiv.textContent = "Game over. Computer wins!"
        playerScore = 0; computerScore = 0;
        computerScoreSpan.textContent = computerScore;
        humanScoreSpan.textContent = playerScore;
    }

    else if (playerScore >= 5) {
        finalResultDiv.textContent = "Game over. Human wins!"
        playerScore = 0; computerScore = 0;
        computerScoreSpan.textContent = computerScore;
        humanScoreSpan.textContent = playerScore;
    }
}

function playUIRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    playRound(playerSelection,computerSelection);

    // alert("Clicked");
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// for (let i = 0; i < 5; i++) {
//     const computerSelection = computerPlay();
//     let playerSelection = prompt("Choose rock, paper or scissors");
//     playRound(playerSelection, computerSelection);
//  }

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener("click", playUIRound))



// console.log(buttons);

