//Create an array of all possible moves
const moves = ["Rock", "Paper", "Scissors"];

//Create a function to determine the computer move
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

//Create a function that plays a single round
function playRound(playerSelection, computerSelection) {
    //Player to capitalize
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    //If player move is Invalid, invalid move
    if (!moves.includes(playerSelection)) {
        return "Invalid move";
    }
    //If both plays have the same move, its a tie
    if (computerSelection === playerSelection) {
        return "It's a tie!"
    }
    //If player = rock and CPU = scissors, you win
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    //If player = paper and CPU = rock, you win
        (playerSelection === "Paper" && computerSelection === "Rock") ||
    //If player = scissors and CPU = paper, you win
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    //Else, you lose
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

