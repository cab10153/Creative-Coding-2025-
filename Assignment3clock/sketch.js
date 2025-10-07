// drunk walk
let s;

let myDrunks = []; // empty array

function setup() {
	createCanvas(500, 500);

	s = second();

	for (let i = 0; i < s; i++) { // spawns s # of drunks at setup
		spawnNewDrunk();
	}
	background(0);
}

function draw() {

	fill(255);
	if (s != second()) {
		console.log("new second " + s);
		if (second() == 0) {
			myDrunks = [];
			background(0); // redraws the backgroudn
		}
		spawnNewDrunk();
		for (let i = 0; i < myDrunks.length; i++) {
			myDrunks[i].changeDirection();
	}
		s = second();
	}


	for (let i = 0; i < myDrunks.length; i++) {
		myDrunks[i].move();
		myDrunks[i].display();
	}
}

function spawnNewDrunk() {
	let x = random(width);
	let y = random(height);
	let diameter = 3;
	let range = random(10,50);
	let myDrunk = new Drunk(x, y, diameter, range);
	myDrunks.push(myDrunk);
}

class Drunk {
	constructor(x, y, diameter, range) { // this part passes 
		this.x = width/2;
		this.y = height;
		this.destinationX = this.x; 
		this.destinationY = this.y;
		this.diameter = diameter;
		this.range = range;
		this.hue = random(50);
	}

	move() {
		this.x = lerp(this.x,this.destinationX,0.2);
		this.y = lerp(this.y,this.destinationY,0.2);
	}

	display() {
		noStroke();
		colorMode(HSB);
		
		fill(this.hue,255,100,125);
		circle(this.x, this.y, this.diameter);
	}
	
	changeDirection(){
			this.destinationX = this.destinationX+random(-this.range, this.range);
		this.destinationY = this.destinationY-random(this.range); // this line 
		this.hue+=10;
	}


}