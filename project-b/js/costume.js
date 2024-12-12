// let img;
// let particles = [];

// function preload() {
//   img = loadImage('assets/ornament.png');
// }

// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent("p5-canvas-container");
//   noStroke();

//   for (let i = 0; i < 80; i++) {
//     let x = map(i, 0, 49, 0, width);
//     particles.push(new Particle(x, random(height), 0, random(-0.3, 0.3)));
//   }
// }

// function draw() {
//   background(255, 228, 225);

//   for (let particle of particles) {
//     particle.update();
//     particle.display();
//   }
// }

// function mouseMoved() {
//   //console.log(mouseX, mouseY);

//   let yerkeDiv = document.getElementById("yerke-container");
//   yerkeDiv.style.left = mouseX + "px";
//   yerkeDiv.style.top = mouseY + "px";
// }



// class Particle {
//   constructor(x, y, xSpeed, ySpeed) {
//     this.x = x;
//     this.y = y;
//     this.xSpeed = xSpeed;
//     this.ySpeed = ySpeed;
//     this.size = random(40, 80);
//   }

//   // Methods must be defined outside the constructor
//   update() {
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;

//     if (this.x > width || this.x < 0) this.xSpeed *= -1;
//     if (this.y > height || this.y < 0) this.ySpeed *= -1;
//   }

//   display() {
//     imageMode(CENTER);
//     tint(255, 100)
//     image(img, this.x, this.y, this.size, this.size);
//   }
// }