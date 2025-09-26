
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(27,20,216); // for color picker
  //  "rgb(0,0,0)"
}

  function draw() {
    let scaleFactor=height/600;
    scale(scaleFactor);

    
    background(220); // for some reason 
    // cant see coordinates unless background 220
  
  fill(0);
  text("X: " + mouseX + " Y: " + mouseY, 10, 20);

   
    fill("rgba(190, 140, 250, 1)");
    noStroke()
    triangle(88, 470, 83, 122, 360, 337);

    fill("rgba(159, 206, 89, 1)");
    circle(295,400,115)
   
    fill("rgba(236, 130, 44, 1)");
  beginShape(); // start the list of vertices
	vertex(32,250); 
	vertex(182,199);
	vertex(169,165);
	vertex(17,213); 
	endShape(); // end the list of vertices

fill("rgba(111, 26, 163, 1)");
  rect(17, 507, 30, 30);


// would this be situation to use push/pop (below)?
push();

  fill("rgba(23, 105, 193, 1)");
  translate(77, 138); // Move origin to (48, 163)
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 40, 40); // Draw square from origin
pop();

push();
  fill("rgba(111, 26, 163, 1)");
translate(57, 362); // Move origin to those coordinates
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 100, 10); // Draw square from origin
pop();

push();
fill("rgba(216, 191, 77, 1)");
translate(119, 343); // Move origin to those coordinates
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 10, 100); // Draw square from origin  
pop();

push();
 
  fill("rgba(108, 170, 241, 1)");
  translate(76, 360); // Move origin 
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 20, 15); // Draw square from origin
pop();

push();
 
  fill("rgba(246, 190, 238, 1)");
  translate(130, 200); // Move origin 
  rotate(PI / 2.5); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 27, 22); // Draw square from origin
  // need to figure out why I can't use angleMode(DEGREES)
  //without everything moving despite push/pop
pop();

push();
fill("rgba(111, 26, 163, 1)");
translate(252, 473); // Move origin to those coordinates
  rotate(PI / 6); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 150, 10); // Draw square from origin
pop();

push();
  fill("rgba(227, 116, 68, 1)");
translate(232, 450); // Move origin to those coordinates
  rotate(PI / 6); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 55, 10); // Draw square from origin
pop();

push();
  fill("rgba(182, 43, 43, 1)");
translate(361, 170); // Move origin to those coordinates
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 25, 180); // Draw square from origin
pop();

push();
  fill("rgba(197, 193, 68, 1)");
translate(341, 210); // Move origin to those coordinates
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 40, 50); // Draw square from origin
pop();

push();
  fill("rgba(111, 26, 163, 1)");
translate(315, 238); // Move origin to those coordinates
  rotate(PI / 4); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 13, 130); // Draw square from origin
pop();

push();
  fill("rgba(219, 195, 42, 1)");
translate(285, 155); // Move origin to those coordinates
  rotate(PI / 2.65); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 13, 130); // Draw square from origin
pop();

push();
  fill("rgba(74, 197, 172, 1)");
translate(208, 177); // Move origin to those coordinates
  rotate(PI / 2.65); // Rotate 45 degrees (PI/4 radians)
  rect(0, 0, 9, 35); // Draw square from origin
pop();

}


