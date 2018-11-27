function setup() {
  // put setup code here
  select("body").style("background-color", "pink");

  var container0 = createDiv();
  container0.id("container0");
  select("#container0").style("width", "400px");
  select("#container0").style("margin", "0 auto");
  select("#container0").style("test-align", "center");
  select("#container0").html("<h1>Your project title goes here!</h1>");

  // select("#mycanvas").center;
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");
  // container0 is the parent of my canvas...
  cnv.parent(container0);
}

function draw() {
  // put drawing code here
  background(0);
}
