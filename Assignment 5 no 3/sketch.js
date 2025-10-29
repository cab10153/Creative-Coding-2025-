//Spooky eclipse

let mooncabX = -50

function setup() {
  createCanvas(400, 400);
  colorMode (HSB)
  // mooncabX = -50; // start the moon off screen, is better at only 50px off the screen, loops quicker
} // not sure why but when I put line 6 in the draw the animation it didn't work

function draw() {
  background(0);

  //  moonX = -200; // start the moon off screen // only works in set up or declare globally

  let eclipseX = width / 2; // eclipse in center of screen
  let eclipseY = height / 2; // eclipse in center of screen

//Orange spooky moon
  fill(18, 70, 100);
  noStroke();
  circle(eclipseX, eclipseY, 175);

//eclipse movement
  mooncabX += .4;   // eclipse speed -- i think it's better slower
  if (mooncabX > width + 50) {
    mooncabX = -50; // starts the loop -50px off screen// resets loop at 50px off screen
  }

  // Black eclipse moon (yes they are both moons)
  fill(0);  
  circle(mooncabX, eclipseY, 175);
}