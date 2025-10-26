

let mushrooms = []; // array to hold my mushrooms

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); 
  background(0); 
}

function draw() {
  

  for(let i = 0; i<mushrooms.length;i++) // if 0 is less than the length of the mushrooms array, add 1
    mushrooms[i].display(); // uses the display function from the Mushroom class

  }

  function mousePressed(){
   let tempMushroom = new Mushroom();  // spawns new Mushroom when mouse is pressed
   mushrooms.push(tempMushroom); // pushes tempMushroom into the mushrooms array
  
   }

  class Mushroom { 
  constructor (x,y,w,h,r,g,b,speckleAmount) { 
   
	this.x = mouseX; // location of x since I am using mousePressed
	this.y = mouseY; // location of y since I am using mousePressed
	this.w = random(50,100); // sets random width
	this.h = random(50,150); // sets random height
	this.r = random(100, 125); // sets random color values
  this.g = random(50, 150); // sets random color values
  this.b = random(29, 100); // sets random color values
  this.speckleAmount = random(0,5); // experimented with number of speckles, more than 5 looked too busy
  this.speckles = true

  }

  display() { // this is what will display in Draw

  fill(255); 
  noStroke();
  ellipse(this.x, this.y, this.w / 5, this.h); // mushrooms stem, random size within parameters
 
  noStroke();
  fill(this.r, this.g, this.b); 
  arc(this.x,this.y, this.w,this.h, 175, 10,); // mushrooms cap, random size within parameters

  // was hoping to make the speckles static instead of moving around but couldn't figure it out. "noLoop" didn't work
  
  if (this.speckles == true) {
  for (let i = 0; i < this.speckleAmount; i++) { // adds speckles
      let angle = random(200, 350); // experimented with these angles to make them fit in the cap, was not working with translate, push and pop for some reason. The code wouldn't run
      let radius = random(this.w * 0.1, this.w * 0.45); // creates boundaries for speckles to stay in mushroom cap
      let speckleX = this.x + radius * cos(angle); // sets location of x coordinate of speckles (random) within parameters
      let speckleY = this.y + (this.h / 2) * sin(angle) * 0.7; // sets y location of where the speckles are located on the mushroom cap, decided these values looked best (in the middle)
      fill (255); // speckle color white
      circle(speckleX, speckleY, 4); // creates speckle shape and size (4 pixels diameter)

     }
    }

  }
  }