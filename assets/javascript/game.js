var wordBank = ["avid", "adobe", "vegas", "protools", "harry"]

var wins = 0;
var losses = 0;
var wrongGuess = 0;
var guessRemain = 10;
var letters = [];
var wrongLetters = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log("Available words are: " + wordBank);

console.log("The secret word is: " + wordSelect);

// console.log("testing index of with string conversion");
// x = "a";
// stringValue = String(x);
// console.log(wordSelect.indexOf(stringValue));

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



console.log("OUTSIDE OF DOC KEYUP");

document.onkeyup = function(event) {
  console.log("TOP OF DOC KEYUP");
  console.log("guess remaining " + guessRemain);
if (guessRemain === 0){
  console.log("GAME OVER");
  console.log("guess remaining " + guessRemain);
}


  // Determines which key was pressed.
  var userGuess = event.key;

  console.log("about to run string conversion");
  stringValue = String(userGuess);

  
  console.log("guess remaining " + guessRemain);
  console.log(wordSelect.indexOf(stringValue));

console.log("You just typed letter " + userGuess);
console.log("reminder the word is " + wordSelect);
console.log("guess remaining " + guessRemain);
if ( (wordSelect.indexOf(stringValue)) === -1 ) {
  console.log("WRONG");
  console.log("guess remaining " + guessRemain);
  // --guessRemain;
  console.log("guess remaining " + guessRemain);
  }
  else {
    console.log("CORRECT");
    console.log("guess remaining " + guessRemain);
  }


for (i=0; i<wordSelect.length; i++){

  //END GAME IF ALL LETTERS GUESSED
  if ( (wordSelect.indexOf[i]) === (letters.indexOf[i]) ){
  console.log("YOU WON");
  }
  
  if (i === wordSelect.indexOf(stringValue) ){
  console.log(stringValue + " is a correct letter.");
  letters.splice(i, 1, stringValue);
  console.log("guess remaining " + guessRemain);
  }

  
  
  
  // console.log("items in CORRECT array letters " + letters);

  
  
  // else {
  //   console.log(stringValue + " FIRST incorrect guess, no guesses lost FALSE = " + wrongLetters.includes(stringValue));
    
  // }
  
  
  console.log("wrong letters " + wrongLetters);

}

if (wrongLetters.indexOf(stringValue) === -1){
  console.log("guess remaining " + guessRemain);
  console.log(stringValue + " was NOT already typed wrong");
  wrongLetters.splice(0, 0, stringValue);
  // guessRemain--;
}
console.log("guess remaining " + guessRemain);
  console.log("items in CORRECT array letters " + letters);



console.log ("done here");
return
//END
}
//END


// if (wrongLetters.includes(stringValue) == false);{
//   console.log(stringValue + " was already guessed incorrectly");
// }


// if (wordSelect.indexOf(stringValue) === -1) {
//   console.log(stringValue + " adding to wrong array");
//   wrongLetters.splice(0, 0, stringValue);
//     console.log("wrong letters " + wrongLetters);
//  }
/* <h2><span id="wins-text"></span></h2>
<h2><span id="guess-text"></span></h2>
<h2><span id="wrong-text"></span></h2>
<h2><span id="word-text"></span></h2> */


 








  



