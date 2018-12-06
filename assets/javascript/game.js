//Start game by pressing any key
//Computer grabs random word array of MLB teams
//Display blanks for how many letters are in team name
//User starts guessing
//on Key up or down function
//Take letter guessed against random word


//Computer grabs random MLB array

var wordBank = ["ROYALS", "CARDINALS", "YANKEES", "ATHLETICS", "ANGELS", "ASTROS"]
var choice = Math.floor(Math.random() * 6);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var attempsLeft = 10;
var output = "";
var userLetter = "";

var setup = function () {
    for (var i = 0; i < answer.length; i++) {
        display[i] = "_";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output = "";
}
var submit = function () {

    output = "";
    userLetter = $("letter").nodeValue;
    $("letter").value = "";

    
    output = output + display[c] + " ";
}

document.getElementById("game").innerHTML = output;
output = "";
attemptsLeft--;
if (win < 1) {
    document.getElementById("guesses").innerHTML = "YOU WON!";
}
else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = "YOU LOSE!";
}
window.onload = function () {
    setup();
}

