let sound;
let amp;
let mic;


function preload() {
  sound = loadSound("assets/song.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  //amp = new p5.Amplitude();
  mic = new p5.AudioIn();
}

function draw() {
  background(220, 10);

  //let volume = amp.getLevel();
  let volume = mic.getLevel();
  let dia = map(volume, 0.0, 1.0, 1, 500);

  noStroke();
  fill(255, 0, 255);
  circle(width / 2, height / 2, dia);

  text(volume, 10, 20);
}

function mousePressed() {
  if (sound.isPlaying() == false) {
    //sound.play();
    sound.loop();
    // sound.setVolume(0.1);
  } else {
    sound.pause();
    //sound.stop();
  }
}