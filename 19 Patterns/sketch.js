let canvasSize = 400;
let pattern;
let patternSize = 40;

function setup() {
    createCanvas(canvasSize, canvasSize);
    drawPattern();
}

function draw() {
    translate(random(canvasSize), random(canvasSize));
    rotate(random(TWO_PI));
    image(pattern, 0, 0);
}

function drawPattern() {
    pattern = createGraphics(patternSize, patternSize);
    pattern.background(60);
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
