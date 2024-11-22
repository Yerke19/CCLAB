let img;
let brushSize = 30;


function preload() {
  img = loadImage("assets/tree.jpg");
}


function setup() {
  let canvas = createCanvas(600, 523);
  canvas.parent("p5-canvas-container");
  background(240);
}


function draw() {
  //background(240);
  //image(img, 0, 0);


  for (let i = 0; i < 50; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let dia = random(5, 30);
    let selectedColor = img.get(x, y);
    fill(selectedColor);
    noStroke();
    circle(x, y, dia);
  }
}


