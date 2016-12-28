// JavaScript Document
// Declare and initialize array
    var game =["HEROKU", "GITHUB", "HTML", "DIRECTORY", "JAVASCRIPT", "BOOTSTRAP", "PORTFOLIO", "WEBDESIGN", "PAPER", "ROCK",
                "SCISSOR", "COMPUTER", "PROGRAMMING", "FILE", "CAT", "DOG", "LETTER", "PHONECALL", "LIONHEAD", "LAMPSHED",
                 "BOOK", "LAPTOP", "DESK", "CUPCAKE", "EMAIL", "PHOTOCOPY", "GLASSES", "PRINTER", "PENDRIVE", "JACKET",
                  "NAMETAG", "BACKPACK", "DRIVER", "ASSIGNMENT", "HOMEWORK", "GRADES", "DELETE", "SAVE", "VIDEO", "FINISH"];
// Generate a random number between 0 to 39 and store it in variable "choice"  
    var choice = Math.floor(Math.random()*40);

// Get the word from word array(game) based on random number stored
// in choice and put the word in variable answer.
    var answer = game[choice];

// Store the length of selected word in variable "myLength".
    var myLength = answer.length;

// Declare variable "display" as an array of length of selected word.
    var display = [myLength];

// Declare variable "win" and set to myLength to put check if user
// got all the letters in the chosen word.
    var win = myLength;
    var losses = myLength;

// Create variable "attemptsLeft" and set it to 10 as the max no. of attempts.
    var attemptsLeft = 10;

// Create a variable output to pass the output back to the "HTML" file.
    var output = "";

// Create a variable "userLetter" to store the letter pressed by user.
    var userLetter = "";

// Create a variable "usedLetter" to store the letters used so far.
    var usedLetters = "";

// Create a variable "lives" to track no of lives left.
    var lives = 6;

// Create a variable "resetGame" to track when to start a new game
    var resetGame = 1;

// Functions to run the game starts here...
// When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {


 //alert("hello");
// To reset the game, set the usedLetters=0, if win, then Lives=6, if lose then,Lives=-1.
//After user have used 6 lives send an alert message to the user to start the game again.
if (resetGame == 1)
{  
myFunction(); 
}
else
{
// Determine which key was pressed, make it lowercase, and set it to the userLetter variable.
  var userLetter = String.fromCharCode(event.keyCode).toUpperCase();
  output = "";
  usedLetters = usedLetters + " " + userLetter;
	document.getElementById("WORD").innerHTML = output;
	output = "";
	
	
  for (var c = 0; c < answer.length; c++)
	{
		// alert(letter[c]);
		if (answer[c] == userLetter)
		{
			display[c] = userLetter + " ";
			win --;
		}jkh
    output = output + display[c];
  }

  document.getElementById("WORD").innerHTML = output;
    output = "";
 

  document.getElementById("usedLetters").innerHTML = usedLetters;

  document.getElementById("display").innerHTML = myLength;

  document.getElementById("lives").innerHTML = lives;

                                       
    if (win < 1) 
   {
	document.getElementById("guesses").innerHTML = "You Win!! Play Again!!!";
    document.getElementById("winning").style.opacity = 1.0;
      else if (attemptsLeft < 1)
   {
	document.getElementById("guesses").innerHTML = "Oh! You Lose! Try Again!!";
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("loser").style.opacity = 1.0;
  lives --;
  resetGame = 1;
   }

    else
   {
	document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left";
   document.getElementById("losing").style.opacity = 1.0;   
     attemptsLeft --;
}
}
if (lives == 0)  {
  document.getElementById("gameover").style.opacity = 1.0;
  myFunction();
  lives = 6;
}

}

// When the user clicks the restart button, it will run the following function to restart the game....
function myFunction() {

  choice = Math.floor(Math.random()*40);
    answer = game[choice];
    myLength = answer.length;
    display = [myLength];
    win = myLength;
    attemptsLeft = 10;
    output = "";
    usedLetters = "";
    image = "";
    opacity = 0;
    
    resetGame = 0;
    for (var i = 0; i < answer.length; i++) {

      display[i] = "_ ";
      output = output + display[i];
    }
      document.getElementById("WORD").innerHTML = output;
      document.getElementById("display").innerHTML = myLength;
      document.getElementById("usedLetters").innerHTML = usedLetters;
      document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
      attemptsLeft --;
      document.getElementById("daretowin").style.opacity = 0;
      document.getElementById("winning").style.opacity = 0;
      document.getElementById("winningpost5").style.opacity = 0;
      document.getElementById("loser").style.opacity = 0;
      document.getElementById("losing").style.opacity = 0;
      document.getElementById("gameover").style.opacity = 0;
}
   
       //else if (win = 4)
   //{
 /// document.getElementById("guesses").innerHTML = "You are about to win! Way to go!";
 // document.getElementById("winningpost5").style.opacity = 0.8;
 // lives = 2;
 //  }
