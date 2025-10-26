
let x = 200;
let y = 200;
let w = 75;
let h = 75;
let r, g, b;
let speckles = true;
let speckleAmount = 4;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); 
  background(0); 

  r = random(100, 125); // i tried putting these let values above set up and it messed everything up
  g = random(50, 150);
  b = random(29, 100);
}

function draw() {

  noStroke();

  //everything below here goes into your object's "display" function
  fill(255);
  ellipse(x, y, w / 5, h); 


  fill(r, g, b); 
  arc(x, y, w, h, 175, 10); 
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
}
