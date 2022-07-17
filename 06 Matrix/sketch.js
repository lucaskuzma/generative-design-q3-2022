function setup() {
    createCanvas(512, 485);
    angleMode(DEGREES);
}

function draw() {
    background(250);
    let angle = frameCount % 360;

    translate(width / 2, height / 2);
    rotate(angle);

    circle(0, 0, 10);
    line(0, 0, 40, 0);
    text(angle, 4, -4);

    translate(40, 0);
    rotate(angle);

    circle(0, 0, 10);
    line(0, 0, 40, 0);
    text(angle, 4, -4);

    translate(40, 0);
    rotate(angle);

    circle(0, 0, 10);
    line(0, 0, 40, 0);
    text(angle, 4, -4);

    translate(40, 0);
    rotate(angle);

    circle(0, 0, 10);
    line(0, 0, 40, 0);
    text(angle, 4, -4);
    circle(40, 0, 10);
}
