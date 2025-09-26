let circleSize = 125;
//variable declaration;
//"let" is a keyword that allows you to declare a variable
//im the below example, a new variable is created
// called "circleSize" which is storing a number (125)

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  // a grayscale color is denoted as a number 0-255
  // an rgb color is denoted as 3 numbers (red, green, blue)
  //background (127,54,200)
  //we can use the name of a color like "black" or "olive"
  //background("rgb(0,0,0)");
  background("rgba(171, 29, 29, 1)"); 
  rect(0,0,width/2, height/2);
  noStroke();
  fill("rgb 0,0,0")
circle(200,100,50);
//circle takes 3 parameters, x, y and d;
  stroke("rgba(21, 171, 151, 1)");
  strokeWeight("10");
  //nostroke(); gets rid of the stroke completely
  //nofill() gets rid of fill completely
  fill("rgba(12, 113, 191, 1)");
  //rect takes 4 parametrs:
  //x coord of top left, y coord of top left, width and height
  rect(100,00,150,50);
  //elipse (x,y,w,h)
  ellipse(250,80,10,20);
  //line takes 2 coordinates x1,y1,x2,y2
  line(250,130,260,130);
  //to draw complex polygons (more than 2 cords)
  // create a beginShape(); function function and endshape function
  // any vertex(x,y) functions you place inbetweem beginShape and endShape
  //will be rendered as points in a complete polygon
  beginShape();
  vertex(100,100) // leftmost coordinate
  vertex(200,100)// top right coordinate
  vertex(200,150) // bottom most coordinate
  endShape(close); // CLOSE parameter closes the polygon
 
 
  fill("rgba(18, 192, 99, 1)");
  stroke("rgba(181, 15, 151, 1)");
   circle(100,100+100,circleSize);
   circle(width/2,height*0.75,width/2.75);
 
ellipse(mouseX,mouseY,mouseY,mouseX);
//arcs are like elipses, except they have extra parameters
//start and end, which are provided in Radians format
//you can convert degrees to radians using the radians() function
arc(width/2,height*0.75,100,100,0,PI/2)
}
