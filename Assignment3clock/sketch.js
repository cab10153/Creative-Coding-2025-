// Drunk Mycelium
// used inspiration from these two animations
//https://commons.wikimedia.org/wiki/File:Mycelium_growth_simulation.gif
//https://www.youtube.com/watch?v=c6JRjVBYijs
// also help from you based on our meeting :) Thanks again!

let s; // establishes "s" variable globally
let minute = 0; // Global variable holds minutes
let myDrunks = []; // empty array to use later
let myceColor; // variable I made with the purpose to change mycelium color 
function setup() {
	createCanvas(windowWidth, windowHeight); // Changed from 500 x 500 to windowWidth, windowHeight. I think it looks pretty nice in the browser
  
  myceColor = random(220,254); // gives it initial values of mycecolor

	s = second(); 
	for (let i = 0; i < s; i++) { // spawns first mycelium branch at set up
		spawnNewDrunk(); // is this in setup because we are establishing the initial branch of Mycelium?
	}
	background(0);
  
}

function draw() {

	fill(255); //I took this out and realized it didn't work so I put it back in
	
  if (s != second()) {

		console.log("new second " + s); // allows you to verify that the growth happening every second when you open the dev tools pane
		if (second() == 0) {
      minute = minute + 1; // adds new 
			myDrunks = []; // why do we establish empty array again here?
			background(0); // took this out and put it back in cause it didn't work
		}

		spawnNewDrunk();

		for (let i = 0; i < myDrunks.length; i++) { // don't understand the length part because where have we established the length of myDrunks? I say this because globally it is an empty array
			myDrunks[i].changeDirection(); // changes direction every second
	  }

		s = second(); // this is where it is established later on. Do we need it globally too?
	}

  if (minute == 59) { // proud of this one! Hopefully figured it out -- should change the mycelium color pallette every hour. I tested by trying it at "1" instead of 59 then changed it back
    myceColor = (0,100,25)
   let minute = 0;
   console.log // double checking what's going on
  }


	for (let i = 0; i < myDrunks.length; i++) { //again trying to figure out how we know what myDrunks length is. Is it the length of the canvas?
		myDrunks[i].move(); // calling upon the move function from the Drunk class
		myDrunks[i].display(); // calling upon the display function from the Drunk class
	}
}

function spawnNewDrunk() {
	let x = random(width); // I tried changing this value and it didnt seem to do much
	let y = random(height);// Also tried changing this value and didn't seem to do much
	let diameter = 2.5; // changed diameter from 3 to 2.5 because it looks cooler a bit thinner
	let range = random(0,50);
	let myDrunk = new Drunk(x, y, diameter, range);
	myDrunks.push(myDrunk); // remember this from the class/ tutorial but still a bit confused about this concept
}

class Drunk {
	constructor(x, y, diameter, range) { // the constructor establishes a blueprint for all of the functions located in the drunk class
		this.x = width/2; // you must use "this." when establishing parameters in the class set up
		this.y = height-100; // changed starting point from the bottom of the screen to 100 pixels above the bottom of the screen, I think that looks better
		this.destinationX = this.x; 
		this.destinationY = this.y;
		this.diameter = diameter;
		this.range = range;
    this.myceColor = myceColor; //random(220,254); //made new variable myce.Color to replace "this.hue"
	}

	move() { // created a function in the Drunk class
		this.x = lerp(this.x,this.destinationX,0.2); // truthfully not understanding lerp here. I read the tutorials I swear!!
		this.y = lerp(this.y,this.destinationY,0.2); // I know it finds a middle point between something but i'm confused
	}

	display() { // created a function in the Drunk class
		noStroke();
		colorMode(HSB); // why HSB mode? 
		
		fill(this.myceColor,255,100,125); // I tried changing the brightness value but it didnt seem to do anything 
		circle(this.x, this.y, this.diameter);
	}
	
	changeDirection(){ // created a function in the drunk class
			this.destinationX = this.destinationX+random(-this.range, this.range);
		this.destinationY = this.destinationY-random(this.range); 
		this.myceColor+=3; // when I changed the value here of  from +=1 to +=3 it comes out much more vibrant/ electric
	}


}