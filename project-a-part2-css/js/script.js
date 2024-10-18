let starNum = 13;
// let count = 0;
let countArray = Array(starNum).fill(0);
let angle = 0;
// let targetXArrary = [];
// let targetYArray = [];

// Arrays to store colors for each star
let starColors = [];
let mouseClick = 0;

let spdDivider = 7;
let x, y, spdX, spdY;

function setup() {
    createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
    angleMode(DEGREES);
    // Initialize random colors for each star
    for (let i = 0; i < starNum + 1; i++) {
        starColors.push([random(255), random(255), random(255)]);
    }
}
function draw() {
    background(0, 51, 51);
    //     CENTER
    star(width / 2, height / 2, width / 2, height / 2, false, 0);
    if (mouseIsPressed == true) {
        mouseClick = 1;
    } else if (mouseIsPressed == false && mouseClick == 1) {
        mouseClick = 2;
    } else if (mouseClick == 2) {
        // console.log("clicked");

        // top left corner
        star(width / 2, height / 2, width / 4, height / 4, false, 1);

        // top right corner
        star(width / 2, height / 2, (3 * width) / 4, height / 4, false, 2);

        // bottom right corner
        star(width / 2, height / 2, (3 * width) / 4, (3 * height) / 4, false, 3);

        // bottom left corner
        star(width / 2, height / 2, width / 4, (3 * height) / 4, false, 4);
        //     //     TOP LEFT
        //     star(width / 2, height / 2, width / 4, height / 4, false, 1);
        //        // Top-right corner
        // additional top left
        star(width / 2, height / 2, width / 5.5, height / 5.5, false, 5);

        star(width / 2, height / 2, width / 4.5, height / 4.5, false, 6);
        // star(width / 2, height / 2, width / 2.4, height / 2.4, false, 7);
        // additional top right
        star(width / 2, height / 2, (3 * width) / 5.5, height / 5.5, false, 7);
        // star(width / 2, height / 2, 3 * width / 3, height / 3, false, 9);
        star(width / 2, height / 2, (3 * width) / 4.5, height / 8, false, 8);
        // additional bottom left
        star(width / 2, height / 2, width / 6.5, (3 * height) / 6.5, false, 9);
        star(width / 2, height / 2, width / 5, (3 * height) / 5, false, 10);
        // additional  bottom right
        star(width / 2, height / 2, (3 * width) / 3.8, (3 * height) / 3.8, false, 11);
        star(width / 2, height / 2, (3 * width) / 3.6, (3 * height) / 4, false, 12);
    }
}
// reach target and stop
function star(originalX, originalY, targetX, targetY, reachTarget, i) {
    // count = countTest
    if (reachTarget == false) {
        spdX = (targetX - originalX) / spdDivider;
        spdY = (targetY - originalY) / spdDivider;
        x = originalX + spdX * countArray[i] * 0.1;
        y = originalY + spdY * countArray[i] * 0.1;
    }
    if (originalX <= targetX && originalY <= targetY) {
        // console.log("!");
        if (x >= targetX && y >= targetY) {
            spdX = 0;
            spdY = 0;
            reachTarget = true;
            x = targetX;
            y = targetY;
        }
    } else if (originalX <= targetX && originalY >= targetY) {
        if (x >= targetX && y <= targetY) {
            // console.log("3");
            spdX = 0;
            spdY = 0;
            reachTarget = true;
            x = targetX;
            y = targetY;
        }
    } else if (originalX >= targetX && originalY >= targetY) {
        if (x <= targetX && y <= targetY) {
            spdX = 0;
            spdY = 0;
            reachTarget = true;
            x = targetX;
            y = targetY;
        }
    } else if (originalX >= targetX && originalY <= targetY) {
        if (x <= targetX && y >= targetY) {
            spdX = 0;
            spdY = 0;
            reachTarget = true;
            x = targetX;
            y = targetY;
            // change the color when the star reaches the target
            starColors[i] = [random(255), random(255), random(255)];
        }
    }

    // drawing and rotating the star
    push();
    translate(x, y);
    for (let angleRotate = 0; angleRotate < 360; angleRotate += 2.99) {
        angle = angle + 2.99;

        let freq = angle * 12;
        let amp = 6;
        let sinForRadDist = sin(freq) * amp;

        let radDist = 30 + sinForRadDist; // Radial Distance

        let sinValue = sin(angle) * radDist;
        let cosValue = cos(angle) * radDist;

        // let x = width / 2 + cosValue;
        // let y = height / 2 + sinValue;
        push();
        rotate(angleRotate + frameCount * 0.1);

        fill(starColors[i][0], starColors[i][1], starColors[i][2]);
        stroke(255);
        line(0, 0, cosValue, sinValue);
        circle(cosValue, sinValue, 2);

        pop();
        strokeWeight(0.1);
    }
    pop();
    countArray[i] += 1;
}

