

function DiceRoll(){
    let player1=Math.floor(Math.random()*6)+1;
    let player2=Math.floor(Math.random()*6)+1;
    let player1Image="images/dice"+player1+".png";
    let player2Image="images/dice"+player2+".png";
    document.querySelector('.DiceImage1').setAttribute('src',player1Image);
    document.querySelector('.DiceImage2').setAttribute('src',player2Image);
    let title =document.querySelector('.title');
if (player1>player2)
title.innerHTML="Player 1 Congratulation!!!!"
else 
if (player1<player2)
title.innerHTML="Player 2 Congratulation!!!!"    
    else 
    title.innerHTML="Draw!!!!"


}document.querySelector('.btn').addEventListener('click',DiceRoll);
