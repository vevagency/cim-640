//Tip Tap Toe : tic tac toe for dance schools

var rectSize = 100;
//
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
//
var tip;
var tap;

var Player1 = false;
var Player2 = false;
var NewGame = false;

var value = 0

// var Player1BoxX = [];
// var Player1BoxY = [];
// var Player2BoxX = [];
// var Player2BoxY = [];
//
// var holdDrawing = false;
// var choice = 0;
// var player1Turn = 1;
// var player2Turn = 1;
//

// var controls = {
//                   "Player1" : [60,400,50,"green"],
//                   "Player2" : [110,400,50,"red"],
//                   "Reset" : [160,400,50,"blue"],
//                 };

//
function setup() {
  // put setup code here
  createCanvas(400,400);

  // for(var keys in controls){
  //   console.log(keys + " values: " + controls[keys]);
  // }

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

  // BOX1
  rect(rect1X,rect1Y,rectSize,rectSize);

  if(mouseX > rect1X && mouseX < rect1X + rectSize){
    if(mouseY > rect1Y && mouseY < rect1X + rectSize){
      console.log("In here (box 1)");
      imageMode(CENTER);
      image(tip, mouseX, mouseY, tip.width/3,tip.height/3);
      // image(tip,70,75,tip.width/3,tip.height/3);
      // image(tap,55,80,90,90);
      function mouseReleased() {
        if (value === 0) {
          value = 255;
        } else {
          value = 0;
        }
        }
    }
}
  //row 1 squares
  // rect(rect1X,rect1Y,rectSize,rectSize);
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

// PLAYER 1 BUTTON
  tipButton = createButton("Player 1: Ballerina");
  tipButton.position(50,45);
  tipButton.mousePressed(function(){
    if(Player1 == false){
      Player1 = true;
    }else{
      Player1 = false;
    }
      console.log("player 1: " + Player1);
  });



// PLAYER 2 BUTTON
  tipButton = createButton("Player 2: Tap Dancer");
  tipButton.position(158,45);
  tipButton.mousePressed(function(){
    if(Player2 == false){
      Player2 = true;
    }else{
      Player2 = false;
    }
      console.log("player2: " + Player2);
  });

  // NEW GAME BUTTON
  tipButton = createButton("New Game");
  tipButton.position(280,45);
  tipButton.mousePressed(function(){
    if(NewGame == false){
      NewGame = true;
    }else{
      NewGame = false;
    }
      console.log("newGame: " + NewGame);
    });

// //
//   function mousePressed(){
//     var d = dist(mouseX,mouseY,rect1X,rect1Y);
//     if (d < rect1X,rect1Y);
//       image(tip,mouseX,mouseY,tip.width/3,tip.height/3);
//   }

    //ENABLE PLAYER 1 BUTTON FUNCTION
    // function mousePressed(){
    //     if(Player1 == false){
    //       Player1 = true;
    //     }else{
    //       Player1 = false;
    //     }
    //   }

//

}
