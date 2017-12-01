// js file 


var numToGuess = Math.floor((Math.random()* 50) + 4);
var numYouGuess = 0 ;
var numWins = 0;
var numLosese = 0;
var gameBestOf = 0;
var header = "<h1> Cryastals Collaction Game </h1>";
$(document).ready(function(){
	$("#main").html(header).css({
		"text-align": "center"
	});
	$("#numToGuess").text(numToGuess)	
	
});

function buttonValue(x, y){
	// get random number betweewn 1 to numToGuess number
	var bValue = Math.floor(Math.random()* ((x - y)+ 1) + y);
	// displayed to frontend for user 
		$("#button").value = bValue;
		console.log("this is button value " + bValue);
		totalGuesseNum(bValue);
}

function addButtonValue(){
	var y = 1;
	buttonValue(numToGuess, y);		
}

function totalGuesseNum(x){
	console.log("this is x in total guess " + x);
	// update numYouGuess to user guessed
	 numYouGuess = numYouGuess + x;
	console.log(numYouGuess);
	// displayed total user guessed
	$("#numYouGuessed").text(numYouGuess);
	console.log("this is total guessed number " + numYouGuess);
	// add logic here 
	if(numYouGuess === numToGuess){
		numWins++;
		$("#wins").text(numWins);
		resetGame();
		console.log("well well, you have win!");
	} else if (numYouGuess < numToGuess) {
		console.log("not over yet, try again");
		
	} else if(numYouGuess > numToGuess) {
		numLosese++;
		$("#losses").text(numLosese);
		resetGame();
		console.log("you have lost the game my friend!");
	} else{
		console.log("i cant help you my friend");
	}

}

function resetGame(){
	if(gameBestOf === 3){
		$("#numToGuess").text(numToGuess)
		alert("game is over=")	
		
	} else{
		gameBestOf++;
		$("#numToGuess").text(numToGuess);
		$("#numYouGuessed").text(numYouGuess);
		addButtonValue();
	}
}
