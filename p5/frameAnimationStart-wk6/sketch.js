// create an array for images, load all images in, to then sequentially load images

//2 setup variables
  // how many frames
  var frameAmounts = 4;
  //
  var frameArray = [];
  //8
  var currentFrame = 0;

//13 - 2000 miliseconds
  var interval = 500;
  var prevMillis = 0;

//1 - bc working with images
function preload(){
  // //2 string represents path of where image is in computer
  // var frameString = "assets/Thatwasclose0.jpg";
  // //3 load image based on path giving it
  // frameArray[0] = loadImage(frameString);

  //6 - create for loop
  for(var frames = 0; frames< frameAmounts; frames++){
    //7 cancel out //2 and //3 and paste here
      //remove 0 out of Thatwasclose and replace with frames
    var frameString = "assets/Thatwasclose" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}

//1
function setup(){
  //4
    createCanvas(500,500);
}

//1
function draw(){
  //6 slow down to 1 frame per second (30 frames per second)
    //frame rate slows down the draw loop to entire frame rate, including mouse
    //frame rate not best tool to slow down rate
    // frameRate(1)

  //12 - millisc (milliseconds) how to create a timer, when seconds have passed, do something
  //1,000 milliseconds equals 1 seconds
    // console.log(millis());


  //5 - now image is on the screen
    // next need a loop, and need to setup frameString to account for other images
      //image(frameArray[0],0,0);
    //remove 0 with currentFrame, similar to //7
        image(frameArray[currentFrame],0,0);

//13 -
  if(millis() - prevMillis> interval){
    //8
    currentFrame++;
    //13
    prevMillis = millis();
  }

  // //10
  // console.log(currentFrame);

  //9 4 is greater than 3 so it resets to 0
  if(currentFrame > frameAmounts-1){
      currentFrame = 0;
  }
  //11 to view mouse responsiveness
  ellipse(mouseX,mouseY,10,10);
}

////end of code
