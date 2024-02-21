const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    let weaponChoice = weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
    return weaponChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection} crushes ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return `You Win! ${playerSelection} cuts ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection} covers ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "lizard") {
        return `You Win! ${playerSelection} crushes ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "lizard" && computerSelection === "spock") {
        return `You Win! ${playerSelection} poisons ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "spock" && computerSelection === "scissors") {
        return `You Win! ${playerSelection} smashes ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "lizard") {
        return `You Win! ${playerSelection} decapitates ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "lizard" && computerSelection === "paper") {
        return `You Win! ${playerSelection} eats ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "spock") {
        return `You Win! ${playerSelection} disproves ${computerSelection}.`
    } else if (playerSelection.toLowerCase() === "spock" && computerSelection === "rock") {
        return `You Win! ${playerSelection} vaporises ${computerSelection}.`
    }
    else {
        return `Tie!`
    }
}



const playerSelection = "rock";
const computerSelection = "rock"
console.log(playRound(playerSelection, computerSelection))

// Rock crushes Scissors
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock

