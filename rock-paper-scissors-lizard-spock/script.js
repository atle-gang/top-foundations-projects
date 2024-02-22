const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    let weaponChoice = weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
    return weaponChoice;
}


function getPlayerChoice() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
        });
    });
}


function playRound(playerSelection, computerSelection) {
    const winConditions = {
        "rock": ["scissors", "lizard"],
        "scissors": ["paper", "lizard"],
        "paper": ["rock", "spock"],
        "lizard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    };
    
    if (!weaponChoices.includes(playerSelection)) {
        return `${playerSelection} is not a valid weapon. Please pick a valid weapon.`
    }
    else if (playerSelection === computerSelection) {
        return `Tie!`;
    // The '?' chaining operator ensures that if key doesn't exist in the 'winConditions',
    // it won't throw an error
    } else if (winConditions[playerSelection]?.includes(computerSelection)) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else {
        return `You Lose. ${computerSelection} beats ${playerSelection}.`
    }
}


function playGame() {

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

}

getPlayerChoice();

// playGame();
