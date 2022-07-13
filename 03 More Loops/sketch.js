let x = 10;
let y = 10;
let f = 0;

function setup() {
    createCanvas(300, 200);
    background(100);
    noStroke();
}

function draw() {
    fill(f);
    
    circle(x, y, 70);

    x = (x * 2) % width;
    y = (y + 8) % height;
    
    f += 3;
    f = f % 255;
}