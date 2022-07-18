function setup() {
    createCanvas(512, 485);
    angleMode(DEGREES);
}

function draw() {
    background(250);
    let angle = frameCount % 360;
    let count = 20;
    let span = 20;

    translate(width / 2, height / 2);

    for (let i = 0; i < count; i++) {
        let stepAngle = angle / (i + 1);
        translate(span, 0);
        rotate(stepAngle);

        circle(0, 0, 10);
        line(0, 0, span, 0);
        text(round(stepAngle), 4, -4);
    }
    circle(span, 0, 10);
}
