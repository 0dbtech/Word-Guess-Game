var wordBank = ["AVID", "ADOBE", "VEGAS", "FUSION", "CUBASE", "LOGIC", "FINALCUTPROX", "DAVINCI", "ABELTON", "AUTODESK", "UNITY"]
var wins = 0;
var losses = 0;
var wrongGuess = 0;
var guessRemain = 5;
var letters = [];
var wrongLetters = [];


var wordSelectSplit = newWord();


//check for double letters
function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i] === val)
          indexes.push(i);
  return indexes;
}

function newWord(){
    //Generate first word
    var wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];

  //split selected work letters into string
  var wordSelectSplit = wordSelect.split("");

  //write blanks for selected word
for(i=0; i<wordSelectSplit.length; i++){
  letters.push("_");
  }
  console.log("new word " + wordSelectSplit + " selected");
return wordSelectSplit;

//Populate empty page to start
startDiv.innerHTML = ("Click to Start Game");
winsDiv.innerHTML = ("Wins: " + wins);
guessDiv.innerHTML = ("Guesses Remaining: " + guessRemain);
wrongDiv.innerHTML = ("Incorrect Letters: " + wrongLetters);
wordDiv.innerHTML = ("Secret Word: " + letters);

}

  // Randomly select from word bank
  // function newWord(){
  //   //Reset vars
  //   guessRemain = 5;
  //   letters = [];
  //   wrongLetters = [];
  // }


// //write blanks for selected word
// for(i=0; i<wordSelectSplit.length; i++){
//   letters.push("_");
//   }



    // console.log("Available words are: " + wordBank);
    // var wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];
    // console.log("The secret word is: " + wordSelect);
  
    // console.log(wordSelectSplit);

    
    // console.log("items in array letters " + letters);
    
    

//DOM element vars
var winsDiv = document.getElementById("wins-text");
var guessDiv = document.getElementById("guess-text");
var wrongDiv = document.getElementById("wrong-text");
var wordDiv = document.getElementById("word-text");
var startDiv = document.getElementById("start-text");

//Populate empty page to start
startDiv.innerHTML = ("Click to Start Game");
winsDiv.innerHTML = ("Wins: " + wins);
guessDiv.innerHTML = ("Guesses Remaining: " + guessRemain);
wrongDiv.innerHTML = ("Incorrect Letters: " + wrongLetters);
wordDiv.innerHTML = ("Secret Word: " + letters);



//click to start game
document.getElementById("start-text").onclick = function() {
  console.log("cliked");
     //Reset vars
     guessRemain = 5;
     letters = [];
     wrongLetters = [];
     //Populate empty page to start
startDiv.innerHTML = ("Click to Start Game");
winsDiv.innerHTML = ("Wins: " + wins);
guessDiv.innerHTML = ("Guesses Remaining: " + guessRemain);
wrongDiv.innerHTML = ("Incorrect Letters: " + wrongLetters);
wordDiv.innerHTML = ("Secret Word: " + letters);

  newWord()};
// console.log("testing index of with string conversion");
// x = "a";
// stringValue = String(x);
// console.log(wordSelect.indexOf(stringValue));


//split selected work letters into string
// var wordSelectSplit = wordSelect.split("");
// console.log(wordSelectSplit);

// //write blanks for selected word
// for(i=0; i<wordSelect.length; i++){
// letters.push("_");
// }

// console.log("items in array letters " + letters);
//get user input
// document.onkeyup = function(event) {


//   // Determines which key was pressed.
//   var userGuess = event.key;
//   stringValue = String(userGuess);
//   console.log(wordSelect.indexOf(stringValue));

// }

// for(i=0; i<wordSelectSplit.length; i++){
// if 
// }

console.log("OUTSIDE OF DOC KEYUP");
//START keyboard input function

document.onkeyup = function(event) {

//check for wins  
if (wordSelectSplit === letters){
  alert("YOU WON!");
newWord();
}


  console.log("TOP OF DOC KEYUP");
  console.log("guess remaining " + guessRemain);
if (guessRemain < 1){
  console.log("GAME OVER");
  alert("YOU LOST!");
  location.reload();
  //EXIT FUNCTION
  
  return
  var wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log("guess remaining " + guessRemain);
}


  // Determines which key was pressed.
  var userGuess = event.key;

  console.log("about to run string conversion");
  stringValue = String(userGuess);
  //convert case
  stringValue= stringValue.toUpperCase();
  console.log("converted " + stringValue + " to UpperCase");
  
  console.log("guess remaining " + guessRemain);
  console.log(wordSelectSplit.indexOf(stringValue));

console.log("You just typed letter " + userGuess);
console.log("reminder the word is " + wordSelect);
console.log("guess remaining " + guessRemain);
if ( (wordSelectSplit.indexOf(stringValue)) === -1 ) {

  console.log("WRONG");

        if (wrongLetters.indexOf(stringValue) === -1){
          console.log("guess remaining " + guessRemain);
          
          wrongLetters.splice(0, 0, stringValue);
          guessRemain--;
          
        }
        else{
          console.log(stringValue + " was already typed wrong");
          return
          // guessRemain--;
        }
  
  console.log("guess remaining " + guessRemain);
  //decrease reamaining guess
  
  

  }
  else {
    console.log("CORRECT");
    console.log("guess remaining " + guessRemain);
  }


for (i=0; i<wordSelectSplit.length; i++){

  //END GAME IF ALL LETTERS GUESSED
  // if ( (wordSelectSplit.indexOf[i]) === (letters.indexOf[i]) ){
  // console.log("YOU WON");
  // }
  var matchingLetters = getAllIndexes(wordSelectSplit,stringValue);
  console.log("letters match at " + matchingLetters);
  //Splice into letters at matching indexes


  if (i === wordSelectSplit.indexOf(stringValue) ){
  console.log(stringValue + " is a correct letter.");

  console.log("checking for duplicate letters");
console.log(getAllIndexes(wordSelectSplit,stringValue));

  letters.splice(i, 1, stringValue);
  console.log("guess remaining " + guessRemain);
  }

  
  
  
  // console.log("items in CORRECT array letters " + letters);

  
  
  // else {
  //   console.log(stringValue + " FIRST incorrect guess, no guesses lost FALSE = " + wrongLetters.includes(stringValue));
    
  // }
  
  
  console.log("wrong letters " + wrongLetters);

}

// if (wrongLetters.indexOf(stringValue) === -1){
//   console.log("guess remaining " + guessRemain);
//   console.log(stringValue + " was NOT already typed wrong");
//   wrongLetters.splice(0, 0, stringValue);
//   // guessRemain--;
// }
console.log("guess remaining " + guessRemain);
  console.log("items in CORRECT array letters " + letters);


//UPDATE DOM
// var winsDiv = document.getElementById("wins-text");
// var guessDiv = document.getElementById("guess-text");
// var wrongDiv = document.getElementById("wrong-text");
// var wrongDiv = document.getElementById("word-text");

  winsDiv.innerHTML = ("Wins: " + wins);
  guessDiv.innerHTML = ("Guesses Remaining: " + guessRemain);
  wrongDiv.innerHTML = ("Incorrect Letters: " + wrongLetters);
  wordDiv.innerHTML = ("Secret Word: " + letters);

//   var wins = 0;
// var losses = 0;
// var wrongGuess = 0;
// var guessRemain = 10;
// var letters = [];
// var wrongLetters = [];


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


 








  



