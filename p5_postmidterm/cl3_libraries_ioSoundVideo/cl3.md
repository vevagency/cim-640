### CL3 Libraries 

        * Show and hide images or videos is majority of functions

        * Currently have p5.dom and p5.sound in addons section
        * First download new library and put into addons folder

        * Mandatory for final is using a library
        * These libraries are in the format of a .git respository, and show you how to install and use the library

        * p5.dom library includes dropdown features, etc. learned prior
        * p5.sound library includes sound feedback for example
        * p5.accessibility library
        * p5.serial library hardware
        * p5.collide2D library 2D detection, i.e. if animating circle in screen, and if hits box, will do something, for example, a distance function that understands if full boundary is hit to then do something, games
        * p5.rita.js library language processing, bring in text, look for patterns in text to create new forms of text
        * p5.geolocation library understanding where things are
        * p5.speech text library to speech converter
        * p5.bots meant for sensors
        * p5.play super robust library for building games, for example playback spreadsheets, collision detection, animations using a 2D style "Super Mario" kind of game
        * p5.particle how things fall on the screen
        * p5.scribble looks like a child drawing
        * p5.tiledmap google maps type
        * p5.scenemanager i.e. start screen, live state, game over state
        * mappa.js geolocation, i.e. Google Maps with more information built into the map

* Can see in index.html
* When add new library, have to add a script like below:

        <!DOCTYPE html>
        <html lang="">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>p5.js example</title>
            <style> body {padding: 0; margin: 0;} </style>
            <script src="../p5.min.js"></script>
            <script src="../addons/p5.dom.min.js"></script>
            <script src="../addons/p5.sound.min.js"></script>
            <script src="sketch.js"></script>
          </head>
          <body>
          </body>
        </html>
