var colors = [];
var numSquares = 6;
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){

	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		//if condition is easy then first option otherwise the second options is chosen
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();

		
	});
}

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
 
	//add click listerners to square
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			resetButton.textContent = "Play Again?";
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else 
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			
		}
	});
}

reset();

}


function reset(){

	colors = generateRandomColors(numSquares);
	//pick new random colors
	pickedColor = pickColor();
	//change the color deisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change the colors of the squares on the
	resetButton.textContent = "New Colors"; 

	for (var i = 0; i < squares.length; i++){
		
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#232323";

	messageDisplay.textContent = ""

}


resetButton.addEventListener("click", function(){
	reset();
});


colorDisplay.textContent = pickedColor;

//creating this to keep code organised
function changeColors(color){

	for(var i = 0; i < squares.length; i ++){
		squares[i].style.backgroundColor = color;
	}
}

//function to pick a random color
function pickColor(){
	var random = Math.floor(Math.random( ) * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	for (var i = 0; i < num; i++){
		//get random color and add that to the array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}