//Tip Tap Toe : tic tac toe for dance schools

// by default false
var box1=false;
var box1full=false;
var box2=false;
var box2full=false;
var box3=false;
var box3full=false;
//
var box4=false;
var box4full=false;
var box5=false;
var box5full=false;
var box6=false;
var box6full=false;
//
var box7=false;
var box7full=false;
var box8=false;
var box8full=false;
var box9=false;
var box9full=false;
//
var rectSize = 100;
//
var rectsm = false;
var rectsmfull = false;
var rectsmX = 400;
var rectsmY = 400;
var link;
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
var logo;
//

var Player1 = false;
var Player2 = false;
var NewGame = false;


var p1Win=false;
var p2Win=false;
var pattern=[];

//
// var controls = {
//                   "Player1" : [60,400,50,"green"],
//                   "Player2" : [110,400,50,"red"],
//                   "Reset" : [160,400,50,"blue"],
//                 };

function preload() {
  tip = loadImage('assets/tip.png');
  tap = loadImage ('assets/tap.png');
  logo = loadImage ('assets/logo.png');
  bck = loadImage('assets/backgroundimg.jpeg');
  bck2 = loadImage('assets/bck2.gif');
  bck3 = loadImage('assets/bck3.jpg');
  font = loadFont('assets/sweetfont.ttf');
  font2 = loadFont('assets/Snowinter.otf');
}

//
function setup() {
  // put setup code here
  createCanvas(600,450);

  Player1=true;
  Player2=false;

  image(bck3,0,0,600,450);
  image(logo,400,0,logo.width/2,logo.height/2);
  textSize(20);
  // fill(186,32,156);
  textFont(font);
  strokeWeight(2);
  stroke("blue");
  fill("white");
  text("Tip Tap Toe  Dance Battle", 20,30);
  textFont(font2);
  textSize(15);
  fill("white");
  stroke('blue');
  strokeWeight(.5);
  text("You know how this dance goes!", 50,395);
  text("- Winner gets 3 in a row, or it's a draw.", 50,415);
  text("- Select New Game to clear the board.", 50,435);
  //

  //row 1 squares
  fill(222,186,205);
  strokeWeight(2);
  stroke("purple");
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

  for(i=0;i<9;i++)
  {
    pattern[i]=false;
  }

}

