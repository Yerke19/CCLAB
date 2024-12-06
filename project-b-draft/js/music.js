let img;
let mySound;


function preload() {
  // preload() runs once
  img = loadImage("assets/dombra.jpg");
  sound = loadSound("assets/dombra sound.mp3");

}



function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}
function mousePressed() {
  if (sound.isPlaying() == false) {
    sound.play();
    // } else {
    //   sound.pause();
    // sound.stop();
    // }
  }
}
function draw() {
  background(255);
  image(img, 0, 0, 800, 500);
  text("Click here to play", 10, 20);


}


