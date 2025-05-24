const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const result = document.querySelector('.res');
const restartBtn = document.querySelector('.restart-btn'); 

let pcAnswer;

function initGame() {
    const pcChoice = randomNum(1, 30);
    
    if (pcChoice >= 1 && pcChoice <= 10) {
        pcAnswer = 'rock';
    } else if (pcChoice >= 11 && pcChoice <= 20) {
        pcAnswer = 'scissors';
    } else if (pcChoice >= 21 && pcChoice <= 30) {
        pcAnswer = 'paper';
    }
    
    console.log(pcAnswer);
    result.innerHTML = 'RESULT'; 
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

initGame();


rock.addEventListener('click', function() {
    if (pcAnswer == 'rock') {
        result.innerHTML = 'DRAW  👊';
    } else if(pcAnswer == 'scissors') {
        result.innerHTML = 'YOU WIN ✌️';
    }
    else if(pcAnswer == 'paper'){
        result.innerHTML = 'YOU LOOSE ✋';
    }
    setTimeout(initGame, 500); 
});


paper.addEventListener('click', function() {
    if (pcAnswer == 'paper') {
        result.innerHTML = 'DRAW ✋ ';
    } else if(pcAnswer == 'scissors') {
        result.innerHTML = 'YOU LOOSE ✌️ ';
    }
    else if(pcAnswer == 'rock'){
        result.innerHTML = 'YOU WIN 👊';
    }
    setTimeout(initGame, 500); 
});

scissors.addEventListener('click', function() {
    if (pcAnswer == 'scissors') {
        result.innerHTML ='DRAW ✌️ ' ;
    } else if(pcAnswer == 'rock') {
        result.innerHTML = 'YOU LOOSE 👊 ';
    }
    else if(pcAnswer == 'paper'){
        result.innerHTML = 'YOU WIN ✋ ';
    }
    setTimeout(initGame, 500);
});
