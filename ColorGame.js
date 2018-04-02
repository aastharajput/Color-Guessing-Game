'use strict';

var colors = ['rgb(255, 0, 0)','rgb(255, 255, 0)','rgb(255, 0, 255)',
				'rgb(0, 255, 0)','rgb(0, 0, 255)','rgb(255, 255, 255)'];

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var pickedColor = colors[3];


colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++)           //To add colors to the squares
{
	//To add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	/*if(i == colors.length)
	{
		i = 0;
	}*/

	//Add click listener to each square
	squares[i].addEventListener('click',function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare clickedColor with pickedColor
		if(clickedColor === pickedColor)
		{
			alert("Correct");
			messageDisplay.textContent = "Correct";
			for(var j=0;j<squares.length;j++)
			{
				squares[j].style.backgroundColor = clickedColor;
			}
			
		}
		else
		{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}

	});
}



