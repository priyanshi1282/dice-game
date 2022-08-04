let dice1=document.getElementById('dice1');
let dice2=document.getElementById('dice2');
let result= document.getElementById('result');
let score1= document.getElementById('score1');
let score2= document.getElementById('score2');
let scoreCount1=0;
let scoreCount2=0;

function rollDice(){
    let number1= Math.floor(Math.random()*6 +1);
    let number2= Math.floor(Math.random()*6 +1);
    dice1.classList=`roll bx bxs-dice-${number1}`;
    dice2.classList=`roll bx bxs-dice-${number2}`;
    let winner;
    if(number1>number2){
        winner="Player 1";
        scoreCount1++;
        score1.textContent=scoreCount1;
    }
    else if(number1<number2){
        winner="Player 2";
        scoreCount2++;
        score2.textContent=scoreCount2;
    }
    else{
        winner="Tie"
    }
    result.textContent=winner;
    clearAnimation();
}
