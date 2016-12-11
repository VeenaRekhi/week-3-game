// JavaScript Document

//  To form a Image puzzle we will set array and variables 
var canvas;
var context;

// Create a Draw Function to fix an imagepiece by 
// an imagepiece into the puzzle starts here...
function draw() {
	clearCanvas();
	setLineWidth(20);
};

function clearCanvas() {
	canvas.width = canvas.width;
	canvas.height = canvas.height;
};

function setColor(color) {
	context.strokeStyle = color;

};

function setLineWidth(width) {
	context.lineWidth = width;

}

function drawImagePiece(0, 0) {
	context.beginPath();
	context.moveTo(100, 100);	
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(200, 100);
	context.lineTo(100, 100);
	
	
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(200, 200);
	context.lineTo(200, 100);
	context.stroke();
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(300, 100);
	context.lineTo(200, 100);
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(300, 200);
	context.lineTo(300, 100);	
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(200, 300);
	context.lineTo(200, 200);
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(200, 400);
	context.lineTo(200, 300);
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(200, 500);
	context.lineTo(200, 400);
	context.closePath();
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(100, 200);
	context.lineTo(100, 100);
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(100, 300);
	context.lineTo(100, 200);
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(100, 400);
	context.lineTo(100, 300);
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(100, 500);
	context.lineTo(100, 400);
	context.stroke();
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(300, 300);
	context.lineTo(200, 300);
	context.stroke();
};

function drawImagePiece() {
	context.beginPath();
	context.moveTo(300, 400);
	context.lineTo(300, 300);
	context.stroke();
};

$(document).ready(function() {
	canvas = $('#hangman')[0];
	context = canvas.getContext("2d");


});



