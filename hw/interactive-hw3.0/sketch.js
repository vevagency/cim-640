//1
var num1 = 5;
var charColor1 = "purple";
var charColor2 = "black";
var charColor3 = "gray";
  //var charColor3 = "#603913";
var facePosX = 200;
var facePosY = 200;
var eyeSize = 20;

//4 - dayAndNight
var r = 35;
var g = 240;
var b = 200;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

// //2 - dayAndNight pattern
// var curImage,rain;
//
// var selection; textInput, submitButton;
// var numberOfImages = 0;

//2
function preload() {
  rain=loadImage("assets/rain.png");
}

function setup() {
//1
  createCanvas(400,400);

//2 creates basic dropdown
  selection = createSelect();
  selection.position(10,10);
  selection.option("--");
  selection.option("rain");
}

//2
submitButton.mousePressed(function(){

  if(selection.value() == "sun"){
    curImage = sun;
  }else if(selection.value() == "rain"){
    curImage = rain;
  }

});

// when program first starts, shows default images
  curImage = sun;

function draw() {
//4
  frameRate(10);

  background(r,g,b);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

    //fresh page for draw loop
//1 background(35,240,200);
//2 dayAndNight pattern
  // frameRate(5);
//4 - dayAndNight
  textSize(15);
  fill('white');
  text("Place mouse over face and click to make happy!", 60,30);
  //
  stroke('green');
  strokeWeight(num1);
  //floor
  fill(charColor3);
  rect(-10,300,420,150);
  //stem
  line(200,200,200,350);
  //face
  fill(charColor1);
  ellipse(200,200,100,100);
  //eyes
  fill(charColor2);
  ellipse(190,190,eyeSize,eyeSize);
  ellipse(210,190,eyeSize,eyeSize);
  //nose
  stroke("green");
  point(width/2,height/1.9);
  //petals
  //(1st) lower right petal
  //added 200 to each standard quad value for positioning
  quad(238,231,286,220,269,263,230,276);
  //(2nd) upper left petal
  //subtracted standard quad values from 200 to balance
  quad(162,169,114,180,131,137,170,124);
  //(3rd) lower left petal
  //copied (2nd) quad and used (1st) quad y-values
  quad(162,231,114,220,131,263,170,276);
  //(4th) upper right petal
  //copied (1st) quad and used (2nd) quad y-values
  quad(238,169,286,180,269,137,230,124);

  //mouth
  arc(200, 230, 20, 20, PI, TWO_PI,CHORD);

  //adds movement
  facePosX = mouseX;
  facePosY = mouseY;

  //
  stroke('green');
  strokeWeight(num1);

  //eyes
  fill("yellow");
  ellipse(facePosX - 10,facePosY - 10,eyeSize,eyeSize);
  ellipse(facePosX + 10,facePosY - 10,eyeSize,eyeSize);

  //mouth
  arc(facePosX, facePosY + 30, 20, 20, PI, PI + 90, CHORD);
  //  arc(facePosX, facePosY + 30, 20, 20, TWO_PI, PI, CHORD);

}
//1
function mousePressed(){
  charColor1 = "magenta";
  charColor2 = "yellow";
  charColor3 = "#603913";

}
