let x = 10;
let y = 10;

function setup() {
    createCanvas(300, 200);
    background(100);
    fill(100);
}

function draw() {
    square(x, y, 20);
    x += 4;
    x %= width;
    y = (y + 1) % height;
}