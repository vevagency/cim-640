//Tip Tap Toe : tic tac toe for dance schools

//
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

var Player1 = false;
var Player2 = false;
var NewGame = false;

//
// var value = 0
//
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
  createCanvas(600,450);

  textSize(20);
  fill(186,32,156);
  text("Tip Tap Toe", 20,30);
  image(logo,400,0,logo.width/2,logo.height/2);
  textSize(10);
  fill(186,32,156);
  text("Instructions: You know how this dance goes! 3 in a row is the winner.", 50,400);
  text("- Select 'Player 1' or 'Player 2' before each player's turn.", 50,420);
  text("- Select 'New Game' to clear the board.", 50,440);
  //

  //row 1 squares
  fill(222,186,205);
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

  // for(var keys in controls){
  //   console.log(keys + " values: " + controls[keys]);
  // }

  //   if(mouseX > rect1X && mouseX < rect1X + rectSize){
  //     if(mouseY > rect1Y && mouseY < rect1X + rectSize){
  //       console.log("In here (box 1)");
  //       imageMode(CENTER);
  //       image(tip, mouseX, mouseY, tip.width/3,tip.height/3);
  //       // image(tip,70,75,tip.width/3,tip.height/3);
  //       // image(tap,55,80,90,90);
  //       function mouseReleased() {
  //         if (value === 0) {
  //           value = 255;
  //         } else {
  //           value = 0;
  //         }
  //         }
  //     }
  // }

}

function preload() {
  tip = loadImage('assets/tip.png');
  tap = loadImage ('assets/tap.png');
  logo = loadImage ('assets/logo.png');
}

