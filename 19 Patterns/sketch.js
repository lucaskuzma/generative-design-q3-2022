let canvasSize = 400;
let pattern;
let patternSize = 40;

function setup() {
    createCanvas(canvasSize, canvasSize);
    drawPattern();
    angleMode(DEGREES);
}

function draw() {
    let x = random(canvasSize);
    let y = random(canvasSize);
    x = quantize(x, patternSize);
    y = quantize(y, patternSize);
    translate(x, y);

    let angle = random(360);
    angle = quantize(angle, 90);
    rotate(angle);

    image(pattern, 0, 0);
}

function drawPattern() {
    pattern = createGraphics(patternSize, patternSize);
    pattern.background(random(100));
    pattern.noStroke();
    for (let i = 0; i < 10; i++) {
        fill(random(255));
        pattern.circle(
            random(patternSize),
            random(patternSize),
            random(patternSize / 4)
        );
    }
}

function quantize(value, step) {
    return floor(value / step) * step;
}

function keyPressed() {
    // spacebar
    if (keyCode == 32) {
        drawPattern();
    }
}
