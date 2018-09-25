//1 hw/drawing-hw2
var num1 = 5;
var charColor1 = "purple";
var charColor2 = "black";
var charColor3 = "gray";
  //var charColor3 = "#603913";
var facePosX = 200;
var facePosY = 200;
var eyeSize = 20;

//2 - p5/dayAndNight
var r = 35;
var g = 240;
var b = 200;

var rectX = 25;
var rectY = 25;
var rectSize = 25;

function setup() {
  createCanvas(400,400);
}

function draw() {

//4 - p5/dayAndNight
  frameRate(10);
  background(r,g,b);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

  textSize(10);
  fill('black');
  strokeWeight(2);
  stroke("yellow");
  text("1) Drag mouse over square to view earthquake! Flower is sad.", 60,33);

  textSize(10);
  strokeWeight(2);
  text("2) Drag mouse on Flower's face to stop earthquake & click to make happy.", 60,50);


//1 - hw/drawing-hw2
  stroke('green');
  strokeWeight(num1);
  //rectangle
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

//3 - dayAndNight-wk5
  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);
  var rectDist = dist(rectX,rectY, mouseX, mouseY);
  console.log("rectDist: " + rectDist);

  if(rectDist < 10){
    r = 255;
    g = 0;
    b = 0;
  }else{
    r = 35;
    g = 240;
    b = 200;
  }

  if(mouseX > rectX && mouseX < rectX + rectSize){
    if(mouseY > rectY && mouseY < rectY + rectSize){
      console.log("In here");
      r = random(256);
      g = random(0,256);
      b = random(256);
    }
  }

//1 adds movement
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

//3 - dayAndNight-wk5
  if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    r = random(0,256);
    g = random(0,256);
    b = random(0,256);
  }
}
