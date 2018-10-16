//Tip Tap Toe

var rectSize = 100;
//row1 square
var rect1X = 50;
var rect1Y = 75;
var rect2X = 150;
var rect2Y = 75;
var rect3X = 250;
var rect3Y = 75;
//row2 square
var rect4X = 50;
var rect4Y = 175;
var rect5X = 150;
var rect5Y = 175;
var rect6X = 250;
var rect6Y = 175;
//row3 square
var rect7X = 50;
var rect7Y = 275;
var rect8X = 150;
var rect8Y = 275;
var rect9X = 250;
var rect9Y = 275;

var tip;
var tap;

var Player1 = false;
var Player2 = false;

var tipButton;
var tapButton;

var tipShow = false;
var tapShow = false;

var cX = 100;
var cY = 250;
var cEdge = 20;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function preload() {
  tip = loadImage('assets/tip.png');
  tap = loadImage ('assets/tap.png');
}

function draw() {
  // put drawing code here
  background("pink");

  textSize(20);
  text("Tip Tap Toe", 20,30);
  fill("gray");

  //row 1 square
  rect(rect1X,rect1Y,rectSize,rectSize);
  rect(rect2X,rect2Y,rectSize,rectSize);
  rect(rect3X,rect3Y,rectSize,rectSize);
  //row 2 square
  rect(rect4X,rect4Y,rectSize,rectSize);
  rect(rect5X,rect5Y,rectSize,rectSize);
  rect(rect6X,rect6Y,rectSize,rectSize);
  //row 3 square
  rect(rect7X,rect7Y,rectSize,rectSize);
  rect(rect8X,rect8Y,rectSize,rectSize);
  rect(rect9X,rect9Y,rectSize,rectSize);

  //
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

  //
  imageMode(CENTER);
  image(tip,cX,cY,tip.width/4,tip.height/4);

  if(tipShow == true){
    image(tip,300,200);
  }

//
//   if(mouseX > rect1X && mouseX < rect1X + rectSize){
//     if(mouseY > rect1Y && mouseY < rect1Y + rectSize){
//       console.log("In here (box 1)");
//       image(tap,55,80,90,90);
//     }
// }

function mousePressed(){
    if(Player1 == false){
      Player1 = true;
    }else{
      Player1 = false;
    }
  }

//
  tipButton = createButton("Player 1");
  tipButton.position(51,45);
  tipButton.mousePressed(function(){
    if(Player1 == false){
      Player1 = true;
    }else{
      Player1 = false;
        console.log("Player 1")
    }
  });

}
