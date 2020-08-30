let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
    createCanvas(480, 480);
    stroke(255);

    let radius = min(width, height) / 2;
    secondsRadius = radius * 0.80
    minutesRadius = radius * 0.5;
    hoursRadius = radius * 0.25;
    clockDiameter = radius * 1.65;

    cx = width / 2;
    cy = height / 2;
}

function draw() {
    background(0, 0, 0);
    noStroke();
    fill(21, 21, 21);
    ellipse(cx, cy, clockDiameter, clockDiameter);
    
    let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

    stroke(255);
    strokeWeight(2);
    line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
    strokeWeight(2);
    line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
    strokeWeight(2);
    line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

    strokeWeight(1);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 6) {
        let angle = radians(a);
        let x = cx + cos(angle) * secondsRadius;
        let y = cy + sin(angle) * secondsRadius;
        vertex(x, y);
    }
    endShape();
}