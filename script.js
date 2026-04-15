
let userScore = 0;
let compScore = 0;

function play(userChoice) {
    const choices = ['stone', 'paper', 'scissor'];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    let resultText = "";

    if (userChoice === compChoice) {
        resultText = "Draw 🤝";
    } 
    else if (
        (userChoice === 'stone' && compChoice === 'scissor') ||
        (userChoice === 'paper' && compChoice === 'stone') ||
        (userChoice === 'scissor' && compChoice === 'paper')
    ) {
        userScore++;
        resultText = "You Win 🎉";
    } 
    else {
        compScore++;
        resultText = "You Lose 😢";
    }

    document.getElementById("result").innerText = 
        `You chose ${userChoice}, Computer chose ${compChoice}. ${resultText}`;

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    document.getElementById("userScore").innerText = 0;
    document.getElementById("compScore").innerText = 0;
    document.getElementById("result").innerText = "Game Reset!";
}
