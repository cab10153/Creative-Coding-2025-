
// make triangle outlines similar to other one
// maybe circle floating across screen
// try to use noise

let t = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  

}

function draw() {
  background(255);
  
  let offsetcab1 = sin(t) * 40; // offset of movement
  let offsetcab2 = cos(t) * 30; // not sure if I actually needed two offsets? However, the code is working!
  t +=1; // speed of the movement // any faster seeems too erratic

  translate(width/2-20, height/2 -20); // center starting point of the animation to the canvas

  //Large white background triangle
  push();
  translate(40, offsetcab1);
  strokeWeight(4);
  triangle(-60, 60,   0, -80,   60, 60);
  pop();

  //Thick outline triangle
  push();
  strokeWeight(20);
  fill(255)
  translate(-40, -40 + offsetcab2 + noise(t) * 1); //added noise to this algorithm, not sure if it is working. When I change the rate amount it gets very jerky
  triangle(-40, 40,   0, -40,   40, 40);
  pop();

  // Orange triangle
  push();
  translate(20, -40 + offsetcab1 * 1.4); // Adding noise in this forumula made the triangle move only with the larger one (not independently), not sure why so I took it out
  strokeWeight(3);
  fill(245,149,66);
  triangle(-40, 40,   0, -40,   40, 40);
  pop();
}