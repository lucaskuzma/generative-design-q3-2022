var rectWidth = 10; // notice the `var` here
var rectHeight = 10;
var nAcross = 10;
var nDown = 10;
var stepAcross = 20;
var stepDown = 20;

var scaleAcross = 0.98;
var scaleAcrossMin = 0.1;
var scaleAcrossMax = 1.0;
var scaleAcrossStep = 0.01;

var scaleDown = 0.98;
var scaleDownMin = 0.1;
var scaleDownMax = 1.0;
var scaleDownStep = 0.01;

var spinX = 0;
var spinY = 0;

var bgColor = 255;
let gui;

function setup() {
    createCanvas(400, 400, SVG);
    rectMode(CENTER);
    angleMode(DEGREES);

    gui = createGui('my gui');
    gui.addGlobals(
        'rectWidth',
        'rectHeight',
        'nAcross',
        'nDown',
        'stepAcross',
        'stepDown',
        'scaleAcross',
        'scaleDown',
        'spinX',
        'spinY',
        'bgColor'
    );
}

function draw() {
    background(bgColor);

    for (let j = 0; j < nDown; j++) {
        for (let i = 0; i < nAcross; i++) {
            let x = i * stepAcross;
            let y = j * stepDown;
            let w = rectWidth * Math.pow(scaleAcross, i);
            let h = rectHeight * Math.pow(scaleDown, j);
            push();
            translate(x, y);
            rotate(i * spinX + j * spinY);
            rect(0, 0, w, h);
            pop();
        }
    }
}

function keyPressed() {
    // spacebar
    if (keyCode == 32) {
        var now =
            year() +
            '-' +
            month() +
            '-' +
            day() +
            '-' +
            hour() +
            '-' +
            minute() +
            '-' +
            second();
        save(now);
    }
}
