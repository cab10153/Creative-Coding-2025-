/*
 * p5.mapper
 * https://github.com/jdeboi/p5.mapper
 *
 * Jenna deBoisblanc
 * jdeboi.com
 *
 */

let mooncabX = -50;
let pMapper;
let quadLeft, quadRight; // my quad surfaces

  let luke1Time = 0;
  let luke1BatCount = 9;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // create mapper object
  pMapper = createProjectionMapper(this);
  pMapper.load("map.json");

  // create "quads" for each surface of your projection
  quadLeft = pMapper.createQuadMap(400, 400);
  quadRight = pMapper.createQuadMap(400, 400);

}

function draw() {
  background(0);

  // display each of the projection surfaces in draw
  quadLeft.displaySketch(mySketchCiarra);
  quadRight.displaySketch(mySketchLuke);
}


function mySketchCiarra(pg){ // "pg" refers to each canvas "instance"
  
  pg.push();
  pg.colorMode(HSB);
  pg.background(0);

  

  let eclipseX = 200; // eclipse in center of screen
  let eclipseY = 200; // eclipse in center of screen


  pg.fill(18, 70, 100);
  pg.noStroke();
  pg.circle(eclipseX, eclipseY, 225);

//eclipse movement
  mooncabX += 1.5;   // eclipse speed -- i think it's better slower
  if (mooncabX > 400 + 50) {
    mooncabX = -50; // starts the loop -50px off screen// resets loop at 50px off screen
  }

  // Black eclipse moon (yes they are both moons)
  pg.fill(0);  
  pg.circle(mooncabX, eclipseY, 225);
  pg.pop();
}

function mySketchLuke(pg){ 

  pg.push();


  // I wanted create Halloween theme patterns for this assignment. The first one I chose to do is the bats swirling around the center, which is the moon and its subtle glow



  pg.noStroke();



  // setting up the background and bat flying trails
  pg.background(0, 0, 0, 35);

  // Move all objects to the center
  pg.translate(200, 200);

    // Moon shape
  pg.fill(240, 230, 180);
  pg.ellipse(0, 0, 200, 200);

  // Outer ring glow
  pg.fill('rgba(240, 230, 180, 0.2)');
  // I used the noise() function over here to create random patterns without causing flickers. It gives a buttersmooth feel of subtle glowing.
  // I used the map() function to restrict the radius of the glow of the moon
  pg.ellipse(0, 0, map(noise(luke1Time), 0, 1, 250, 300), map(noise(luke1Time), 0, 1, 250, 300));

  // I used the for loop over here to generate multiple copies of bats with different angles of self-rotation as well as the rotation around the moon center
  for (let i = 0; i < luke1BatCount; i++) {
    // I created this angle variable to store variations of angles of bat spinning itself based on 'i' and the customized time 'luke1Time'
    let luke1Angle = luke1Time * (0.8 + i * 0.03) + i;
    // this variable sets different radius for each bat rotating around the center
    let luke1Radius = 60 + i * 12;
    // these two variables set up the polar coordinate for the bats' positions so that it simulates the bats swirling around the moon effect
    let luke1X = cos(luke1Angle) * luke1Radius;
    let luke1Y = sin(luke1Angle) * luke1Radius * 0.7;

    // separate transformations of each bat
    pg.push();
    // rotate the bats around the moon
    pg.translate(luke1X, luke1Y);
    // rotate around itself (self-spinning) based on the time and 'i'
    // I used sin() function here to make each bat self-spinning feel more smooth and organic, and I feed millis() to sin function to animate the bats
    pg.rotate(luke1Angle + sin(millis() / 2000) * 0.2);

    // draw the bat body using a circle shape
    pg.fill(30, 30, 35);
    pg.ellipse(0, 0, 12, 8);
    // draw the bat wings using two triangle shapes with each one on each side
    pg.triangle(-6, 0, -20, -5, -12, 2);
    pg.triangle(6, 0, 20, -5, 12, 2);
    pg.pop();

  // accumulate the time value over time inside draw(), which updates every frame
  luke1Time += 0.01;
  }
  pg.pop();

}

function keyPressed() { // keypressed toggles different modes
  switch (key) {
    case "c":
      pMapper.toggleCalibration();
      break;
    case "f":
      let fs = fullscreen();
      fullscreen(!fs);
      break;
    case "l":
      pMapper.load("map.json");
      break;

    case "s":
      pMapper.save("map.json");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}