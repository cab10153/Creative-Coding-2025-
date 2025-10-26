

//Still need:
// translate(),push() and pop() (position speckles)
// conditional



let mushrooms = [];
// let speckles = true; // tried these variables here at first, then in display
// let speckleAmount = 4; // tried these variables here at first, then in display

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); 
  background(0); 
}

function draw() {
  
  noStroke();
  
  for(let i = 0; i<mushrooms.length;i++)
    mushrooms[i].display(); 

  // if (speckles == true) { // I think this goes in display, but I also tried this here w/ global variables to see if it would work
  //   for (let i = 0; i < speckleAmount; i++) {
  //   let rX = random(w / 2 - 4);
  //   let rY = random(h / 2 - 4);
  //   let theta = random(10, 175);
  //   let speckleX = x + cos(360 - theta) * rX;
  //   let speckleY = y + sin(360 - theta) * rY;
  //   circle(speckleX, speckleY, 4);}

  }

  function mousePressed(){
   let tempMushroom = new Mushroom();  
mushrooms.push(tempMushroom); 
  
   }

  class Mushroom {
  constructor (x,y,w,h,r,g,b,) {
   
	this.x = mouseX;
	this.y = mouseY;
	this.w = random(50,100);
	this.h = random(50,150);
	this.r = random(100, 125); 
  this.g = random(50, 150);
  this.b = random(29, 100);
  // this.speckleAmount = 4;
  // this.speckles = true;

  }

  display() {
//  push();
//translate(this.x,this.y);
  fill(255);
  noStroke();
  ellipse(this.x, this.y, this.w / 5, this.h); 
 
  noStroke();
  fill(this.r, this.g, this.b); // fills cap a random color based on random ranges I gave previously for r,g,b)
  arc(this.x,this.y, this.w,this.h, 175, 10); // arc values are x,y,width,height,start,stop
  
  // if (this.speckles == true) { // this is the code you helped me with at the meeting, to make the speckles
  //   for (let i = 0; i < this.speckleAmount; i++) {
  //   let rX = random(w / 2 - 4);
  //   let rY = random(h / 2 - 4);
  //   let theta = random(10, 175);
  //   let speckleX = x + cos(360 - theta) * rX;
  //   let speckleY = y + sin(360 - theta) * rY;
  //   circle(speckleX, speckleY, 4);}
     //pop(); 
     }


    }
  


 
  

  
