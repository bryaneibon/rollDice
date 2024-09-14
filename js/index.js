var player1Name = prompt("1st player name: ");
var player2Name = prompt("2nd player name: ");
var nameChecker = true;

while (nameChecker) {
    if (player1Name === "" || player1Name === null || player1Name.length < 2) {
        player1Name = prompt("Enter at least two characters ... 1st player name: ");
    } else if (player2Name === "" || player2Name === null || player1Name.length < 2) {
        player2Name = prompt("Enter at least two characters ... 2nd player name: ")
    }
    else {
        nameChecker = false;
    }
}

player1Name = player1Name.toUpperCase();
player2Name = player2Name.toUpperCase();

document.querySelector(".player1").innerHTML = player1Name;
document.querySelector(".player2").innerHTML = player2Name;

var player1Score = 0;
var player2Score = 0;

document.getElementById("rollDice").addEventListener("click", function() {
    var dice1 = Math.ceil(Math.random() * 6);
    var dice2 = Math.ceil(Math.random() * 6);

    compileScore(dice1, dice2);

    document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");
});

function whoWins(player1Dice, player2Dice) {
    if (player1Dice > player2Dice) {
        document.querySelector(".reflesh").innerHTML = "🚩 " + player1Name + " Wins";
        return "P1Win";
    } else if (player2Dice > player1Dice) {
        document.querySelector(".reflesh").innerHTML = "🚩 " + player2Name + " Wins";
        return "P2Win";
    } else {
        document.querySelector(".reflesh").innerHTML = "🚩 DRAW 🚩";
        return "DRAW";
    }
}

function compileScore(player1Dice, player2Dice) {
    var theWinner = whoWins(player1Dice, player2Dice);
    if (theWinner.includes("P1Win")) {
        player1Score += 1;
        document.querySelector(".player1").innerHTML = player1Name + "'s score : " + player1Score;
    } else if (theWinner.includes("P2Win")) {
        player2Score += 1;
        document.querySelector(".player2").innerHTML = player2Name + "'s score : " + player2Score;
    }
}

document.getElementById("resetScore").addEventListener("click", function() {
    player1Score = 0;
    player2Score = 0;
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    document.querySelector(".player1").innerHTML = player1Name + "'s score : " + player1Score;
    document.querySelector(".player2").innerHTML = player2Name + "'s score : " + player2Score;
});