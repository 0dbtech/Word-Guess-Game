var wordBank = ["avid", "adobe", "vegas", "protools", "harry"]

var wins = 0;
var losses = 0;
var guess = 0;
var wrong = 10;
var letters = [];
var wrongLetters = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log("Available words are: " + wordBank);

console.log("The secret work is " + wordSelect);

console.log("testing index of with string conversion");
x = "a";
stringValue = String(x);
console.log(wordSelect.indexOf(stringValue));

for(i=0; i<wordSelect.length; i++){
letters.push("_");
}

console.log("items in array letters " + letters);
//get user input
// document.onkeyup = function(event) {


//   // Determines which key was pressed.
//   var userGuess = event.key;
//   stringValue = String(userGuess);
//   console.log(wordSelect.indexOf(stringValue));

// }





document.onkeyup = function(event) {


  // Determines which key was pressed.
  var userGuess = event.key;

  console.log("about to run string conversion");
  stringValue = String(userGuess);
  console.log(wordSelect.indexOf(stringValue));

console.log("You just typed letter " + userGuess);
console.log("reminder the word is " + wordSelect);

for (i=0; i<wordSelect.length; i++){
  
  if (i === wordSelect.indexOf(stringValue) ){
  console.log(stringValue + " is a correct letter.");
  letters.splice(i, 1, stringValue);
  }
  
  


}

console.log("items in CORRECT array letters " + letters);

if (wordSelect.indexOf(stringValue) === -1) {
  console.log(stringValue + " is a wrong letter.");
  wrongLetters.splice(0, 0, stringValue);
    console.log("wrong letters " + wrongLetters);
 }





}

  // incorrectText.push(event.key);
  // wrongLettersText.textContent = "You have typed incorrectly: " + incorrectText;
  



