let foodLocations = [
  { x: 352, y: 181, rad: 25, name: "Nauryz Kozhe", info: "7 ingredients" },
  { x: 290, y: 262, rad: 12, name: "Kumyz", info: "horse milk" },
  { x: 383, y: 280, rad: 20, name: "Kurt", info: "salty snack" },
  { x: 435, y: 265, rad: 20, name: "Baursak", info: "fried dough" },
  { x: 222.06060409545898, y: 272.12121200561523, rad: 10, name: "Tea", info: "Not important" },
  { x: 169.06060409545898, y: 290.12121200561523, rad: 10, name: "Tea", info: "Not important" },
  { x: 237.06060409545898, y: 303.12121200561523, rad: 10, name: "Tea", info: "Not important" },
  { x: 325.060604095459, y: 310.12121200561523, rad: 10, name: "Tea", info: "Not important" },
  { x: 417.060604095459, y: 308.12121200561523, rad: 10, name: "Tea", info: "Not important" },
  { x: 489.060604095459, y: 307.12121200561523, rad: 10, name: "Tea", info: "Not important" },
  { x: 557.060604095459, y: 297.12121200561523, rad: 10, name: "Tea", info: "Not important" },
];


let foodButtons = [];
let img;

function preload() {
  // preload() runs once
  img = loadImage("assets/food.jpg");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < foodLocations.length; i++) {
    let x = foodLocations[i].x;
    let y = foodLocations[i].y;
    let rad = foodLocations[i].rad;
    let name = foodLocations[i].name;
    let info = foodLocations[i].info;
    foodButtons.push(new Button(x, y, rad, name, info));
  }
}

function draw() {
  background(255);
  image(img, 0, 0, 800, 500);

  for (let i = 0; i < foodButtons.length; i++) {
    let btn = foodButtons[i];
    btn.checkMouse();
    //btn.display();
  }
}

function mousePressed() {
  // let position = { x: mouseX, y: mouseY };
  console.log("{ x:" + mouseX + ", y:" + mouseY + " },");

}

class Button {
  constructor(x, y, rad, name, info) {
    this.name = name;
    this.info = info;
    //
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // mouse is in the area
      this.r = 255;
      this.g = 255;
      this.b = 0;

      push();
      translate(mouseX, mouseY);
      textSize(20);
      stroke(255, 0, 0);
      fill(255);
      text(this.name, 30, 0);
      pop();

      push();
      fill(255);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(this.info, width / 2, height - 50);
      pop();

      if (mouseIsPressed) {
        this.r = 255;
        this.b = 0;
        this.g = 0;
      }
    } else {
      // mouse is out of the area
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  display() {
    push(); // for styling

    noFill();
    stroke(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 2); // ellipse takes a diameter!

    pop();
  }
}