function computerPlay() {
    hands =  ["rock", "paper", "scissors"];

    const sel = hands[Math.floor(Math.random() * hands.length)];
    console.log(`Computer played ${sel}`);
    return sel;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("Computer wins");
    }

    else {
        console.log("Human wins");
    }
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
console.log(buttons)