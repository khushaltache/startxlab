// 1st Problem



var c = 50;
var h = 30;
var d = prompt('enter the value');

var  q = parseInt(Math.sqrt((2*c*d)/h));

console.log(q);

// 2nd Problem

var player1 = 'rock';

var player2 = prompt('Please Enter Rock , Paper or Scissor');

if (player1 == "rock" && player2 == "paper"){
    console.log('Congrulations Player 2 wins');
}


else if (player1 == "paper" && player2 == "rock"){
    console.log('Congrulations Player 1 wins');
}


else if (player1 == "rock" && player2 == "scissors")
{ 
    console.log('Congrulations Player 1 wins');
}

else if (player1 == "scissors" && player2 == "rock"){
    console.log('Congrulations Player 2 wins');
}


else if (player1 == "paper" && player2 == "scissors"){
    console.log('Congrulations Player 2 wins');
}


else if(player1 == "scissors" && player2 == "paper"){
    console.log('Congrulations Player 1 wins');
}

else if(player1 == "rock" && player2 == "rock"){
    console.log('Its a Tie');
}

else if(player1 == "scissors" && player2 == "scissors"){
    console.log('Its a Tie');
}

else if(player1 == "paer" && player2 == "paper"){
    console.log('Its a Tie');
}

else{
    console.log('Please enter valid input');
}

