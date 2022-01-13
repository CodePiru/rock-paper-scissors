//Create an array of all possible moves
const moves = ["Rock", "Paper", "Scissors"];

//Create a function to determine the computer move
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

console.log(computerPlay());
