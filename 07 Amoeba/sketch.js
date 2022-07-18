function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(220);
    translate(width / 2, height / 2);
    let count = 8;
    let angle = 360 / count;
    let theta = 0;
    let r = 100;

    beginShape();
    for (let i = 0; i < count + 3; i++) {
        let x = r * sin(theta);
        let y = r * cos(theta);

        x += noise(frameCount / 90, 100 + (i % count) / 10) * 90;
        y += noise(frameCount / 90, (i % count) / 10) * 90;

        curveVertex(x, y);
        circle(x, y, 10);

        theta += angle;
    }
    endShape();
}
