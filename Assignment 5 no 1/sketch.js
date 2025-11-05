// To Craig -- thanks for your help on this!! This was a complete mess lol
// I was originally trying to have the pendulum swing within the triangle boundaries
// I made the next two sketches super simple :)
//I'll keep my insane amount of notes here and deleted code choices haha

// let t = 0; // time variable for Perlin noise? Wondering why the "t" variable is always used? I know it equals time but how does p5js know it means time?
//  let triHeightCB = 200; // seems unnecessary to use these when I can easily do that math? (100)
//   let triwidthCB = 200 // I think this is taken care of by the vectors now?

// do I need to use floor?
// Sad I didn't use noise in the end!!!

function setup() {
  createCanvas(400, 400);
  // angleMode(RADIANS); // no longer needed, changed code

  // let top = createVector(0, -100); // realized this did not work in set up
  // let left = createVector(-100, 100); // thought putting it in set up may make it more smooth
  // let right = createVector(100, 100);
}

function draw() {
  background(255);

  translate(width / 2, height / 2 + 40); //places triangle in middle of canvas

  stroke(0);
  strokeWeight(5); // stroke weight for triangle line thickness
  noFill();

  // vectors to create "points" for the triangle vertices (similar to points in class zoom, )
  let topTri = createVector(0, -75); // when I tried to take out the vectors and just draw the triangle it made the pendulum disappear, so I brought back the vectors
  let leftTri = createVector(-75, 75);
  let rightTri = createVector(75, 75);

  // Outer triangle shape
  beginShape();
  vertex(topTri.x, topTri.y); // top vertex uses top vector
  vertex(leftTri.x, leftTri.y); // left vertex uses left vector
  vertex(rightTri.x, rightTri.y); // right vertex uses right vector
  endShape(CLOSE);

  // Pendulum swing boundaries
  let diameterX = rightTri.x - topTri.x;
  let diameterY = rightTri.y - topTri.y; // do I need left.y as well to make it more to the left?
  // let diameterZ = left.x-top.x;
  // let diameterA = left.y - top.x;
  let edgeLimit = atan2(diameterX, diameterY); // angle from vertice to edge of triangle, still seems to swing too far
  // let edgeAngle2 = atan2(diameterZ, diameterA); //atan2 gives arc tangent of the given points
  let swing = edgeLimit * 0.9; // supposed to swing inside the edges // when i changed to "-.9" it started swinging to the left
  // let swingSide2 =

  // Supposed to be smooth swing from perlin noise
  // let noiseAmount = noise(t); // these 2 lines did not work when I put them lower in the hierarchy, not exactly sure why
  let angle = map(frameCount / 20, 0, 2, -swing, swing); // speed of swing

  let pendulumLength = 120; // I thought this value was best for how far the pendulum should
  let pendulumX = sin(angle) * pendulumLength;
  let pendulumY = cos(angle) * pendulumLength + topTri.y; // had to add topTri.y or pendulum hangs too low

  //timing of frame rate?
  //  t += 0.009; // when I put this here in the hierarchy to pendulum swings more to the right for some reason

  // Hanging pendulum
  strokeWeight(4); // pendulum line is a bit thinner weight than the outer triangle
  line(topTri.x, topTri.y, pendulumX, pendulumY); // connects line to top of triangle
  fill(0);
  noStroke();
  circle(pendulumX, pendulumY, 20);

  //timing of frame rate/ perlin noise? Do I need speed? // not needed?
  //  t += 0.009; // do I need to use floor to make it smoother? // found that 0.009 works best
}
