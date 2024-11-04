/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new YerkeDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class YerkeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //arms movement
    this.armAngle = 0;
    this.direction = 1;
    this.amplitude = 40;
    this.speed = 2;
    // body movement
    this.bodyMove = 0;
    this.bodyAmplitude = 20;
    this.bodySpeed = 0.08;
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    // arms go up and down
    this.armAngle += this.direction * this.speed;
    if (this.armAngle > this.amplitude || this.armAngle < -this.amplitude) {
      this.direction *= -1; // go up and down
    }
    // body goes up and down
    this.bodyMove = sin(frameCount * this.bodySpeed) * this.bodyAmplitude;
  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    //body
    translate(this.x, this.y + this.bodyMove);

    this.drawBody();
    // arms
    this.drawLimb(40, 0, radians(-10 + this.armAngle)); // right arm
    this.drawLimb(-40, 0, radians(190 - this.armAngle)); // left arm

    // this.drawReferenceShapes();
    pop();
  }
  drawLimb(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle)
    strokeWeight(4);
    stroke(102, 51, 0);
    line(0, 0, 80, 0);
    // gloves
    noStroke();
    fill(255);
    ellipse(80, 0, 25, 15);
    // fill(255);
    // ellipse(80, 2, 10, 5); // 

    pop();

  }
  drawBody() {
    //body

    noStroke();
    fill(255);
    circle(0, 50, 100);
    circle(0, 0, 93);
    circle(0, -50, 85);
    //eyes
    fill(0);
    ellipse(-15, -65, 10, 10); // left
    ellipse(15, -65, 10, 10);  // right
    //nose
    fill("orange");
    triangle(0, -55, -15, -45, 5, -45);
    //hat
    fill(200, 0, 0);
    rect(-40, -110, 80, 30);
    fill(255);
    rect(-40, -100, 80, 5); // bottom part
    fill(200, 0, 0);
    rect(-25, -150, 50, 40); // upper part

    // scarf
    fill(200, 0, 0);
    rect(-45, -35, 90, 15);
    rect(15, -25, 15, 40);

    // buttons
    fill(200, 0, 0);
    ellipse(0, -10, 10, 10);
    ellipse(0, 15, 10, 10);
    ellipse(0, 40, 10, 10);

  }
  // the next function draws a SQUARE and CROSS
  // to indicate the approximate size and the center point
  // of your dancer.
  // it is using "this" because this function, too, 
  // is a part if your Dancer object.
  // comment it out or delete it eventually.


  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}


/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/