function draw() {
  // put drawing code here

  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

// PLAYER 1 BUTTON
  tipButton = createButton("Player 1: Ballerina");
  // fill(186,32,156);
  tipButton.position(50,45);
  tipButton.mousePressed(function(){
    if(Player1 == false){
      Player1 = true;
      Player2 = false;
    }
      console.log("player 1: " + Player1);
  });

// PLAYER 2 BUTTON
  tipButton = createButton("Player 2: Tap Dancer");
  tipButton.position(158,45);
  tipButton.mousePressed(function(){
    if(Player2 == false){
      Player2 = true;
      Player1 = false;
    }
      console.log("player2: " + Player2);
  });

  // NEW GAME BUTTON
  tipButton = createButton("New Game");
  tipButton.position(280,45);
  tipButton.mousePressed(function(){
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
    Player1 = false;
    Player2 = false;
    //
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
// BOX1
  if (box1full == false){
  if (box1==true){
    if (Player1 == true){
      image(tip,rect1X + 20, rect1Y,tip.width/3, tip.height/3);
      box1full = true;
    }
    if (Player2 == true){
      image(tap,rect1X - 2, rect1Y + 2,tap.width/3, tap.height/3);
      box1full=true;
    }
  }
}
// BOX2
  if (box2full == false){
  if (box2==true){
    if (Player1 == true){
      image(tip,rect2X + 20, rect2Y,tip.width/3, tip.height/3);
      box2full = true;
    }
    if (Player2 == true){
      image(tap,rect2X - 2, rect2Y + 2,tap.width/3, tap.height/3);
      box2full=true;
    }
  }
}
// BOX3
  if (box3full == false){
  if (box3==true){
    if (Player1 == true){
      image(tip,rect3X + 20, rect3Y,tip.width/3, tip.height/3);
      box3full = true;
    }
    if (Player2 == true){
      image(tap,rect3X - 2, rect3Y + 2,tap.width/3, tap.height/3);
      box3full=true;
    }
  }
}
// BOX4
  if (box4full == false){
  if (box4==true){
    if (Player1 == true){
      image(tip,rect4X + 20, rect4Y,tip.width/3, tip.height/3);
      box4full = true;
    }
    if (Player2 == true){
      image(tap,rect4X - 2, rect4Y + 2,tap.width/3, tap.height/3);
      box4full=true;
    }
  }
}
// BOX5
  if (box5full == false){
  if (box5==true){
    if (Player1 == true){
      image(tip,rect5X + 20, rect5Y,tip.width/3, tip.height/3);
      box5full = true;
    }
    if (Player2 == true){
      image(tap,rect5X - 2, rect5Y + 2,tap.width/3, tap.height/3);
      box5full=true;
    }
  }
}
// BOX6
  if (box6full == false){
  if (box6==true){
    if (Player1 == true){
      image(tip,rect6X + 20, rect6Y,tip.width/3, tip.height/3);
      box6full = true;
    }
    if (Player2 == true){
      image(tap,rect6X - 2, rect6Y + 2,tap.width/3, tap.height/3);
      box6full=true;
    }
  }
}
// BOX7
  if (box7full == false){
  if (box7==true){
    if (Player1 == true){
      image(tip,rect7X + 20, rect7Y,tip.width/3, tip.height/3);
      box7full = true;
    }
    if (Player2 == true){
      image(tap,rect7X - 2, rect7Y + 2,tap.width/3, tap.height/3);
      box7full=true;
    }
  }
}
// BOX8
  if (box8full == false){
  if (box8==true){
    if (Player1 == true){
      image(tip,rect8X + 20, rect8Y,tip.width/3, tip.height/3);
      box8full = true;
    }
    if (Player2 == true){
      image(tap,rect8X - 2, rect8Y + 2,tap.width/3, tap.height/3);
      box8full=true;
    }
  }
}
// BOX9
  if (box9full == false){
  if (box9==true){
    if (Player1 == true){
      image(tip,rect9X + 20, rect9Y,tip.width/3, tip.height/3);
      box9full = true;
    }
    if (Player2 == true){
      image(tap,rect9X - 2, rect9Y + 2,tap.width/3, tap.height/3);
      box9full=true;
    }
  }
}
//
}

function mousePressed(){
// BOX1
  if (box1==false){
    if(mouseX > rect1X && mouseX < rect1X + rectSize && mouseY > rect1Y && mouseY < rect1Y + rectSize){
      console.log("In here (box 1)");
      // if (Player1==true){
        box1=true;
  }
}
// BOX2
  if (box2==false){
    if(mouseX > rect2X && mouseX < rect2X + rectSize && mouseY > rect2Y && mouseY < rect2Y + rectSize){
      console.log("In here (box 2)");
      // if (Player1==true){
        box2=true;
  }
}
// BOX3
  if (box3==false){
    if(mouseX > rect3X && mouseX < rect3X + rectSize && mouseY > rect3Y && mouseY < rect3Y + rectSize){
      console.log("In here (box 3)");
      // if (Player1==true){
        box3=true;
  }
}
// BOX4
  if (box4==false){
    if(mouseX > rect4X && mouseX < rect4X + rectSize && mouseY > rect4Y && mouseY < rect4Y + rectSize){
      console.log("In here (box 4)");
      // if (Player1==true){
        box4=true;
  }
}
// BOX5
  if (box5==false){
    if(mouseX > rect5X && mouseX < rect5X + rectSize && mouseY > rect5Y && mouseY < rect5Y + rectSize){
      console.log("In here (box 5)");
      // if (Player1==true){
        box5=true;
  }
}
// BOX6
  if (box6==false){
    if(mouseX > rect6X && mouseX < rect6X + rectSize && mouseY > rect6Y && mouseY < rect6Y + rectSize){
      console.log("In here (box 6)");
      // if (Player1==true){
        box6=true;
  }
}
// BOX7
  if (box7==false){
    if(mouseX > rect7X && mouseX < rect7X + rectSize && mouseY > rect7Y && mouseY < rect7Y + rectSize){
      console.log("In here (box 7)");
      // if (Player1==true){
        box7=true;
  }
}
// BOX8
  if (box8==false){
    if(mouseX > rect8X && mouseX < rect8X + rectSize && mouseY > rect8Y && mouseY < rect8Y + rectSize){
      console.log("In here (box 8)");
      // if (Player1==true){
        box8=true;
  }
}
// BOX9
  if (box9==false){
    if(mouseX > rect9X && mouseX < rect9X + rectSize && mouseY > rect9Y && mouseY < rect9Y + rectSize){
      console.log("In here (box 9)");
      // if (Player1==true){
        box9=true;
  }
}
//
}
