
let mushrooms = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); 
  background(0);
  noStroke();

let tempMushroom = new Mushroom();  //make a new mushroom, store it in a temporary variable
mushrooms.push(tempMushroom); // add that new mushroom to my mushroom array
}

function draw() {

	for(let i = 0; i<mushrooms.length;i++){ 
    mushrooms[i].display(); }
    //do I need something here to translate it randomly random(x,y?) Also maybe push and pop?
    // maybe rn it is just putting another one on top of the last
    //need to add tempMushroom somwhere i think to add a new one

    // Fahner notes - starting at zero,
    // repeat the following code
    // incrementing i by one with each loop
    // and ending at the length of the bugs array


  }

class Mushroom {
  constructor(x,y,w,h,r,g,b,speckles,speckleamount) {
    // add all of your "fields" to this constructor
    // this sets up random colors whenever the object is created

	this.x = windowWidth/2;
	this.y = windowHeight/2
	this.w = 75;
	this.h = 75;
	this.r = random(100, 125); 
  this.g = random(50, 150);
  this.b = random(29, 100);
	this.speckles = true;
	this.speckleAmount = 4;
  }

  display() {
 
  fill(255);
  noStroke();
  ellipse(this.x, this.y, this.w / 5, this.h); 
 
  noStroke();
  fill(this.r, this.g, this.b); // fills cap a random color based on random ranges I gave previously for r,g,b)
  arc(this.x,this.y, this.w,this.h, 175, 10); // arc values are x,y,width,height,start,stop
  // fill(255);

	  if (this.speckles == true) {
    for (let i = 0; i < this.speckleAmount; i++) {
		
      let rX = random(w / 2 - 4);
      let rY = random(h / 2 - 4);
      let theta = random(10, 175);
      let speckleX = x + cos(360 - theta) * rX;
      let speckleY = y + sin(360 - theta) * rY;
		
      circle(speckleX, speckleY, 4);
	 

		}	
	 }
  }
}
