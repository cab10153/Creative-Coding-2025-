

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

let x = 200;
let y = 200;
let w = 75;
let h = 75;
let r, g, b;
let speckles = true;
let speckleAmount = 4;

function setup() {
  createCanvas(windowWidth, windowHeight); // why is the canvas not actually filling the window height?
  angleMode(DEGREES); // to use while setting up arc instead of radians
  // Use HSB color.?
  // colorMode(HSB);
  background(0); // must background be put here so it isnt strobing as mushrooms are added?

  r = random(100, 125); // i tried putting these let values above set up and it messed everything up
  g = random(50, 150);
  b = random(29, 100);
}

function draw() {

  noStroke();

  //everything below here goes into your object's "display" function
  fill(255);
  ellipse(x, y, w / 5, h); // in this case x is mouseX,mouseY
  //1/5 the width of mushroom cap (random height btwn 50 and 100)
  // and a random height btwn

  //mushroom cap below // what to add to constructor/ array
// make sure this. below
  fill(r, g, b); // fills cap a random color based on random ranges I gave previously for r,g,b)
  arc(x, y, w, h, 175, 10); // arc values are x,y,width,height,start,stop
  fill(255);

  if (speckles == true) {
    for (let i = 0; i < speckleAmount; i++) {
      // because i, rX, rY, theta, speckleX, and speckleY are "helper" variables
      // that are just doing math for our polar coordinate calcs
      // they are being declared "locally" and don't need to be referred to with 
      // the "this." notation
      let rX = random(w / 2 - 4);
      let rY = random(h / 2 - 4);
      let theta = random(10, 175);
      let speckleX = x + cos(360 - theta) * rX;
      let speckleY = y + sin(360 - theta) * rY;
      circle(speckleX, speckleY, 4);
    }
  }

  // in draw I think I need a for loop once i condense
  // everything into classes and arrays?
  //I think part of the issue is there isn't enough
  // going on for me to visualize it on a large scale
  // in order for the classes and arrays to be necessary
  // should I add in some trolls to make more objects?
  // could/ should the dotted mushrooms be a different object?
}

class Mushroom {
  constructor() {
    // add all of your "fields" to this constructor
    // this sets up random colors whenever the object is created
    this.r = random(100, 125); 
    this.g = random(50, 150);
    this.b = random(29, 100);
  }

  display() {

  }
}
