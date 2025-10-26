
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
  //frameRate(1);
  background(255,200,200);
  //variable for random width of mushroom
  let rw = random(50,200);
  //variable for random height of mushroom
  let rh = random(50,200);
  //variable for random red value
  let rr = random(0,255);
  mushroom(width/2,height/2,rw,rh,rr);
}

function draw() {
  
}

//function for drawing a mushroom. The arguments are x and y coordinate, width and height of mushroom and red colour value for the mushroom cap
function mushroom(x,y,w,h,r){
  //draw white ellipse for mushroom stype
  fill(255);
  ellipse(x,y,w/3,h);
  //draw mushroom cap
  fill(r,0,0);
  arc(x,y,w,h,180,0);
}

function mouseClicked(){
  //variable for random width of mushroom
  let rw = random(50,200);
  //variable for random height of mushroom
  let rh = random(50,200);
  //variable for random red value
  let rr = random(0,255);
  mushroom(mouseX,mouseY,rw,rh,rr);
}