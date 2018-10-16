var xPos = 0;
var yPos = 0;
var ballSize = 20;

//3
var trigger = false;

//5
var speed = 5;

function setup() {
  // put setup code here
  createCanvas(500,500);
  xPos = width/2;
  //6 change ball to move horizontal
  yPos = width/2;
}

function draw() {
  // put drawing code here
  background("pink");
  ellipse(xPos, yPos, ballSize, ballSize);

  //3 engine that moves ball forward and back
  if(trigger == false){
    //yPos++;
    xPos+=speed;
  }else{
    //yPos--;
    xPos-=speed;
  }

  // //1 move ball down and repeat by if statement
  // yPos++;
  // if(yPos > height){
  // //yPos = 0;
  //
  // //2 now ball stays between 499-500
  // yPos--;

  // 4 sensors
  if(xPos > height){
    trigger = true;
  }

  if(xPos < 0){
    trigger = false;
  }

  }
