function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
    background(220);
    noStroke();
}

function draw() {
    pointLight(250, 250, 250, 0, -height / 2, 350);
    ambientLight(150);

    rotate(frameCount);
    translate(width / 4, 0);
    rotate(frameCount * 2);

    specularMaterial(100 + sin(frameCount) * 100, 100, 100);
    shininess(10);

    box(60, 30, 10);
}
