var curImage,sun,moon;

var selection,textInput,submitButton;

//1A
// var posX = [0,100,200,300];
// var posY = [0,100,200,300];

// any number of suns or moons user wants to generate
var posX = [];
var posY = [];

var numberOfImages = 0;

//1
function preload(){
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
  selection.changed(function(){
    // console.log(selection.value());

  });

textInput = createInput("# of Images");
textInput.position(10,30);

submitButton = createButton("Create Pattern");
submitButton.position(10,50);
submitButton.mousePressed(function(){
  numberOfImages = textInput.value();
  console.log(numberOfImages);

  if(selection.value() == "sun"){
    curImage = sun;
  }else if(selection.value() == "moon"){
    curImage = moon;
  }

// redeclare to make sure posX & posY are empty, use them, draw them, and if user again selects, going to remove old values, and create empty array

  posX = [];
  posY = [];

//An array that is going to be populated by x amount of numbers
  for(var a = 0; a < numberOfImages; a++){
      posX[a] = random(width);
      posY[a] = random(height);
      console.log("x: " + posX[a] + " y: " + posY[a]);
  }

});

  curImage = sun;

//  console.log(posX[1]);
}

function draw() {
  background(255);
//loop based on number of Images
  for(var i = 0; i<numberOfImages; i++){
//loop based on length of array
  // for(var i = 0; i<posX.length; i++){
//what do you want program to do? loop through array and use for Images
    image(curImage,posX[i],posY[i], curImage.width/4, curImage.height/4);
  }
}

// end of code
