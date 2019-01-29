var wordBank = ["avid", "adobe", "vegas", "protools", "mediacomposer"]

var wins = 0;
var losses = 0;
var guess = 0;
var wrong = 10;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log("Available words are: " + wordBank);

console.log("The secret work is " + wordSelect);

console.log("testing index of with string conversion");
x = "a";
stringValue = String(x);
console.log(wordSelect.indexOf(stringValue));


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
  console.log(stringValue + " is a correct letter.")
  }
  else{
    console.log(stringValue + " is a wrong letter.");
  
  }
  


}







}

  // incorrectText.push(event.key);
  // wrongLettersText.textContent = "You have typed incorrectly: " + incorrectText;
  



