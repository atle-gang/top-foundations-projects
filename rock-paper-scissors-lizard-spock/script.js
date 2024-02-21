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
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "lizard" && computerSelection === "rock") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "spock" && computerSelection === "lizard") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "spock") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "lizard" && computerSelection === "scissors") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "lizard") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "spock" && computerSelection === "paper") {
        return `${playerSelection} loses to ${computerSelection}`
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "spock") {
        return `${playerSelection} loses to ${computerSelection}`
    } else {
        return `Tie!`
    }
}



const playerSelection = "rock";
const computerSelection = "rock"
console.log(playRound(playerSelection, computerSelection))

// Lose Possibilities:

// Scissors lose to Rock
// Paper loses to Scissors
// Rock loses to Paper
// Lizard loses to Rock
// Spock loses to Lizard
// Scissors lose to Spock
// Lizard loses to Scissors
// Paper loses to Lizard
// Spock loses to Paper
// Rock loses to Spock

// Win Possibilities:

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

