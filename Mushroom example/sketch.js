
// don't forget C

//Previously one small mistake and like 2 hrs to find -- numbers instead of number
//trying to work off too many different types of examples
// and enter my own info into different types of algorithms

// would like to add dots to some of them, maybe different colors?
// how to disperse them evenly?
// how to make some have zero dots -- polar coodinates/ translate?
// how to continue color pallette from last project
// mention about working in open processing/ how to see dev tools pane better on here

// what to put into constructor/ array/ for loop

// Should I add -- "display" under mushroom class, a mushroom cap and stem?
// Should I add array, push and pop, translate and rotate

//For full points, your sketch should meet all of the above outlined technical requirements. 
// It should contain a functioning food item / character class that generates dynamic objects. 
// It should make use of the random() function (done!), the translate() function (maybe for dots?), 
// conditionals (if), arrays, for loops and at least one of the following (already used mousepressed)
//  additional functions: dist(), cos() and sin() -- considered polar coordinates?), mousePressed(), keyPressed(), second(). Your code should run without any errors, and should be thoroughly commented. You may not use any functions that have not yet been explored in this class. Any inclusions of external code will be ignored.

// Required to add: Translate function, conditionals, arrays, for loops

function setup() {
  createCanvas(windowHeight, windowWidth); // why is the canvas not actually filling the window height?
  angleMode(DEGREES); // to use while setting up arc instead of radians
 // Use HSB color.?
  // colorMode(HSB);
   background(0); // must background be put here so it isnt strobing as mushrooms are added?

}

function draw() {
  
  // in draw I think I need a for loop once i condense
  // everything into classes and arrays?
  //I think part of the issue is there isn't enough
  // going on for me to visualize it on a large scale
  // in order for the classes and arrays to be necessary
  // should I add in some trolls to make more objects?
  // could/ should the dotted mushrooms be a different object?
}

//function for drawing a mushroom. The arguments are x and y coordinate, width and height of mushroom and red colour value for the mushroom cap
function mushroom (x,y,w,h){ // declared new mushroom function, what to add to constructor/array?
  //mushroom stem below
  noStroke();
  fill(255);
  ellipse(x,y,w/5,h); // in this case x is mouseX,mouseY
  //1/5 the width of mushroom cap (random height btwn 50 and 100)
  // and a random height btwn

  //mushroom cap below // what to add to constructor/ array
  let r = random(100,125); // i tried putting these let values above set up and it messed everything up
  let g = random(50,150);
  let b= random(29,100);
  fill(r, g, b); // fills cap a random color based on random ranges I gave previously for r,g,b)
  arc(x,y,w,h,175,10); // arc values are x,y,width,height,start,stop

  //this.myceColor+=3;
  // myceColor
  // myceColor = (0,100,25)

  // in the mouse clicked example using the mushroom function we
  //created above, 
// still a bit confused should I have used translate w/ cap and stem
}

function mousePressed(){
  let rw = random(50,100); // random mushroom width
  let rh = random(50,150); // random mushroom height
  // let mColor= random(254); // took this out, previously I put this in the mushroom formula below).
  mushroom(mouseX,mouseY,rw,rh); // it works like this without mColor on end
}

