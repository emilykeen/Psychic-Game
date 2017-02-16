function idRunner(element){
	var result = document.getElementById(element);
	return result;
}

var win =1,
	loss =1,
	guessRemaing = 8,
	computer = ["a","b", "c" , "d", "e", "f", "g", "h", "i","j", "k","l", "m", "n", "o","p",
				 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	guesses= [];

document.onkeyup =function(event){

var computerGuess = Math.floor(Math.random() * computer.length),
	randomWord = computer [computerGuess];

 var typing =document.createTextNode(event.key + ',');

 	idRunner("guesses").appendChild(typing);


if (randomWord === event.key){

	idRunner("win").textContent = "Wins:" + win++;


	if (win >= 1) {guessRemaing = 8;


		idRunner("guessRemaing").textContent = "Guess Remaining: " + 9;
		guessRemaing = 8;
	}
}

else {
		idRunner("guessRemaing").textContent =  "Guess Remaining:" + guessRemaing--;

		if(guessRemaing <= 0) {

			idRunner("loss").textContent = "losses:" + loss++;

			idRunner("guessRemaing").textContent = "Guesses left: " + 9;
				guessRemaing = 8;
		}

}


}