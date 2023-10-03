//
//Guess Game
//Reuben Clemens
//Due: 10/7/20
//

//These are variables that are constant for the random generator
const MIN = 1; 
const MAX = 5; 

//These are global variables used in both functions
rand ="";
y="";


function GetRand() //This function GetRand() is activated with the button that has the 'randbutton' id. It contains code that creates a random value.
{
	rand = Math.floor(Math.random() * (MAX - MIN) + MIN); //Creates the rand variable that has a random value using the MIN and MAX value.
	document.getElementById("RandBox").innerHTML = rand; //gets 'RandBox' and changes the parameter to be rand value.

	//Changes the css of the selected id.
	document.getElementById("RandBox").style.color = "black";//Changes the color of the text of 'RandBox' to be black.
	document.getElementById("RandBox").style.backgroundColor = "black";//Changes the background color

	y=""; //Sets the y value to be zero.

	//Changes the text of the selected ids.
	document.getElementById("TryAgain").innerHTML = "You get 5 chances, if you don't get it, changes numbers.";
	document.getElementById("CorF").innerHTML = "";
	document.getElementById("GuessBox").innerHTML = "";
}

function GetGuess()//This function GetGuess() is activated with the button that has the 'guess' id. Contains if statements that will determine if guess value equals the rand value.
{
	var x = document.getElementById("guess").value; //returns the value from the Id 'guess' and makes it into variable x.
	if (x == rand) //Is a if statement that says if x equals rand's value, do __.
	{
		y++;//adds 1 to y.

		//changes the text of the selected ids.
		document.getElementById("TryAgain").innerHTML = y + ": Click Generate Number! if you would like to play again."; //adds the y value to a string and changes the text of an id.
		document.getElementById("GuessBox").innerHTML = x;
		document.getElementById("CorF").innerHTML = "You won!";

		//Changes the css of an id.
		document.getElementById("RandBox").style.backgroundColor = "lightgrey"; //Changes the background.
	}
	else //This Else statement activates if anything else than the value of rand is used.
	{
		y++;//adds 1 to y.

		//Chnages the text of the selected ids.
		document.getElementById("GuessBox").innerHTML = x; 
		document.getElementById("CorF").innerHTML = "false";
		document.getElementById("TryAgain").innerHTML = y;

		if (y == 4)//Is a if statement where if y equals 4 it will activate.
		{
			document.getElementById("TryAgain").innerHTML = "Changing numbers after this try";//changes the text of 'TryAgain'.
		}
		else if (y == 5)//Is an else if statement that will activate if y equals 4.
		{
			GetRand()//Will call to the GetRand() function.
			y="";//chnage y to zero.
		}
	}
}
