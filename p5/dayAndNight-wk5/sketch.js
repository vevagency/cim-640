//basic setup for an image

var sun;
var moon;
var color1 = "black"
var color2 = "white"

var r = 255;
var g = 255;
var b = 255;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

// EXAMPLE 2 - shift sun down or up
var cX = 100;
var cY = 250;
var cEdge = 20;

// EXAMPLE 2 - show sun yes or no
var sunShow = false;

// EXAMPLE 3
var sunButton;

//pre-setup
//necessary for loading images/assets quick load
function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage ('assets/moon.png');
}

function setup() {
  //put setup code here
  createCanvas(400,400);

  //EXAMPLE 3
  sunButton = createButton("Press to show/hide sun");
  sunButton.position(500,100);
  sunButton.mousePressed(function(){
    if(sunShow == false){
      sunShow = true;
    }else{
      sunShow = false;
    }
  });

}

// EXAMPLE 1 - color within box plus click to change color

function draw() {

  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);
}

// // change color on click
// function mousePressed(){
//   if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
//     r = random(0,256);
//     g = random(0,256);
//     b = random(0,256);
//   }
// }

// EXAMPLE 2 - click on image, click to show, click to hide

function draw() {
  //add background to loop to see click show/hide
  background(255);
  //
  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);
  imageMode(CENTER);
  image(sun,cX,cY,sun.width/4,sun.height/4);

  if(sunShow == true){
    image(sun,300,200);
  }
}

// change color on click
function mousePressed(){
  if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    r = random(0,256);
    g = random(0,256);
    b = random(0,256);
  }

    // single = sets / double equal == compares
    var sunDist = dist(mouseX,mouseY,cX,cY);
    console.log("sun Dist: " + sunDist);
    if(sunDist < 40){
      //show/hide sun image
      if(sunShow == false){
        sunShow = true;
      }else{
        sunShow = false;
      }
      console.log(sunShow);
    }
  }

  // // EXAMPLE 3 - button
  //
  // function draw() {
  //   //add background to loop to see click show/hide
  //   background(255);
  //   //
  //   fill(r,g,b);
  //   rect(rectX,rectY,rectSize,rectSize);
  //   imageMode(CENTER);
  //   image(sun,cX,cY,sun.width/4,sun.height/4);
  //
  //   if(sunShow == true){
  //     image(sun,300,200);
  //   }
  // }
  //
  // // change color on click
  // function mousePressed(){
  //   if(mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
  //     r = random(0,256);
  //     g = random(0,256);
  //     b = random(0,256);
  //   }
  //
  //     // single = sets / double equal == compares
  //     var sunDist = dist(mouseX,mouseY,cX,cY);
  //     console.log("sun Dist: " + sunDist);
  //     if(sunDist < 40){
  //       //show/hide sun image
  //       if(sunShow == false){
  //         sunShow = true;
  //       }else{
  //         sunShow = false;
  //       }
  //       console.log(sunShow);
  //     }
  //   }
