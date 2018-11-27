var posX = 0;
var posY = 0;
var rectSize = 100;
var colors = "green";

var button1, button2;

var buttonArray = [];

// 1
var soundFile;

// 2 .mp3 .wav
function preload(){
  soundFile = loadSound('assets/CowMoo.mp3');
  vid = createVideo('assets/cow.mp4');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  button1 = new interfaces(100,200,50,"red", "Red Button");
  button2 = new interfaces(200,200, 50, "green", "Green Button");

  for(var i =0; i < 10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfaces(random(width), random(height), 50, c,i);
  }

  //4 video hide as soon as sketch starts (click to show)
  vid.hide();

  // 3 first play the sound
  // soundFile.play();

}

function draw() {
  // 3 first play the sound indefinitely
  // "play" sounds in every single draw loop
  // soundFile.play();

   //display();
   background(255);
   button1.display();
   if(button1.check(mouseX,mouseY)){
     console.log(button1.name);
   }
   button2.display();
   button2.check(mouseX,mouseY);

   for(var i = 0; i < buttonArray.length; i++){
     buttonArray[i].display();
     if(buttonArray[i].check(mouseX,mouseY)){
       console.log(buttonArray[i].name);
       background(buttonArray[i].color);
     }
   }

}

// any click must always be in mousePressed
// function mousePressed(){
  // 4 when over particular button, then play sound
  // mousepressed one time registered click for one sound
  // want to check all buttons, and depending on button want to make decision, if button red or green, different sounds

  // loop through the buttons, what is button 0, button 1 ?
  // if i is 0 green or if i is 1 red
//   for(var i = 0; i < buttonArray.length; i++){
//     // buttonArray[i].display();
//     if(buttonArray[i].check(mouseX,mouseY)){
//       if(i == 0){
//         //over the green button1
//       }else if(i==1){
//         //over the red button
//       }
//     }
//   }
// }

// or >> preferred method

// loop through the buttons, what is button 0, button 1 ?
// if i is 0 green or if i is 1 red
function mousePressed(){
  for(var i = 0; i < buttonArray.length; i++){
  // buttonArray[i].display();
  if(button1.check(mouseX,mouseY)){
    // red button
    soundFile.stop();
    vid.stop();
    vid.hide();
  }
  if(button2.check(mouseX,mouseY)){
    // green button
    soundFile.play();
    vid.play();
    vid.show();
  }
    if(i == 0){
      //over the green button1
    }else if(i==1){
      //over the red button
    }
  }

}

class interfaces{
  constructor(tempX,tempY,tempS,tempC,tempName){
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }

// individual buttons named with if statements attached
  display(){

    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
    text(this.name, this.x, this.y-10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.size,this.size);
    }
  }

// boundaries of square and returns if boundaries true or false, then sets overlay
  check(mX,mY){
    if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }
}


//end of code
