var xPos = 0;
var yPos = 0;
var ballSize = 20;

//3
var trigger = false;

//7
var trigger2 = false;

//5
var speed = 5;

function setup() {
  // put setup code here
  createCanvas(500,500);
  xPos = width/2;
  //6 change ball to move horizontal
  //7 null out to make bounce around, or keep not null to go diagonal
  // yPos = width/2;
}

function draw() {
  // put drawing code here
  background("pink");
  ellipse(xPos, yPos, ballSize, ballSize);

  //3 engine that moves ball forward and back
  if(trigger == false){
    //yPos++;
    yPos+=speed;
  }else{
    //yPos--;
    yPos-=speed;
  }

  //7
  if(trigger2 == false){
    xPos+=speed;
  }else{
    xPos-=speed;
  }

  // 4 sensors
  if(yPos > height){
    trigger = true;
  }

  if(yPos < 0){
    trigger = false;
  }

  //7
  if(xPos > width){
    trigger2 = true;
  }

  if(xPos < 0){
    trigger2 = false;
  }
  }
