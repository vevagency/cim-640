//if the cursor is over the box, do something

//start with series of variables
var posX = 0;
var posY = 0;
var size = 100;
var colors = "green";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  //build our box by creating "function display(){}""
  display();
}

// creating own function
function display(){
  fill(colors);
  ellipse(posX,posY,size,size);
}
