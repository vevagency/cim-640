// create an array for images, load all images in,
// to then sequentially load images

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

// //wk7-14
//   var interval2 = 500;
//   var prevMillis2 = 0;
//   var counter = 0;

// wk7-15
// want to set up a pattern within curly braces
// series of values: location of play button, color of button, etc.
// set position for button
  var controls = {
                    "play" : [60,400,50,"green"],
                    "stop" : [110,400,50,"red"],
                    "fwd" : [160,400,50,"blue"],
                    "back" : [210,400,50,"yellow"],
                  };

//wk7-17 - dictates whether millis is going to run or not
  var state = "stop";

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
  // wk7-15
    console.log(controls["play"]);
    console.log(controls["play"][3]); //green

    for(var keys in controls){
      console.log(keys + " values: " + controls[keys]);
    }
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

// //13 -
//   if(millis() - prevMillis> interval){
//     //8
//     currentFrame++;
//     //13
//     prevMillis = millis();
//   }

//wk7-17 -- rework //13
  if(millis() - prevMillis > interval && state == "play"){
    currentFrame++;
    prevMillis = millis();
  }

  // //10
  // console.log(currentFrame);

  //9 4 is greater than 3 so it resets to 0
  if(currentFrame > frameAmounts-1){
      currentFrame = 0;
  }

  // //wk7-14
  // if(millis() - prevMillis2 > interval2){
  //   counter++;
  //   prevMillis2 = millis();
  // }
  //
  // if(counter > width){
  //   counter = 0;
  // }
  //
  // //wk7-14
  // ellipse(counter, height/2, 20,20);

  //11 to view mouse responsiveness
  ellipse(mouseX,mouseY,10,10);

  //wk7-15
  for(var keys in controls){
    fill(controls[keys][3]);
    //x,y,width,height
    rect(controls[keys][0], controls[keys][1], controls[keys][2],
    controls[keys][2]);
    text(keys, controls[keys][0] + 15, controls[keys][1] - 10);

  //wk7-16 basic hit zone - code for the overlay
    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] +
    controls[keys][2] && mouseY > controls[keys][1] && mouseY < controls[keys][1] +
    controls[keys][2]){
      //should give a gray scale, and alpha of grayscale - transparent by half over button
      fill(127,200);
      rect(controls[keys][0], controls[keys][1], controls[keys][2],
      controls[keys][2]);
    }
  }

}

  //wk7-17
    //whenever mousePressed want to make sure user is over one button, and
    // user has clicked over button, then say, if it's play, do something, if
    // it's stop then do something else {

    function mousePressed(){
        for(var keys in controls){

          if(mouseX > controls[keys][0] && mouseX < controls[keys][0] +
          controls[keys][2] && mouseY > controls[keys][1] && mouseY < controls[keys][1] +
          controls[keys][2]){

            state = keys;
            console.log(state);
            if(state == "fwd"){
              currentFrame++;
              if(currentFrame >= frameArray.length){
                currentFrame = 0;
              }
            }else if(state == "back"){
              currentFrame--;
              if(currentFrame < 0){
                currentFrame = frameArray.length - 1;
              }
            }

          }
      }
    }

////end of code
