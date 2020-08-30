let x = 0;
let y = 0;
let space = 40;

function setup() {
    createCanvas(480, 480);
    background(0);
}

function draw() {
    stroke(255);
    if (random(1) < 0.5) {
        noStroke();
        fill(255);
        rect(x, y, space, space);
        strokeWeight(2);
        stroke(128);
        line(x, y, x + space, y + space);

    } else {
        noStroke();
        fill(0);
        rect(x, y, space, space);
        strokeWeight(2);
        stroke(128);
        line(x, y + space, x + space, y);
    }
    x = x + space / 4;
    if (x > width) {
        x = 0;
        y = y + space / 4;
    }
}