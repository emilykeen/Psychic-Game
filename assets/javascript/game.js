function idRunner(element) {
    var result = document.getElementById(element);
    return result;
}

function resetGuesses() {
    guessRemaing = 9;
}

var win = 1;
var loss = 1,
    guessRemaing = 9,
    computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    guesses = [];

document.onkeyup = function(event) {

    var computerGuess = Math.floor(Math.random() * computer.length),
        randomWord = computer[computerGuess];

    var typing = document.createTextNode(event.key + ',');

    idRunner("guesses").appendChild(typing);


    if (randomWord === event.key) {

        idRunner("win").textContent = "Wins:" + win++;
        idRunner("guesses").textContent = "Your Guesses So Far: " + [];


        if (win >= 1) {
            idRunner("guessRemaing").textContent = "Guess Remaining: " + 9;
            resetGuesses();
        }
    } else {
        guessRemaing--;
        idRunner("grspan").textContent = guessRemaing;


        if (guessRemaing == 0) {

            idRunner("loss").textContent = "losses:" + loss++;

            idRunner("guessRemaing").textContent = "Guesses left: " + 9;
            resetGuesses();

            idRunner("guesses").textContent = "Your Guesses So Far: " + [];

        }
    }
}