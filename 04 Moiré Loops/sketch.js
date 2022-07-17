let x1 = 0;
let y1 = 10;
let x2 = 0;
let y2 = 10;

function setup() {
    createCanvas(540, 540);
    background(250);
    strokeWeight(0.25); // skinny lines
}

function draw() {
    line(x1, y1, x2, y2);

    x2 = (x2 + 1) % width;
    y1 = (y1 + 1) % height;
    y2 = (y2 + 1.2) % height;
}
