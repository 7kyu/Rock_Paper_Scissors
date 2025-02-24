let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return;

    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    
    let result = "";
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }
    
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    
    if (playerScore === 5) {
        document.getElementById("winner").textContent = "Congratulations! You won the game!";
    } else if (computerScore === 5) {
        document.getElementById("winner").textContent = "Game over! The computer won.";
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));