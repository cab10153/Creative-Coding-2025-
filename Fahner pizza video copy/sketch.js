let myPizzas = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
 
  }
  function draw() {
   background (100);
   for (let i = 0; i<myPizzas.length; i++){
    myPizzas[i].display();
  
  }
}

  function mousePressed(){
    let tempPizza = new Pizza(mouseX,mouseY,random(200,400),random(20)); 
    myPizzas.push(tempPizza);
  }


class Pizza {
 constructor (x,y,diameter,numberOfIngredients) { 
  this.x = x; 
  this.y = y; 
  this.diameter = diameter; 
  this.numberOfIngredients = numberOfIngredients;
  this.ingredientPositions = [];

  for (let i = 0;i< this.numberOfIngredients; i++) {
    let spacing = 360/ (this.numberOfIngredients);
    let pepX= cos(radians(i * spacing)) * ((this.diameter/2)-30);
    let pepY = sin(radians(i * spacing)) * ((this.diameter/2)-30);
    let newVector = createVector(pepX,pepY);
    this.ingredientPositions.push(newVector);


 }


  display() { 
    push(); 
    translate(this.x, this.y); 
    circle (0,0,this.diameter + 40); 
    circle (0,0,this.diameter);
		fill (255,0,0);
		for (let i = 0; i < this.numberOfIngredients; i++) {
    circle(this.ingredientPositions[i].x,this.ingredientPositions[i].y,20);
    	}
			pop(); // push and pop makes sure this is isolated to this specific object


	}
	}
}

  // display() { 
  //   push(); 
  //   translate(this.x, this.y); 
  //   circle (0,0,this.diameter + 40); 
  //   circle (0,0,this.diameter);
	// 	fill (255,0,0);
	// 	for (let i = 0; i < this.numberOfIngredients; i++) {
  //   circle(this.ingredientPositions[i].x,this.ingredientPositions[i].y,20);
  //   	}
	// 		pop(); // push and pop makes sure this is isolated to this specific object
