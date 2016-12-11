// Creating our game object.
var Game = {
// Properties of our game object.
        WordArray = ["HEROKU", "GITHUB", "HTML", "DIRECTORY", "JAVASCRIPT", "BOOTSTRAP", "PORTFOLIO", "WEBDESIGN", "PAPER", "ROCK",
                "SCISSOR", "COMPUTER", "PROGRAMMING", "FILE", "CAT", "DOG", "LETTER", "PHONECALL", "LIONHEAD", "LAMPSHED",
                 "BOOK", "LAPTOP", "DESK", "CUPCAKE", "EMAIL", "PHOTOCOPY", "GLASSES", "PRINTER", "PENDRIVE", "JACKET",
                  "NAMETAG", "BACKPACK", "DRIVER", "ASSIGNMENT", "HOMEWORK", "GRADES", "DELETE", "SAVE", "VIDEO", "FINISH"]; 
;  
        userGuess = "- ";
        Wins = "#";
        Lives = "10";
        numLetters = "- ";

        WORD = "test";
        nextWord = "";
        lettersAlreadyGuessed = "";

// A method is a function associated with an object.

Game.PullWord = function(){
	Game.WORD = Words.List[(Math.floor(Math.random()+Game.NumInWordBank))];
}

Game.SetUnderline = function(){
	Game.PullWord();
	for(i = 0; i < Game.Word.length; i++){
		Game.WordArray[i] = Game.Word.charAt(i);
		Game.WordUArray[i] = "_";
	}
	Game.WordU = Game.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Game.WordU;
	document.getElementById("numLetters").innerHTML = Game.Word.length;
}

Game.UpdateLetter = function(letter){
	Game.Changes = 0;
	for(i = 0; i<Game.Word.length; i++){
		Game.WordArray = Main.Word.charAt(i);
		If (Game.Word.charAt(i) = letter) {
			Game.WordUArray[i] = letter;
			game.Changes += 1;
		}
	}
}

if(Game.Changes < 1){
	Game.Lives -=1;
	document.getElementById("lives").innerHTML = Game.Lives;
}

Game.WordU = Game.WordUArray.join("");
document.getElementById("WORD").innerHTML = Game.WordU;

Game.Word1 = Game.WordArray.join("");
Game.Word2 = Game.WordUArray.join("");

if(Game.Word1 = Game.Word2){
	alert("You Won! Loading A New Word");
	window.location.reload();
}

if(Game.Lives < 1){
	document.getElementById("WORD").innerHTML == Game.Word1;
	alert("You Have Run Out Of Lives, Please Try Again.");
	window.location.reload();
}
}

Game.PullWord();
Game.SetUnderline();
