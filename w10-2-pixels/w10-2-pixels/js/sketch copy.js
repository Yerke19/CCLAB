let img;


function preload() {
  img = loadImage("assets/colorful.jpg");
}


function setup() {
  let canvas = createCanvas(500, 281);
  canvas.parent("p5-canvas-container");
  background(220);
}


function draw() {
  background(220);


  //tint(255, 0, 0);
  image(img, 0, 0);


  //filter(GRAY);
  //filter(INVERT);
  //filter(BLUR, 6);
  filter(THRESHOLD, 0.5);


  //https://p5js.org/reference/p5/filter/
}


