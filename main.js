let computer = Math.random();
let computerChoice = '';
console.log(computer);
if (0 < computer && computer < 1/3){
    computerChoice = "Rock";
} 
else if (1/3 < computer && computer < 2/3){
    computerChoice = "Paper";
}
else if (2/3 < computer && computer < 1){
    computerChoice = "Scissors";
}
let player = '';
console.log(`Computer choice: ${computerChoice}`);
