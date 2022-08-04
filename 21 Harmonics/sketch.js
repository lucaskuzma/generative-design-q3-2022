function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
}

function draw() {
    background(255);
    translate(0, height / 2);

    let freq = 440;
    let ph = 0;
    let amp = 50;

    let zoom = 0.0001;

    beginShape();
    for (let t = 0; t < width; t++) {
        let y = sin(zoom * t * freq + ph) * amp;
        vertex(t, y);
    }
    endShape();
}
