var colors = generateRandomColors(6);

var numSquares =6;
var squares	= document.querySelectorAll(".square");
pickedColor =pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton =document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i < squares.length ; i++)
	{
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
		
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i < squares.length ; i++)
	{
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function() {

		colors= generateRandomColors(numSquares);
		pickedColor= pickColor();
		colorDisplay.textContent =pickedColor;
		this.textContent="New Color";
		messageDisplay.textContent=" ";
		for(var i=0;  i<squares.length ;i++)
		{
			squares[i].style.background=colors[i];
		}
		h1.style.background="steelblue"

})
colorDisplay.textContent =pickedColor;

for(var i=0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickColor= this.style.backgroundColor;

		if(clickColor === pickedColor)
		{
			messageDisplay.textContent ="Correct";
			resetButton.textContent="Play Again ?";
			changeColor(clickColor);
			h1.style.background =clickColor;
		}
		else
		{
			this.style.background= "#232323";
			messageDisplay.textContent ="Try Again";
		}
	});
}
		
function changeColor(color){
	for(var i=0;i< squares.length; i++)
	{
		squares[i].style.background =color;
	}
}		

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColors())
	}
	return arr;
}

function randomColors() {
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	"rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")"
}