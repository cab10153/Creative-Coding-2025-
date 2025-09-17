

function setup() {// runs once at the start
  createCanvas(windowWidth, windowHeight);
  // createCanvas is a function that creates
  // a canvas for our p5.js sketch to draw into
  // It takes two parameters, width and height. 
  // windowWidth and windowHeight are used to set
  // the size to the full size of our browser window.
  background(255,0,255); //purple
}

function draw() { // runs in a loop after setup
  strokeWeight(3); //change stroke weight to 3 pixels wide
	fill(232, 204, 215); //change fill to pink
	noStroke(); // took stroke away
  circle(125,250,75);
  // circle takes these parameters:
  // x position, y position, diameter
  strokeWeight(1); //change stroke weight to 1px
	fill(248,222,126); //change fill to yellow
  rect(10, 90, 80, 60); // the 4th paremeter is the height
  stroke(0); //change stroke to black
	fill(0); //change fill to black
  ellipse(100, 300, 100); // interesting how these overlap, advice
  // is to half the diamter? Ellipse = oval
  fill(190, 211, 229); //change fill to blue
  triangle(30, 75, 58, 20, 86, 56); // the triangle has 3 different
  //xy coordinate sets
}
