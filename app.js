const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')   //picking up our span items forom html
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
const btnList = document.querySelectorAll('button');

btnList.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btn.classList.add('special');
    });
});

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', function (e) {  //clicking results in event (function)
    userChoice = e.target.id
    if (userChoice === "rock") {
        userChoiceDisplay.innerHTML = " Rock <i class='fas fa-hand-rock'></i></button>"
    }
    else if (userChoice === 'paper') {
        userChoiceDisplay.innerHTML = 'Paper<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pass" viewBox="0 0 16 16"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" /><path d="M8 2a2 2 0 0 0 2-2h2.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13A1.5 1.5 0 0 1 3.5 0H6a2 2 0 0 0 2 2Zm0 1a3.001 3.001 0 0 1-2.83-2H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1.67A3.001 3.001 0 0 1 8 3Z" /></svg>'
    }
    else if (userChoice === 'scissors') {
        userChoiceDisplay.innerHTML = 'Scissors <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill = "currentColor" class="bi bi-scissors" viewBox = "0 0 16 16" > <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" /></svg > '
    }
    generateComputerChoice()
    getresult()
}
))
function generateComputerChoice() {       //genrating random choices from computer
    const randomNumber = Math.floor(Math.random() * 3) + 1    //generating 3 random values 1,2 and 3 usingh math.random 
    console.log(randomNumber)
    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {                               //giving values of rock paper and scissors to generated random numbers 
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    if (computerChoice === "rock") {
        computerChoiceDisplay.innerHTML = " Rock <i class='fas fa-hand-rock'></i></button>"
    }
    else if (computerChoice === 'paper') {
        computerChoiceDisplay.innerHTML = 'Paper<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pass" viewBox="0 0 16 16"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" /><path d="M8 2a2 2 0 0 0 2-2h2.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13A1.5 1.5 0 0 1 3.5 0H6a2 2 0 0 0 2 2Zm0 1a3.001 3.001 0 0 1-2.83-2H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1.67A3.001 3.001 0 0 1 8 3Z" /></svg>'
    }
    else if (computerChoice = 'scissors') {
        computerChoiceDisplay.innerHTML = 'Scissors <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill = "currentColor" class="bi bi-scissors" viewBox = "0 0 16 16" > <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" /></svg > '
    }
}
function getresult() {    //getting result by comparing all possible conditions
    if (computerChoice === userChoice) {
        result = 'DRAW'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'YOU WIN!'
    }
    if (userChoice === 'rock' && computerChoice === "paper") {
        result = 'COMPUTER WINS!'
    }
    if (userChoice === 'paper' && computerChoice === "scissors") {
        result = "COMPUTER WINS!"
    }
    if (userChoice === 'scissors' && computerChoice === "paper") {
        result = 'YOU WIN!'
    }
    if (userChoice === "rock" && computerChoice === "scissors") {
        result = 'YOU WIN!'
    }
    if (userChoice === "scissors" && computerChoice === "rock") {
        result = 'COMPUTER WINS!'
    }
    resultDisplay.innerHTML = result   //Assigning the value to result
}

btnList.forEach(btn => {     //for active state
    btn.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btn.classList.add('special');
    });
});
