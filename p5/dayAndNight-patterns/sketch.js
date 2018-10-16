//1 create three variables in same line
var curImage,sun,moon;

//2 want to select sun or select moon
// var selection;

//7
var selection, textInput, submitButton;

var numberOfImages = 0;

//1
function preload() {
  sun=loadImage("assets/sun.png");
  moon=loadImage("assets/moon.png");
}

function setup() {
//1
  createCanvas(400,400);
//2 creates basic dropdown
  selection = createSelect();
  selection.position(10,10);
  selection.option("sun");
  selection.option("moon");
//3 change is equivalent to mouse pressed
  // sun and moon images represented by variables
  //
  selection.changed(function(){
  //4 gives you value of what is being selected
    //if the user chooses the sun, need corresponding image to show
    // if(selection.value() == "sun"){
    //   curImage = sun;
    // }else if(selection.value() == "moon"){
    //   curImage = moon;
    // }


    // console.log(selection.value());

  });

//7 draw x number of images, depending on number user has chosen
textInput = createInput("# of Images");
textInput.position(10,30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);
submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log(numberOfImages);

//11 - moved 4 to here
  if(selection.value() == "sun"){
    curImage = sun;
  }else if(selection.value() == "moon"){
    curImage = moon;
  }

});

//6 when program first starts, shows default images
  curImage = sun;
}

function draw() {
//10 adjust frame rate
  frameRate(5);
//1
  background(255);
//1 want to only activate one at a time
  //image(sun,10,10);
  //image(moon,10,10);

//8 four loop mechanism, takes three basic building blocks
  // one is a variable, starting point
  // second is a conditional / range, that sets how many times want loop to run
  // third is an irrirator
  // ++ means increase by one
//8
  // for(var i = 0; i<10; i++){
  //   console.log(i);

//10
  for(var i = 0; i<numberOfImages; i++){
    console.log(i);

//9 four loop drawing loop 10x for example
  image(curImage,random(width),random(height),curImage.width/random(1,5),curImage.height/random(1,5));
  }

//5 replace with curImage
  image(curImage,10,10);
}
