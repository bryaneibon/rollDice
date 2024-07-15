var player1Name = prompt("1st player name: ");
var player2Name = prompt("2nd player name: ");
var nameChecker = true;

while (nameChecker) {
    if (player1Name === "" || player1Name === null) {
        player1Name = prompt("Enter at least one character ... 1st player name: ");
    } else if (player2Name === "" || player2Name === null) {
        player2Name = prompt("Enter at least one character ... 2nd player name: ")
    }
    else {
        nameChecker = false;
    }
}

player1Name = player1Name.toUpperCase;
player2Name = player2Name.toUpperCase;

document.querySelector(".player1").innerHTML = player1Name;
document.querySelector(".player2").innerHTML = player2Name;

var player1Score = 0;
var player2Score = 0;

document.getElementById("rollDice").addEventListener("click", function() {
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
    document.querySelector(".player1").innerHTML = player1Name + "'s score : " + player1Score;
    document.querySelector(".player2").innerHTML = player2Name + "'s score : " + player2Score;
});

function randomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}

function compileScore(player1Dice, player2Dice) {
    if ("P1W".includes(whoWins(player1Dice, player2Dice))) {
        player1Score += 1;
        document.querySelector(".player1").innerHTML = player1Name + "'s score : " + player1Score;
    } else if ("P2W".includes(whoWins(player1Dice, player2Dice))) {
        player2Score += 1;
        document.querySelector(".player2").innerHTML = player2Name + "'s score : " + player2Score;
    }
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