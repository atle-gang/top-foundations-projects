const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];

function getComputerChoice() {
    let weaponChoice = weaponChoices[Math.floor(Math.random() * weaponChoices.length)];
    return weaponChoice;
}

console.log(getComputerChoice())