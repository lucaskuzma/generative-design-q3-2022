var rectWidth = 1; // notice the `var` here
var rectHeight = 1;
var bgColor = 255;
let gui;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    angleMode(DEGREES);

    gui = createGui('my gui');
    gui.addGlobals('rectWidth', 'rectHeight', 'bgColor');
}

function draw() {
    background(bgColor);

    translate(width / 2, height / 2);

    for (let x = 0; x < 720; x++) {
        push();
        rotate(x / 2);
        translate(width / 4, 0);
        rotate(x * 2);

        rect(0, 0, rectWidth, rectHeight);
        pop();
    }
}
