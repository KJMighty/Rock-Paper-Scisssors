const playerSelection = "Rock";
const computerSelection = computerPlay();

function computerPlay(rock, paper, scissors) {
    if(rock){
        return 'Rock';
    } else if(paper){
        return 'Paper';
    } else if(scissors){
        return 'Scissors';
    } 
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
       return 'It is a tie!';
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock.';
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'Congratulations, You Win!';
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'Congratulations, You Win!';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'Congratulations, You Win!';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors.';
    } 
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

game();
console.log(playRound(playerSelection, computerSelection));