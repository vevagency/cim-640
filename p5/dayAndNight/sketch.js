//basic setup for an image

var sun;
var moon;
var color1 = "black"
var color2 = "white"

var r = 255;
var g = 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

//pre-setup
//necessary for loading images/assets quick load
function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage ('assets/moon.png');
}

function setup() {
  //put setup code here
  createCanvas(400,400);
}

function draw() {
  //to display an image(var,x,y) or image(var,x,y,w,h)
  frameRate(10);

  background(r,g,b);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
  //interface
  textSize(20);
  text("Move over each area to reveal a surprise!", 20,30);
  line(width/2, 0, width/2, height);
  text("Day",80,360);
  text("Night",290,360);

  //interaction

  /*
  if(true){
    Execute this code
  }
  */

  //check developer tools to see if mechanism is running

//  if(mouseX <= width/2){
//    console.log("Day Side");
//    image(sun,20,100);
//  }

//  if(mouseX >= width/2){
//    console.log("Night Side");
//    image(moon,160,100);
//  }

// And statements: first condition and second condition have to be true.
  if(mouseX > 0 && mouseX < width/2){
    console.log("Day Side");
    image(sun,20,100);
  }

  if(mouseX >= width/2 && mouseX < width){
    console.log("Night Side");
    image(moon,160,100);
  }

  ellipse(cX,cY,cEdge);
  var cDist = dist(cX,cY, mouseX, mouseY);
  console.log("cDist: " + cDist);

  if(cDist < 10){
    r = 255;
    g = 0;
    b = 0;
  }else{
    r = 255;
    g = 255;
    b = 255;
  }



if(mouseX > rectX && mouseX < rectX + rectSize){
  if(mouseY > rectY && mouseY < rectY + rectSize){
    console.log("In here");
    r = random(256);
    g = random(0,256);
    b = random(256);
  }
}
}

// fill(r,g,b);
// rect(rectX,rectY,rectSize,rectSize);



// if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
//     console.log("In here");
// }

  //end of code


//if doesn't work, first view index.html and view console in browser developer tools;
//syntax error means there is something wrong in your code
