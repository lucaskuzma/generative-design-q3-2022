let img;
function preload() {
    img = loadImage(
        'https://www.artic.edu/iiif/2/0e79df13-f44e-a59a-255a-0fbd7cf86c45/full/1686,/0/default.jpg'
    );
}

function setup() {
    createCanvas(400, 400);
    frameRate(1);
}

function draw() {
    image(img, 0, 0, width, height);

    noStroke();

    for (let s = 0; s < 5; s++) {
        fill(random(255), 100, 100, 70);
        randomShape(3);
    }
}

function randomShape(vertextCount) {
    beginShape();
    for (let p = 0; p < vertextCount; p++) {
        vertex(random(width), random(height));
    }
    endShape();
}
