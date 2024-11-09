// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 110 // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 35);
    particles.push(new Particle(x, y, r));
  }
}

function draw() {
  background(0);


  // consider generating particles in draw(), using Dynamic Array

  // update and display the particles
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.reappear();
    p.display();
  }
}
function mousePressed() {
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].isClicked()) {
      particles.splice(i, 1); // Remove the particle from the array
      disappear;
    }
  }
}
class Particle {
  // constructor function
  constructor(x, y, rad) {
    // properties (variables): particle's characteristics
    this.x = x;
    this.y = y;
    this.xSpeed = random(-2, 1);
    this.ySpeed = random(-2, 1);
    this.rad = rad;
    // color
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    // rotSpeed
    this.rotSpeed = random(0.03, 0.08);
    this.rotDist = random(1, 3);
  }
  // methods (functions): particle's behaviors
  // update() {
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  reappear() {
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }


  }
  display() {
    let xAdj = cos(frameCount * this.rotSpeed) * this.rotDist;
    let yAdj = sin(frameCount * this.rotSpeed) * this.rotDist;

    push();
    translate(this.x + xAdj, this.y + yAdj);
    strokeWeight(0.5);
    stroke(this.r, this.g, this.b);
    fill(this.r, this.g, this.b, 35);
    circle(0, 0, this.rad * 2);
    noFill();
    strokeWeight(1);
    stroke(this.r, this.g, this.b, 60);
    circle(0, 0, this.rad * 2 - 3);
    strokeWeight(0.25);
    stroke(this.r, this.g, this.b, 50);
    circle(0, 0, this.rad * 2 - 7);
    pop();
  }
  isClicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.rad;
  }
}