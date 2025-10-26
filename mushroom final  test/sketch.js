
// Updated 6pm oct 25th

// 1hr 45 min on new video



// how to disperse them evenly?
// how to make some have zero dots -- polar coodinates/ translate?

// what to put into constructor/ array/ for loop

// Should I add -- "display" under mushroom class, a mushroom cap and stem?
// Should I add array, push and pop, translate and rotate

//For full points, your sketch should meet all of the above outlined technical requirements.
// It should contain a functioning food item / character class that generates dynamic objects.
// It should make use of the random() function (done!), the translate() function (maybe for dots?),
// conditionals (if), arrays, for loops and at least one of the following (already used mousepressed)
//  additional functions: dist(), cos() and sin() -- considered polar coordinates?), mousePressed(), keyPressed(), second(). Your code should run without any errors, and should be thoroughly commented. You may not use any functions that have not yet been explored in this class. Any inclusions of external code will be ignored.

// Required to add: Translate function, conditionals (done by fahner), arrays, for loops (done by fahner)

// array to hold onto all your mushrooms, 

let mushrooms = [];
// let speckles = true;
// let speckleAmount = 4;

function setup() {
  createCanvas(windowWidth, windowHeight); // why is the canvas not actually filling the window height?
  angleMode(DEGREES); 
  background(0); // must background be put here so it isnt strobing as mushrooms are added?
}

function draw() {
  
  noStroke();

  
  for(let i = 0; i<mushrooms.length;i++)
    mushrooms[i].display(); 

  }

  function mousePressed(){
   let tempMushroom = new Mushroom();  //make a new mushroom, store it in a temporary variable
mushrooms.push(tempMushroom); // add that new mushroom to my mushroom array
  

   }

  class Mushroom {
  constructor (x,y,w,h,r,g,b) {
    // add all of your "fields" to this constructor
    // this sets up random colors whenever the object is created

	this.x = mouseX
	this.y = mouseY
	this.w = random(50,100);
	this.h = random(50,150);
	this.r = random(100, 125); 
  this.g = random(50, 150);
  this.b = random(29, 100);
  // this.speckleAmount = 4
  // this.speckles = true
  }

  display() {
 
  fill(255);
  noStroke();
  ellipse(this.x, this.y, this.w / 5, this.h); 
 
  noStroke();
  fill(this.r, this.g, this.b); // fills cap a random color based on random ranges I gave previously for r,g,b)
  arc(this.x,this.y, this.w,this.h, 175, 10); // arc values are x,y,width,height,start,stop
  // fill(255);

  
  }
   }