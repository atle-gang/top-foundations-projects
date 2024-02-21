const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    let weaponChoice = weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
    return weaponChoice;
}


function playRound(playerSelection, computerSelection) {
    const winConditions = {
        "rock": ["scissors", "lizard"],
        "scissors": ["paper", "lizard"],
        "paper": ["rock", "spock"],
        "lizard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    };

    const playerLowerCase = playerSelection.toLowerCase();
    const computerLowerCase = computerSelection.toLowerCase();
    
    if (!weaponChoices.includes(playerLowerCase)) {
        return `${playerLowerCase} is not a valid weapon. Please pick a valid weapon.`
    }
    else if (playerLowerCase === computerLowerCase) {
        return `Tie!`;
    // The '?' chaining operator ensures that if key doesn't exist in the 'winConditions',
    // it won't throw an error
    } else if (winConditions[playerLowerCase]?.includes(computerLowerCase)) {
        return `You Win! ${playerLowerCase} beats ${computerLowerCase}.`
    } else {
        return `You Lose. ${computerLowerCase} beats ${playerLowerCase}.`
    }
}


const playerSelection = "rock";
const computerSelection = "rock"
console.log(playRound(playerSelection, computerSelection))
