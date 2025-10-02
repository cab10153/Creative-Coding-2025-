let circleColor
function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER); // rectangles can be drawn like circles / ellipses using this setting
	 // for color picker
  //  "rgb(0,0,0)"
  circleColor=("rgba(89, 206, 194, 1)");
}

function mousePressed() {
  // changes to a random color
  circleColor = color(random(255), random(255), random(255));
}

function draw() {
	background('#abee64ff'); //putting the background in draw clears the canvas at the start of the loop
	strokeWeight(2); // outline thickness of shapes
	stroke("rgba(161, 84, 223, 1)"); // outline color of shapes

	push();
    translate(50,50); // move the coordinate grid to 50,50
	for(let i = 0; i<7; i++){
		if(i>0){
			translate(100,0);
		}
		 circle(0,0,50);
		   fill(circleColor);
		 
		  rect(0, 0, 5, 60);
	
		  }
		pop(); // container end

		push();
    translate(50,125); // move the coordinate grid to 50,50
	for(let i = 0; i<7; i++){
		if(i>0){
			translate(100,0);
		}
		 circle(0,0,50)
		   fill(circleColor);
		  rect(0, 0, 5, 60);
	
		  }
		pop(); // container end

	translate(50, 200); // move the coordinate grid to 50,200

	for (let y = 0; y < height; y += 75) { // create a variable called y. loop the code below as long as y is less than height. increase y by 75 with each loop.
		for (let x = 0; x < width; x += 100) {// create a variable called x. loop the code below as long as x is less than width. increase x by 100 with each loop.
			push(); // container start
			translate(x,y);
			 fill(circleColor);
            circle(0,0,50)
			pop(); // container end

			push(); // container start
			translate(x, y);
      rotation = map(y,500,height -200,150,1.678); // rotate green rectangle
      rotate(rotation);
	   fill("rgba(8, 243, 51, 1)");
			 rect(0, 0, 5, 60); // Draw rec from origin
			pop();// container end


let circleM = map(mouseY,250,height,0,255); //remap height to a range of 0-255
	fill(150,circleM); // fill purple with opacity set by circleM 
	
	circle(mouseX, mouseY, width*0.078); // makes circle that moves with mouse cursor
	

		}
		
	}
}