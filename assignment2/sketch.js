
let circleColor=("rgba(89, 206, 194, 1)"); // original color of circles

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER); // rectangles can be drawn like circles (from the center)
	
	// for color picker  "rgb(0,0,0)"
  //  note to self ^
}

function mousePressed() { //for some reasons only "mousePressed" works and not "mouseisPressed"

  circleColor = color(random(255), random(255), random(255));  //changes circles to a random color every time mouse is presssed
}

function draw() {
	background('#abee64ff'); //putting the background in draw clears the canvas at the start of the loop
	strokeWeight(2); // outline thickness of both shapes
	stroke("rgba(161, 84, 223, 1)"); // outline color of both shapes

	//noLoop(); // prevents draw from looping
	translate(50, 50); // move the start of the grid to coordinates 50,50 for pattern starting point

	for (let y = 0; y < height; y += 75) { // created a variable called y. loop the code below as long as y is less than height. increase y by 75 with each loop.
		for (let x = 0; x < width; x += 100) {// created a variable called x. loop the code below as long as x is less than or equal to width. increases x by 100 with each loop.
			push(); // container start
			translate(x,y); // tells what to do with pattern using parameters set above
			 fill(circleColor); // fills circle w/ original color
            circle(0,0,50) // starts at translation origin point, 50 px diameter
			pop(); // container end

			push(); // container start
			translate(x, y);
      rotation = map(y,0,height,0,1.678); // rotate green rectangle based on these parameters
      let rotationAmount= map(mouseY,0,height,0,2);
	  rotate(rotation*rotationAmount); //uses above parameters to rotate green rect generatively on a loop
	   fill("rgba(8, 243, 51, 1)"); // fills this rectangle green 
			 rect(0, 0, 5, 60); // Draws rect from origin
			pop();// container end


let circleM = map(mouseY,250,height,0,255); //re-map height range to set where on grid the circle cursor changes opacity
	fill(150,circleM); // fill purple with opacity set by circleM variables
	
	//circle(mouseX, mouseY, width*0.078); // makes circle that moves with mouse cursor 
	// however I cannot figure out how to center it 
	// I tried several things, I think maybe it has to do with my code hierarchy?	

		}
		
	}
}