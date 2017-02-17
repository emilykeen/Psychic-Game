function idRunner(element) {
    var result = document.getElementById(element);
    return result;
}


var win = 1,
    loss = 1,
    guessRemaining = 9,
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
		idRunner("guessRemaining").textContent = "Guesses Left: " + 9;
        	guessRemaining = 9;
    
} else {
    guessRemaining--;
    idRunner("guessRemaining").textContent = "Guesses Left:" + guessRemaining;


    if (guessRemaining == 0) {

        idRunner("loss").textContent = "Losses:" + loss++;

        idRunner("guessRemaining").textContent = "Guesses Left: " + 9;
        guessRemaining = 9;

        idRunner("guesses").textContent = "Your Guesses So Far: " + [];

    }

}


}