//caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result_div = document.querySelector(".Result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");





function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = choice[Math.floor(Math.random() * 3)];
    return randomNumber;
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    switch (userChoice + computerChoice) {
        case 'sp':
            result_div.innerHTML = "Scissors cut through Paper. You win!";
            break;
        case 'pr':
            result_div.innerHTML = "Paper covers Rock. You win!";
            break;
        case 'rs':
            result_div.innerHTML = "Rock beats Scissors. You win!";
            break;
    }
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    switch (userChoice + computerChoice) {
        case 'ps':
            result_div.innerHTML = "Scissors cut through Paper. You lose!";
            break;
        case 'rp':
            result_div.innerHTML = "Paper covers Rock. You lose!";
            break;
        case 'sr':
            result_div.innerHTML = "Rock beats Scissors. You lose!";
            break;
    }
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice) {
    result_div.innerHTML = "Its a draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove("grey-glow"), 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'sp':
        case 'pr':
        case 'rs':

            win(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice);
            break;
        default:
            lose(userChoice, computerChoice);
    }
    getPicture(userChoice, computerChoice)
}

function main() {

    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();