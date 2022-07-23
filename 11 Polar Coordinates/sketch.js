function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250);
    angleMode(DEGREES);
}

function draw() {
    let theta = frameCount % 360;
    let rho = width / 4;

    // polar to cartesian
    let x = rho * cos(theta);
    let y = rho * sin(theta);

    translate(width / 2, height / 2);
    circle(x, y, 4);
}
