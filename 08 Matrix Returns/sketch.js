function setup() {
    createCanvas(512, 485);
    angleMode(DEGREES);
}

function draw() {
    background(250);
    let angle = frameCount % 360;
    let count = 10;
    let span = 120;

    translate(width / 2, height / 2);

    for (let i = 0; i < count; i++) {
        let stepSpan = span / (i + 1);
        circle(0, 0, i);

        rotate(angle);

        circle(0, 0, i + 1);
        line(0, 0, stepSpan, 0);
        text(angle, 4, -4);
        translate(stepSpan, 0);
    }
    circle(0, 0, 10);
}
