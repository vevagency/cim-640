var a = 1;
var num1 = 5;
var b = 'b';
var word1 = "word"
var trueFalse = true;
var sentences = "I am a sentence";

var charColor = "purple";
var eyeSize = 25;

var facePosX = 200;
var facePosY = 200;

function setup() {
  //canvas dimensions
  createCanvas(400,400);
  //below all different formats for color
  background(0);
  background(255,255,255);
  background("orange");
  background("#333333");

  //what is this for again?
  console.log(a + num1);
  console.log(a - num1);
  console.log(a + b);

  //Single line comment
  //console.log(a * b);

  /*
  Block of comments
  */

  //this is only in setup scope
  var setupVariable = 5;
}

function draw() {
  //fresh page for draw loop
  background("white");
  //adds movement
  facePosX = mouseX;
  facePosY = mouseY;
  //colors eyes
  stroke('green');
  //
  strokeWeight(5);
  strokeWeight(num1);

  fill(charColor);
  //eyes
  ellipse(facePosX + 50,facePosY,50,50);
  ellipse(facePosX + 110,facePosY,50,50);
  //pupils
  ellipse(120,120,eyeSize,eyeSize);
  ellipse(280,120,eyeSize,eyeSize);
  //mouth
  rect(facePosX,facePosY + 200,180,20);
  line(facePosX + 10,facePosY + 220,facePosX + 210,facePosY,300,330);
  //mole
  stroke('green');
  strokeWeight(num1);
  point(width/2,height/2);
  //pacperson
  arc(facePosX + 100,facePosY + 100,100,100,QUARTER_PI, PI + HALF_PI + QUARTER_PI)


}

function mousePressed(){
  charColor = "blue";
}