function draw() {
  // put drawing code hereif
  console.log("player1 :"+Player1   +"   player2 :"+ Player2);

if(Player1==false)
{
  Player2=true;

}

if(Player2==false)
{
  Player1=true;
}

  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

// // social media
  // if (link.mousePressed){
  //   link(www.instagram.com);
  // }

// // PLAYER 1 BUTTON
//   tipButton = createButton("Player 1: Ballerina");
//   // fill(186,32,156);
//   tipButton.position(50,45);
//   tipButton.mousePressed(function(){
//     if(Player1 == false){
//       Player1 = true;
//       Player2 = false;
//     }
//       console.log("player 1: " + Player1);
//   });
//
// // PLAYER 2 BUTTON
//   tipButton = createButton("Player 2: Tap Dancer");
//   tipButton.position(158,45);
//   tipButton.mousePressed(function(){
//     if(Player2 == false){
//       Player2 = true;
//       Player1 = false;
//     }
//       console.log("player2: " + Player2);
//   });

  // NEW GAME BUTTON
  tipButton = createButton("New Game");
  tipButton.position(280,47);
  tipButton.mousePressed(function(){
    fill(222,186,205);
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
    box1=false;
    box1full=false;
    box2=false;
    box2full=false;
    box3=false;
    box3full=false;
    //
    box4=false;
    box4full=false;
    box5=false;
    box5full=false;
    box6=false;
    box6full=false;
    //
    box7=false;
    box7full=false;
    box8=false;
    box8full=false;
    box9=false;
    box9full=false;
    //
    Player1 = true;
    Player2 = false;
    //
    for(i=0;i<9;i++)
    {
      pattern[i]=false;
    }

    p1Win=false;
    p2Win=false;

    //
    console.log("newGame: " + NewGame);

  });

    //ENABLE PLAYER 1 BUTTON FUNCTION
    // function mousePressed(){
    //     if(Player1 == false){
    //       Player1 = true;
    //     }else{
    //       Player1 = false;
    //     }
    //   }

//

// BOX1
  if (box1full == false){
  if (box1==true){
    if (Player1 == true){
      image(tip,rect1X + 20, rect1Y,tip.width/3, tip.height/3);
      box1full = true;
      pattern[0]="player1";
      Player1=false;

    }
    else if (Player2 == true){
      image(tap,rect1X - 2, rect1Y + 2,tap.width/3, tap.height/3);
      box1full=true;
      pattern[0]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX2
  if (box2full == false){
  if (box2==true){
    if (Player1 == true){
      image(tip,rect2X + 20, rect2Y,tip.width/3, tip.height/3);
      box2full = true;
      pattern[1]="player1";
      Player1=false;

    }
    else if (Player2 == true){
      image(tap,rect2X - 2, rect2Y + 2,tap.width/3, tap.height/3);
      box2full=true;
      pattern[1]="player2";

      Player2=false;
      Player1=true;
    }
  }
}
// BOX3
  if (box3full == false){
  if (box3==true){
    if (Player1 == true){
      image(tip,rect3X + 20, rect3Y,tip.width/3, tip.height/3);
      box3full = true;
      pattern[2]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect3X - 2, rect3Y + 2,tap.width/3, tap.height/3);
      box3full=true;
      pattern[2]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX4
  if (box4full == false){
  if (box4==true){
    if (Player1 == true){
      image(tip,rect4X + 20, rect4Y,tip.width/3, tip.height/3);
      box4full = true;
      pattern[3]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect4X - 2, rect4Y + 2,tap.width/3, tap.height/3);
      box4full=true;
      pattern[3]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX5
  if (box5full == false){
  if (box5==true){
    if (Player1 == true){
      image(tip,rect5X + 20, rect5Y,tip.width/3, tip.height/3);
      box5full = true;
      pattern[4]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect5X - 2, rect5Y + 2,tap.width/3, tap.height/3);
      box5full=true;
      pattern[4]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX6
  if (box6full == false){
  if (box6==true){
    if (Player1 == true){
      image(tip,rect6X + 20, rect6Y,tip.width/3, tip.height/3);
      box6full = true;
      pattern[5]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect6X - 2, rect6Y + 2,tap.width/3, tap.height/3);
      box6full=true;
      pattern[5]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX7
  if (box7full == false){
  if (box7==true){
    if (Player1 == true){
      image(tip,rect7X + 20, rect7Y,tip.width/3, tip.height/3);
      box7full = true;
      pattern[6]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect7X - 2, rect7Y + 2,tap.width/3, tap.height/3);
      box7full=true;
      pattern[6]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX8
  if (box8full == false){
  if (box8==true){
    if (Player1 == true){
      image(tip,rect8X + 20, rect8Y,tip.width/3, tip.height/3);
      box8full = true;
      pattern[7]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect8X - 2, rect8Y + 2,tap.width/3, tap.height/3);
      box8full=true;
      pattern[7]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
// BOX9
  if (box9full == false){
  if (box9==true){
    if (Player1 == true){
      image(tip,rect9X + 20, rect9Y,tip.width/3, tip.height/3);
      box9full = true;
      pattern[8]="player1";
      Player1=false;

    }
    if (Player2 == true){
      image(tap,rect9X - 2, rect9Y + 2,tap.width/3, tap.height/3);
      box9full=true;
      pattern[8]="player2";
      Player2=false;
      Player1=true;
    }
  }
}
//

// PLAYER 1 - Feedback Winner!

// P1 R1
if(pattern[0]=="player1" && pattern[1]=="player1" &&pattern[2]=="player1")
{
  //line
  fill("black");
  rect(rect1X + 5, rect1Y + 50,290,2);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 R1
else if(pattern[0]=="player2" && pattern[1]=="player2" &&pattern[2]=="player2")
{
  //line
  fill("black");
  rect(rect1X + 5, rect1Y + 50,290,2);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 R2
if(pattern[3]=="player1" && pattern[4]=="player1" &&pattern[5]=="player1")
{
  //line
  fill("black");
  rect(rect4X + 5, rect4Y + 50,290,2);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 R2
if(pattern[3]=="player2" && pattern[4]=="player2" &&pattern[5]=="player2")
{
  //line
  fill("black");
  rect(rect4X + 5, rect4Y + 50,290,2);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 R3
if(pattern[6]=="player1" && pattern[7]=="player1" &&pattern[8]=="player1")
{
  //line
  fill("black");
  rect(rect7X + 5, rect7Y + 50,290,2);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 R3
if(pattern[6]=="player2" && pattern[7]=="player2" &&pattern[8]=="player2")
{
  //line
  fill("black");
  rect(rect7X + 5, rect7Y + 50,290,2);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 C1
if(pattern[0]=="player1" && pattern[3]=="player1" &&pattern[6]=="player1")
{
  //line
  fill("black");
  rect(rect1X + 50, rect1Y + 5,2,290);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 C1
if(pattern[0]=="player2" && pattern[3]=="player2" &&pattern[6]=="player2")
{
  //line
  fill("black");
  rect(rect1X + 50, rect1Y + 5,2,290);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 C2
if(pattern[1]=="player1" && pattern[4]=="player1" &&pattern[7]=="player1")
{
  //line
  fill("black");
  rect(rect2X + 50, rect1Y + 5,2,290);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 C2
if(pattern[1]=="player2" && pattern[4]=="player2" &&pattern[7]=="player2")
{
  //line
  fill("black");
  rect(rect2X + 50, rect1Y + 5,2,290);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 C3
if(pattern[2]=="player1" && pattern[5]=="player1" &&pattern[8]=="player1")
{
  //line
  fill("black");
  rect(rect3X + 50, rect1Y + 5,2,290);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 C3
if(pattern[2]=="player2" && pattern[5]=="player2" &&pattern[8]=="player2")
{
  //line
  // line(rect3X + 50, rect1Y + 5, rect9X + 50, rect9Y + 95);
  rect(rect3X + 50, rect1Y + 5,2,290);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 D1
if(pattern[0]=="player1" && pattern[4]=="player1" &&pattern[8]=="player1")
{
  //line
  fill("black");
  strokeWeight(3);
  line(rect1X + 5, rect1Y + 5, rect9X + 95, rect9Y + 95);
  // rect(rect3X + 50, rect1Y + 5,2,290);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 D1
if(pattern[0]=="player2" && pattern[4]=="player2" &&pattern[8]=="player2")
{
  //line
  fill("black");
  strokeWeight(3);
  line(rect1X + 5, rect1Y + 5, rect9X + 95, rect9Y + 95);
  // rect(rect3X + 50, rect1Y + 5,2,290);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

// P1 D2
if(pattern[2]=="player1" && pattern[4]=="player1" &&pattern[6]=="player1")
{
  //line
  fill("black");
  strokeWeight(3);
  line(rect3X + 95, rect3Y + 5, rect7X + 5, rect7Y + 95);
  // rect(rect3X + 50, rect1Y + 5,2,290);
  //text
  textSize(45);
  textFont(font2);
  fill("white");
  text("Ballet Wins!",rect4X + 42,rect5Y + 62);
  p1Win=true;
}

// P2 D2
if(pattern[2]=="player2" && pattern[4]=="player2" &&pattern[6]=="player2")
{
  //line
  fill("black");
  strokeWeight(2);
  line(rect3X + 95, rect3Y + 5, rect7X + 5, rect7Y + 95);
  // rect(rect3X + 50, rect1Y + 5,2,290);
  //text
  textSize(40);
  textFont(font2);
  fill("white");
  text("Tap Dancer Wins!",rect4X + 17,rect5Y + 62);
  p2Win=true;
}

if(p1Win!=true && p2Win!=true && box1full!=false && box2full!=false && box3full!=false && box4full!=false && box5full!=false && box6full!=false && box7full!=false && box8full!=false && box9full!=false)
{
  //text
  textSize(50);
  textFont(font2);
  fill("white");
  text("It's a draw",rect4X + 43,rect5Y + 62);
}

// Player turn text

if(Player1)
{
  fill("purple");
  rect(rect1X - 10,rect1Y - 33, 320, 28);
  fill("pink");
  textSize(20);
  text("Player 1 - Ballerina",rect1X + 5,rect1Y - 14);
  stroke("purple");

}

else if(Player2)
{
  fill("purple");
  rect(rect1X - 10,rect1Y - 33, 320, 28);
  fill("pink");
  textSize(20);
  text("Player 2 - Tap Dancer",rect1X +5,rect1Y - 14);
  stroke("purple");
}
//
}

function mousePressed(){

// BOX1
  if (box1==false){
    if(mouseX > rect1X && mouseX < rect1X + rectSize && mouseY > rect1Y && mouseY < rect1Y + rectSize){
      console.log("In here (box 1)");
        box1=true;
  }
}
// BOX2
  if (box2==false){
    if(mouseX > rect2X && mouseX < rect2X + rectSize && mouseY > rect2Y && mouseY < rect2Y + rectSize){
      console.log("In here (box 2)");
        box2=true;
  }
}
// BOX3
  if (box3==false){
    if(mouseX > rect3X && mouseX < rect3X + rectSize && mouseY > rect3Y && mouseY < rect3Y + rectSize){
      console.log("In here (box 3)");
        box3=true;
  }
}
// BOX4
  if (box4==false){
    if(mouseX > rect4X && mouseX < rect4X + rectSize && mouseY > rect4Y && mouseY < rect4Y + rectSize){
      console.log("In here (box 4)");
        box4=true;
  }
}
// BOX5
  if (box5==false){
    if(mouseX > rect5X && mouseX < rect5X + rectSize && mouseY > rect5Y && mouseY < rect5Y + rectSize){
      console.log("In here (box 5)");
        box5=true;
  }
}
// BOX6
  if (box6==false){
    if(mouseX > rect6X && mouseX < rect6X + rectSize && mouseY > rect6Y && mouseY < rect6Y + rectSize){
      console.log("In here (box 6)");
        box6=true;
  }
}
// BOX7
  if (box7==false){
    if(mouseX > rect7X && mouseX < rect7X + rectSize && mouseY > rect7Y && mouseY < rect7Y + rectSize){
      console.log("In here (box 7)");
        box7=true;
  }
}
// BOX8
  if (box8==false){
    if(mouseX > rect8X && mouseX < rect8X + rectSize && mouseY > rect8Y && mouseY < rect8Y + rectSize){
      console.log("In here (box 8)");
        box8=true;
  }
}
// BOX9
  if (box9==false){
    if(mouseX > rect9X && mouseX < rect9X + rectSize && mouseY > rect9Y && mouseY < rect9Y + rectSize){
      console.log("In here (box 9)");
        box9=true;
  }
}

// BOX SM
  if (rectsmfull == false){
  if (rectsm==true){
    if (Player1 == true){
      window.open("https://www.google.com/search?q=dance+empire&oq=dance+empire&aqs=chrome.0.69i59j69i60l2j69i59j0l2.1528j1j4&sourceid=chrome&ie=UTF-8");
      boxsmfull = true;
      Player1=false;

    }
    else if (Player2 == true){
      window.open("https://www.google.com/search?q=dance+empire&oq=dance+empire&aqs=chrome.0.69i59j69i60l2j69i59j0l2.1528j1j4&sourceid=chrome&ie=UTF-8");
      boxsmfull=true;
      Player2=false;
      Player1=true;
    }
  }
}

// Web Link
if (rectsm==false){
  if(mouseX > rectsmX && mouseX < rectsmX + rectSize && mouseY > rectsmY && mouseY < rectsmY + rectSize){
    console.log("In here (box sm)");
      rectsm=true;
      window.open("https://www.google.com/search?q=dance+empire&oq=dance+empire&aqs=chrome.0.69i59j69i60l2j69i59j0l2.1528j1j4&sourceid=chrome&ie=UTF-8");
    }
}


}
