let down = false; // see also mouseIsPressed!

function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(100);
}

function draw() {
    if (down) {
        rect(mouseX, mouseY, 2, 50);
    }
}

function mousePressed() {
    down = true;
}

function mouseReleased() {
    down = false;
}

function doubleClicked() {
    background(255);
}
