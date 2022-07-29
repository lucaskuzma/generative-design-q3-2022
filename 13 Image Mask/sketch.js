let img;
function preload() {
    img = loadImage(
        'https://www.artic.edu/iiif/2/07783936-58fb-859d-9350-fb600510177a/full/843,/0/default.jpg'
    );
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);
}

function draw() {
    for (let s = 0; s < 5; s++) {
        let x = random(width / 4);
        let y = random(width / 4);
        let w = width / 4;
        let h = height / 4;
        imgCopy = img.get(x, y, w, h);

        let mask = randomMask(3, w, h);
        imgCopy.mask(mask);

        let px = random(width);
        let py = random(height);
        image(imgCopy, px, py);
    }
}

function randomMask(vertextCount, w, h) {
    let mask = createGraphics(w, h);
    mask.noStroke();
    mask.fill(0);
    mask.beginShape();
    for (let p = 0; p < vertextCount; p++) {
        mask.vertex(random(w), random(h));
    }
    mask.endShape();
    return mask;
}

function keyPressed() {
    // spacebar
    if (keyCode == 32) {
        background(255);
    }
}
