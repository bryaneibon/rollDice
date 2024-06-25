var player1Name = prompt("Enter Player 1 Name: ");
var player2Name = prompt("Enter Player 2 Name: ");

var player1Score = 0;
var player2Score = 0;

function randomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}

function whoWins(player1Dice, player2Dice) {
    if (player1Dice > player2Dice) {
        document.querySelector(".reflesh").innerHTML = "🚩 " + player1Name + " Wins";
        return "P1W";
    } else if (player2Dice > player1Dice) {
        document.querySelector(".reflesh").innerHTML = "🚩 " + player2Name + " Wins";
        return "P2W";
    } else {
        document.querySelector(".reflesh").innerHTML = "🚩 DRAW 🚩";
        return "DRAW";
    }
}

function compileScore(player1Dice, player2Dice) {
    var theWinner = whoWins(player1Dice, player2Dice);

    if (theWinner === "P1W") {
        player1Score += 1;
    } else if (theWinner === "P2W") {
        player2Score += 1;
    }
    document.querySelector(".player1").innerHTML = player1Name + " Score : " + player1Score;
    document.querySelector(".player2").innerHTML = player2Name + " Score : " + player2Score;
}

document.querySelector(".player1").innerHTML = player1Name;
document.querySelector(".player2").innerHTML = player2Name;

document.getElementById("rollDiceButton").addEventListener("click", function() {
    var dice1 = randomDiceNumber();
    var dice2 = randomDiceNumber();

    compileScore(dice1, dice2);

    document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");
});

document.getElementById("resetScore").addEventListener("click", function() {
    player1Score = 0;
    player2Score = 0;
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    document.querySelector(".player1").innerHTML = player1Name + " Score : " + player1Score;
    document.querySelector(".player2").innerHTML = player2Name + " Score : " + player2Score;
});