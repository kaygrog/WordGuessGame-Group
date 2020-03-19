// Creating variables from HTML page by grabbing ID
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("current-word")
var guessesRemainingText = document.getElementById("guesses-remaining")
var guessesText = document.getElementById("guesses")

// Random Word List array
var typeFood = ["bread", "fruit", "potroast", "vegetables", "chicken", "chocolate", "pasta", "rice", "burgers", "pizza", "dumpling", "wafflefries", "curry", "pineapple", "cookies"]

// Creating random word generator for array above
var randomWord = typeFood[Math.floor(Math.random() * typeFood.length)]

// When page loads, in currentWordText, display # of underscores equal to randomWord.length
for(var i=0; i < randomWord.length; i++) {
    currentWordText.textContent += "_";
}

console.log(randomWord);

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    // Check if userGuess is in randomWord; indexOf returns -1 if userGuess is NOT in randomWord
    if (randomWord.indexOf(userGuess) !== -1) {
        // Replace the appropriate underscore in currentWordText with userGuess
        // Find index of userGuess in randomWord
        // Replace that index in currentWordText with userGuess
        var indexArray = [];

        // Loop through each letter in randomWord
        // Check if userGuess is the same character as letter in randomWord
        // If same, add index of letter to indexArray
        for (var i=0; i < randomWord.length; i++) {
            if (randomWord.charAt(i) === userGuess) {
                indexArray.push(randomWord.indexOf(i));
            }
        }
        console.log(indexArray);

        // var letterIndex = randomWord.indexOf(userGuess);
        // currentWordText.textContent = currentWordText.textContent.replace(currentWordText.textContent.charAt(letterIndex), userGuess);

        guessesText.textContent += userGuess;
    }
}