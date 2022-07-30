var count = 20;
let size = 400;
let magnitude = 40;
let freq = 0.01;

function setup() {
    createCanvas(size, size);
    rectMode(CENTER);
    angleMode(DEGREES);
    noStroke();
    fill(0);
}

function draw() {
    background(255);

    let itemSize = size / count;
    translate(0.5 * itemSize, 0.5 * itemSize);

    for (let j = 0; j < count; j++) {
        for (let i = 0; i < count; i++) {
            let x = i * itemSize;
            let y = j * itemSize;

            let vx = magnitude * 2 * (noise(i * freq, frameCount * freq) - 0.5);
            let vy = magnitude * 2 * (noise(j * freq, frameCount * freq) - 0.5);

            push();

            translate(x, y);
            ellipse(0, 0, vx, vy);
            // line(0, 0, vx, vy);

            pop();
        }
    }
}
