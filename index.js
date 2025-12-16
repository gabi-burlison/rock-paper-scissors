//Human choice
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    //Computer choice
    const computerOptions = ["rock", "paper", "scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    let result = "";
    if (humanChoice === computerChoice) {
    console.log("It's a tie! Try again.");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("You won! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("Computer won. " + computerChoice + " beats " + humanChoice);
        computerScore++;
    } if (humanScore === 5 && computerScore < 5) {
        console.log("Congratulations! You won!");
        alert("Play again?");
        resetGame();
        return;
    } else if (humanScore < 5 && computerScore === 5) {
        console.log("You lost. Try again!");
        alert("Play again?");
        resetGame();
        return;
    } console.log("Current score: You: " + humanScore + " Computer: " + computerScore);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

//Anotar shift + win + F amanha pra formatar as indentações