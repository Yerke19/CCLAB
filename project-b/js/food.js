let foodLocations = [
  { x: 352, y: 181, rad: 25, name: "Наурыз көже/Nauryz Kozhe", info: "Kozhe means soup and consists of 7 ingredients: milk, meat, oil, millet, rice, raisins, corn. 7 is a sacred number." },
  { x: 290, y: 262, rad: 12, name: "Қымыз/Kymyz", info: "A traditional fermented dairy product made from horse milk" },
  { x: 383, y: 280, rad: 20, name: "Құрт/Kurt", info: "An ancient fermented salty milk product. It saved lives of Kazakh people during Great Famine in 20th century" },
  { x: 435, y: 265, rad: 20, name: "Бауырсақ/Bauyrsak", info: "A unique fried bread with a puffy appearance consisting of flour, milk, salt, sugar, eggs, butter, and yeast" },
  { x: 222.06060409545898, y: 272.12121200561523, rad: 10, name: "Шәй/Shai", info: "Kazakh people LOVE tea!" },
  { x: 169.06060409545898, y: 290.12121200561523, rad: 10, name: "Шәй/Shai", info: "If you pour full cup of tea for someone, then it means the person is not welcomed" },
  { x: 237.06060409545898, y: 303.12121200561523, rad: 10, name: "Шәй/Shai", info: "Kazakhs drink tea for every meal of the day, mainly black and milk" },
  { x: 325.060604095459, y: 310.12121200561523, rad: 10, name: "Шәй/Shai", info: "Still tea" },
  { x: 417.060604095459, y: 308.12121200561523, rad: 10, name: "Шәй/Shai", info: "Tea in Kazakhstan is very addictive, you drink cup after cup..." },
  { x: 489.060604095459, y: 307.12121200561523, rad: 10, name: "Шәй/Shai", info: "And cannot stop!" },
  { x: 557.060604095459, y: 297.12121200561523, rad: 10, name: "Шәй/Shai", info: "Tea in Kazakh is called shai. Kazakh people drink hot tea even in summer" },
];

let foodButtons = [];
let img;
let forumFont;

function preload() {
  img = loadImage("assets/food.jpg"); // preload image
  forumFont = loadFont('assets/Forum-Regular.ttf'); // Load the "Forum" font
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // Set font for all text
  textFont(forumFont);

  // Create buttons for each food location
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
  background(255); // white background
  image(img, 0, 0, 800, 500); // draw the image on the canvas

  // Check and display each button
  for (let i = 0; i < foodButtons.length; i++) {
    let btn = foodButtons[i];
    btn.checkMouse();
    btn.display(); // Draw the buttons
  }
}

function mousePressed() {
  console.log("{ x:" + mouseX + ", y:" + mouseY + " },");
}

class Button {
  constructor(x, y, rad, name, info) {
    this.name = name;
    this.info = info;
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }

  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // If mouse is in the area
      this.r = 255;
      this.g = 255;
      this.b = 0;

      push();
      translate(mouseX, mouseY);
      textSize(22);

      stroke(255, 0, 0);

      fill(255);
      textStyle(BOLD);
      text(this.name, 30, 0); // Display name next to the mouse
      pop();

      // Display information at the bottom of the canvas
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
      // Mouse is out of the area
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }

  display() {
    push(); // for styling
    noFill();
    stroke(this.r, this.g, this.b);
    // ellipse(this.x, this.y, this.rad * 2, this.rad * 2); // Draw the ellipse
    pop();
  }
}
