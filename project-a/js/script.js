let yTime = 0;
let creatureX, creatureY;
let targetX, targetY, lerpAmount;
let bgAlpha = 255;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-container");
    background(0, 51, 51);
    angleMode(DEGREES);

    creatureX = width / 2;
    creatureY = height + 200;
    targetX = width / 2;
    targetY = height / 2;
    lerpAmount = 0.05;
}

function draw() {
    background(0, 51, 51, bgAlpha);

    push();
    //blendMode(ADD);

    // move the creature using lerp();
    creatureX = lerp(creatureX, targetX, lerpAmount);
    creatureY = lerp(creatureY, targetY, lerpAmount);

    // env visuals
    // if (yTime == 300) {
    //   targetX = width;
    //   targetY = height/2;
    // }
    // console.log(creatureX)
    if (yTime < 900) {
        bgAlpha = map(yTime, 0, 600, 255, 10, true);

        let rad = map(yTime, 0, 900, 20, 100);
        star(creatureX, creatureY, rad * 2, 5, 8, 0.5);

        let radStar2;
        if (yTime < 550) {
            radStar2 = map(yTime, 0, 550, 0.0, 1.8);
        } else {
            radStar2 = map(yTime, 550, 900, 1.8, 0.4);
        }
        drawStar2(creatureX, creatureY, radStar2);

        // draw colorful
    } else if (yTime < 1800) {
        bgAlpha = map(yTime, 900, 1800, 10, 50, true);

        let rad = map(yTime, 900, 1800, 100, 80);
        star(creatureX, creatureY, rad * 2, 5, 8, 0.5);

        let radBlue = 1.0;
        if (yTime < 1200) {
            radBlue = map(yTime, 900, 1200, 0.0, 10, true);
        } else {
            radBlue = map(yTime, 1200, 1600, 10, 1, true);
        }
        drawStar3(creatureX, creatureY, radBlue);
    } else if (yTime < 2700) {
        let rad = map(yTime, 1800, 2700, 160, 5, true);
        let radAmp = map(yTime, 1800, 2700, 5, 250, true);
        star(creatureX, creatureY, rad, radAmp, 8, 0.5);

        let radBlue = map(yTime, 2000, 2200, 1, 0, true);
        drawStar3(creatureX, creatureY, radBlue);
    } else if (yTime < 3600) {
        //
        bgAlpha = map(yTime, 2900, 3600, 50, 10, true);

        let rad = map(yTime, 2700, 3600, 5, 600);
        let radAmp = map(yTime, 2700, 2900, 250, 5, true);
        star(creatureX, creatureY, rad, radAmp, 8, 0.5);

        let radPink = map(yTime, 2900, 3600, 0, 10, true);
        drawStar4(creatureX, creatureY, radPink);

        let radPink1 = map(yTime, 3300, 3600, 0, 3, true);
        push();
        blendMode(SCREEN);
        drawStar4(creatureX, creatureY, radPink1);
        pop();
    } else if (yTime < 3800) {
        let rad = map(yTime, 3600, 3800, 600, 1);
        star(creatureX, creatureY, rad, 5, 8, 0.5);

        let radPink = map(yTime, 3600, 3800, 10, 0.01, true);
        drawStar4(creatureX, creatureY, radPink);
    } else if (yTime < 4000) {
        background(0, 51, 51, bgAlpha);
    } else {
        // reset
        yTime = 0;
        creatureX = width / 2;
        creatureY = height + 200;
        targetX = width / 2;
        targetY = height / 2;
    }

    // 3600
    pop();

    noStroke();
    fill(255);
    text(round(frameRate()), 10, 20);
    text(yTime, 10, 40);

    yTime++;
}

function mousePressed() {
    targetX = mouseX;
    targetY = mouseY;
}

// star and rotation
function star(originX, originY, rad, radAmp, num = 5, rotSpd = 0.5) {
    push();
    translate(originX, originY);
    rotate(frameCount * rotSpd);

    let sinValue = sin(frameCount * 3);
    let scl = map(sinValue, -1, 1, 0.9, 1.1);
    scale(scl);

    beginShape();
    for (let angleRotate = 0; angleRotate < 360; angleRotate += num) {
        let freq = angleRotate * num;
        let amp = radAmp;
        let sinForRadDist = sin(freq) * amp;

        let radDist = rad + sinForRadDist; // Radial Distance

        let x = cos(angleRotate) * radDist;
        let y = sin(angleRotate) * radDist;

        stroke(0, 120, 255, 50);
        strokeWeight(1);
        line(0, 0, x, y);

        fill(255, 0, 102);
        circle(x, y, 2);
        //drawStar5(x, y, 0.1);

        vertex(x, y);
    }
    noFill();
    stroke(255, 0, 102);
    strokeWeight(1);
    endShape(CLOSE);

    pop();
}

// Rotating star function from the original code
function drawStar2(x, y, scl) {
    push();
    translate(x, y);
    // rotate(frameCount * 0.8);
    scale(scl);
    // Increase rotation speed over time
    let rotationSpeed = map(yTime, 0, 3600, 0.1, 3); // Map time to a speed value
    rotate(frameCount * -rotationSpeed);
    stroke(120, 60, 255);
    //strokeWeight(2);
    fill(120, 60, 255, 50);

    for (let i = 0; i < 5; i++) {
        for (let deg = 0; deg < 360; deg += 30) {
            let angle;
            //angle = deg + i * 5; // M: added i * 5factor.
            angle = deg + i * frameCount * 0.2;
            let radDist = 48 + i * 25;
            let x = cos(angle) * radDist;
            let y = sin(angle) * radDist;
            let dia = 35 - i * 7;

            circle(x, y, dia);
        }
    }

    pop();
}

function drawStar3(x, y, scl) {
    push();
    translate(x, y);
    rotate(frameCount * 0.5);
    //scale(scl);

    let inc = 72 + sin(frameCount * 0.5) * 2.0; // -0.9 ~ 0.9

    for (let angle = 0; angle < 360 * 10; angle += inc) {
        push();
        rotate(angle);
        fill(220, 12, 255, 10);
        stroke(12, 255, 250, 100);
        ellipse(20 * scl, 45 * scl, 12 * scl, 82 * scl);
        circle(5 * scl, 20 * scl, 7 * scl);
        ellipse(0, 0, 2 * scl, 30 * scl);
        pop();
    }
    pop();
}

function drawStar4(x, y, scl) {
    push();
    translate(x, y);
    rotate(frameCount * 0.1);
    //scale(scl);

    for (let angle = 0; angle < 360 * 20; angle += 72.3) {
        push();
        rotate(angle);

        // M: let's make the x value of the ellipse more dynamic
        let xAdj = sin(frameCount * 1.5) * 50;

        noFill();
        stroke(255, 51, 255, 100);
        ellipse((30 + xAdj) * scl, 5 * scl, 120 * scl, 80 * scl);
        circle(0, 0, 10 * scl);
        pop();
    }
    pop();
}
