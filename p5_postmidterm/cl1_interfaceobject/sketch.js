//if the cursor is over the box, do something

//start with series of variables
var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here

  //build our box by creating "function display(){}""
  //display at a random position each time, size, height, postion, color

// 1
  // display randomized shapes
  // background(255);
  // display(random(width),random(height),random(255),random(0,100));

// 2
  // // display individual static shapes
  // background(255);
  // display(posX,posY,colors,rectSize);
  // check(mouseX,mouseY,posX,posY,rectSize);
  //
  // display(posX+100,posY+100,"red",rectSize);
  // check(mouseX,mouseY,posX+100,posY+100,rectSize);

// 3
  // display individual static shapes, return if statements
  background(255);
  display(posX,posY,colors,rectSize);

  var box1 = check(mouseX,mouseY,posX,posY,rectSize);
  if(box1 == true){
    background("green");
  }

  display(posX+100,posY+100,"red",rectSize);
  var box2 = check(mouseX,mouseY,posX+100,posY+100,rectSize);
  if(box2 == true){
    background("red");
  }
}

//
// // creating own function, concrete variables
// function display(){
//   fill(colors);
//   ellipse(posX,posY,rectSize,rectSize);
// }

//
// creating own function, dynamic variables, available to add values in "function draw(){}"
// variables declared inside function, cannot be used anywhere else in code
// 1st instruction - creating a square, filling with color
function display(tempX,tempY,tempC,tempS){
  fill(tempC);
  rect(tempX,tempY,tempS,tempS);
}

// 2nd instruction - created a hit zone using condensed code
function check(mX,mY,locX,locY,tempRsize){
  if(mX>locX && mX<locX + tempRsize && mY>locY && mY<locY + tempRsize){
    console.log("in box");
    // can return true or false, numbers, strings
    return true;
  }else{
    return false;
  }
}
