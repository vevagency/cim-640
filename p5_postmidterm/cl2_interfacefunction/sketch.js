var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

// 3
var button1, button2;

// array1
var buttonArray = [];

function setup() {
  // put setup code here
  createCanvas(400,400);

  //3 creating the button object in memory
  button1 = new interfaces(100,200,50,"red", "Red Button");
  button2 = new interfaces(200,200,50,"green", "Green Button");

  // array2 - i stands for button name to be determined
  for(var i = 0; i < 10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfaces (random(width), random(height), 50, c, i);
  }
}

function draw() {
  background(255);
  //3
  button1.display();
  if(button1.check(mouseX,mouseY)){
    console.log(button1.name);
  }
  button2.display();
  if(button2.check(mouseX,mouseY)){
    console.log(button2.name);
  }

  //array2
  for(var i = 0; i < buttonArray.length; i++){
    buttonArray[i].display();
    if(buttonArray[i].check(mouseX,mouseY)){
      console.log(buttonArray[i].name);
      background(buttonArray[i].color);
    }
  }

}

// display
function display(tempX,tempY,tempC,tempS){
  fill(tempC);
  rect(tempX,tempY,tempS,tempS);
}

// check
function check(mX,mY,locX,locY,tempRsize){
  if(mX>locX && mX<locX + tempRsize && mY>locY && mY<locY + tempRsize){
    console.log("in box");
    // can return true or false, numbers, strings
    return true;
  }else{
    return false;
  }
}

// CL2 interface -
// 1 constructor - characteristics for your object
class interfaces{
  constructor(tempX,tempY,tempS,tempC,tempName){
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    // overlay1
    this.overlay = false;
  }

// 2 most basic of interface objects
  display(){

    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
    // can add label to buttons; individual characteristics of a button
    text(this.name, this.x, this.y - 10);

    // overlay2
    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.size,this.size);
    }
  }

  check(mX,mY){
    if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
      // overlay3
      this.overlay = true;
      // original return mouse x mouse y
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }

}
