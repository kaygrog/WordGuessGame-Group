// Creating variables from HTML page by grabbing ID
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentword")
var guessesRemainingText = document.getElementById("guessesremaining")
var guessesText = document.getElementById("guesses")

// Random Word List array
var typeFood = ["bread", "fruit", "potroast", "vegetables", "chicken", "chocolate", "pasta", "rice", "burgers", "pizza", "dumpling", "wafflefries", "curry", "pineapple", "cookies"]

// Creating random word generator for array above
var randomWord = typeFood[Math.floor(Math.random() * typeFood.length)]

