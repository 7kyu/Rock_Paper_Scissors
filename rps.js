function getComputerChoice() {
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


  function game () {
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
      
        if (playerSelection === computerSelection) {
          return "It's a tie!";
        } else if (
          (playerSelection === 'rock' && computerSelection === 'scissors') ||
          (playerSelection === 'paper' && computerSelection === 'rock') ||
          (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
          return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
      }

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
    
        console.log(result);
    
        if (result.startsWith('You win')) {
          playerScore++;
        } else if (result.startsWith('You lose')) {
          computerScore++;
        }
      }
    
      if (playerScore > computerScore) {
        console.log(`You win the game! Final score: ${playerScore} - ${computerScore}`);
      } else if (computerScore > playerScore) {
        console.log(`You lose the game! Final score: ${computerScore} - ${playerScore}`);
      } else {
        console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
      }
    }