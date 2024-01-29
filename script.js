const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // Insted of Three, we can also use possbleChocices.length

    if(randomNumber === 1){
        computerChoice = 'Paper'
    }
    else if(randomNumber === 2){
        computerChoice = 'Rock'
    }
    else{
        computerChoice = 'Scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'It"s a Tie'
    }
    else if(computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Win!'
    }
    else if(computerChoice === 'Rock' && userChoice === 'Scissor') {
        result = 'You Lost!'
    }
    else if(computerChoice === 'Paper' && userChoice === 'Scissor') {
        result = 'You Win!'
    }
    else if(computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Lost!'
    }
    else if(computerChoice === 'Scissor' && userChoice === 'Rock') {
        result = 'You Win!'
    }
    else if(computerChoice === 'Scissor' && userChoice === 'Paper') {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}