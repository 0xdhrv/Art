let x = 0;
let y = 0;
let space = 20;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    noiseSeed(53);
    stroke(255);
    if (random(1) < 0.5) {
        // noStroke();
        // fill(255);
        // rect(x, y, space, space);
        strokeWeight(2);
        stroke(noise(x, y) * 255);
        line(x, y, x + space, y + space);
        triangle(x - space, y - space, x, y, x + space, y + space);
    } else {
        // noStroke();
        // fill(0);
        // rect(x, y, space, space);
        strokeWeight(2);
        stroke(noise(x, y) * 255);
        line(x, y + space, x + space, y);
        triangle(x - space, y - space, x, y, x + space, y + space);
    }
    x = x + space;
    if (x > width) {
        x = 0;
        y = y + space;
    }
}