function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER); // centers text in the circles

  // decided not to use the slider, didn't know I couldn't customize it
  // slider = createSlider(0, 255, 125); // last value is starting point
  // slider.position(width/6, height/8);
  // slider.size(250); // slider doesn't work in "Draw," not sure why. Got this slider code from the p5js page
  // slider code/tutorial (tweaked it) https://p5js.org/reference/p5/createSlider/#:~:text=Reference%20createSlider()-,createSlider(),background(g);
}

function draw() {
  background(110);

  // Below is code for the "Effects Level" circle

  // Max size for circle when pinched/ waved up and down or back and forth (depending on gesture)
  let radiusContainer = map(mouseY, 0, height, 200, 120); // the issue with these next lines of code is that I made it difficult to assign
  radiusContainer = constrain(radiusContainer / 2, 50, 160); // other gestures (along the x axis, using "pinch"). I made these algorithms first to tie
  // in the other elements and didn't realize how difficult it would be to apply the gestures to the other
  // circles. This is why all 3 change only from "up and down." I tried figuring this out for hours
  //and just continually messed up the code and made it worse. I'd like to fix this in the future
  // in order to have a complete working project.
  // I was also not able to integrate this code with the handpose/ web midi version of the code due to
  //some of these issues. That is why it is controlled by the mouse for now.

  // Draw middle circle
  for (let rc = radiusContainer; rc > 0; rc--) {
    stroke(0); // somehow adding stroke (0); changed the purple to this weird black design but I actually like it better! It fits my love of Op Art in a way!
    fill(171, 174, 214);
    ellipse(width / 2, height / 2, rc * 2.25, rc * 2.25);

    // text for middle circle
    textSize(20);
    text("Effects Level", width / 2, height / 2 - 10);
    text("(Pinch)", width / 2, height / 2 + 20);

    ////////////////////// Other two circles below (left and right)
    push();
    translate(width / 2, height / 2); // to make other two circles in relation to the middle one
    fill(171, 174, 214);
    ellipse(350, 0, rc * 2.25, rc * 2.25); // right circle (Volume)
    ellipse(-350, 0, rc * 2.25, rc * 2.25); // left circle (Speed/BPM)
    textSize(20);
    text("Volume", 350, -10);
    text("(Up & Down)", 350, 20);
    text("Speed / BPM", -350, -10);
    text("(Left & Right)", -350, 20);

    pop();
  }
}
