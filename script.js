//Create an array of all possible moves
const moves = ["Rock", "Paper", "Scissors"];
const playerPoints = document.querySelector('.player');
const computerPoints = document.querySelector('.cpu');
const options = document.querySelectorAll('figure');
const output = document.getElementById('output');
const body = document.body;
const all = document.querySelectorAll('header, main, footer');

//Create a function to determine the computer move
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}

//Create a function that plays a single round
function playRound(e) {
    const playerSelection = this.firstElementChild.getAttribute('alt');
    const computerSelection = computerPlay();
    //If both plays have the same move, its a tie
    if (computerSelection === playerSelection) {
        output.textContent = "It's a tie! No points given.";
    //If player = rock and CPU = scissors, you win
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    //If player = paper and CPU = rock, you win
        (playerSelection === "Paper" && computerSelection === "Rock") ||
    //If player = scissors and CPU = paper, you win
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerPoints.textContent++;
            output.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    //Else, you lose
    } else {
        computerPoints.textContent++;
        output.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
    }
    //scroll up
    window.scrollTo(0, 0);
    //handle endgame
    if (playerPoints.textContent >= 5) endGame('&#128516 YOU ARE THE WINNER &#128516');
    if (computerPoints.textContent >= 5) endGame('&#128546 YOU LOSE &#128546')
}

function endGame(string) {
    //remove listener
    options.forEach(option => {
        option.removeEventListener('click', playRound)
        option.style.cursor = 'default';
    });
    //endgame div
    const endDiv = document.createElement('div');
    body.style.overflow = 'hidden';
    endDiv.innerHTML = `
        <div class="end-score">
            <h2>${string}</h2>
            <h3>${playerPoints.textContent} - ${computerPoints.textContent}</h3>
        </div>
        <button class="reload">Play again</button>
    `;
    const reload = endDiv.querySelector('.reload');
    reload.addEventListener('click', () => location.reload());
    all.forEach(item => item.classList.add('opaque'))
    endDiv.classList.add('end-div');
    console.log(endDiv.offsetHeight);
    body.appendChild(endDiv);
    const centerY = (window.innerHeight - endDiv.offsetHeight) / 2;
    const centerX = (window.innerWidth - endDiv.offsetWidth) / 2;
    endDiv.style.top = centerY + 'px';
    endDiv.style.left = centerX + 'px';
}

//Handle selection
options.forEach(option => option.addEventListener('click', playRound));

//Create a function for a 5 round game. Invalid moves and ties doesn't count
/* function game(e) {
        playRound(e.target.firstElementChild.getAttribute('alt'), computerPlay())
    }
    if (playerPoints > computerPoints) {
        console.log("YOU ARE THE WINNER!");
    } else {
        console.log("You lose :(");
    }
} */

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

/* game(); */
