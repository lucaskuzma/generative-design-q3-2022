function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    background(220);

    pointLight(250, 250, 250, 0, -height / 2, 350);
    ambientLight(150);

    specularMaterial(100 + sin(frameCount) * 100, 100, 100);
    shininess(10);

    let top = -height / 2;
    let bottom = height / 2;
    for (let y = top; y < bottom; y += 20) {
        push();
        translate(0, y);
        rotateY(frameCount + y);
        translate(100, 0);
        box(10, 10, 10);
        translate(-200, 0);
        box(10, 10, 10);
        pop();
    }
}
