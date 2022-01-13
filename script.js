//Create an array of all possible moves
const moves = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;

//Create a function to determine the computer move
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

//Create a function that plays a single round
function playRound(playerSelection, computerSelection) {
    //If cancelled, Exit
    if (playerSelection === null) {
        throw new Error("Cancelled by the user. Exiting.")
    }
    //If falsy, invalid move
    if (!(playerSelection)) {
        return "Invalid move. No points given."
    }
    //Player to capitalize
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    //If player move is Invalid, invalid move
    if (!moves.includes(playerSelection)) {
        return "Invalid move. No points given.";
    }
    //If both plays have the same move, its a tie
    if (computerSelection === playerSelection) {
        return "It's a tie! No points given."
    }
    //If player = rock and CPU = scissors, you win
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    //If player = paper and CPU = rock, you win
        (playerSelection === "Paper" && computerSelection === "Rock") ||
    //If player = scissors and CPU = paper, you win
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerPoints++;
            return `You Win this round! ${playerSelection} beats ${computerSelection}.`;
    //Else, you lose
    } else {
        computerPoints++;
        return `You Lose this round! ${computerSelection} beats ${playerSelection}.`;
    }
}
//Create a function for a 5 round game. Invalid moves and ties doesn't count
function game() {
    while (playerPoints < 3 && computerPoints < 3) {
        console.log(playRound(prompt("Rock, Paper and Scissors\nPick a move."), computerPlay()) + `\nPlayer: ${playerPoints}\nComputer: ${computerPoints}`)
    }
    if (playerPoints > computerPoints) {
        console.log("YOU ARE THE WINNER!");
    } else {
        console.log("You lose :(");
    }
}

//Function for 5 games, no matter if the move is invalid
/* function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, Paper and Scissors\nPick a move."), computerPlay()))
        console.log(`Player: ${playerPoints}\nComputer: ${computerPoints}`)
    }
    if (playerPoints > computerPoints) {
        console.log("YOU ARE THE WINNER!");
    } else if (computerPoints > playerPoints) {
        console.log("You lose :(");
    } else {
        console.log("It's a tie!");
    }
} */

game();
