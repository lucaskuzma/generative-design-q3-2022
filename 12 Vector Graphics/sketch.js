function setup() {
    createCanvas(540, 540, SVG);
    angleMode(DEGREES);
}

function draw() {
    render(floor(mouseX / 20));
}

function render(multiplier) {
    background(255);
    push();
    translate(width / 2, height / 2);

    let step = 20;
    let r = width / 4;

    beginShape();
    for (let theta = 0; theta <= 360; theta += step) {
        let rho = r + sin(theta * multiplier) * 60;

        // pol2car
        let x = rho * cos(theta);
        let y = rho * sin(theta);

        vertex(x, y);
    }
    endShape();
    pop();
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
