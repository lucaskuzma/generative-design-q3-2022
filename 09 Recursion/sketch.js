function setup() {
    createCanvas(400, 400);
    frameRate(1);
}

function draw() {
    background(250);
    halve(0, 0, 400, 400);
}

function halve(x, y, w, h, depth = 0) {
    let limit = 5;
    if (depth > 20) return;

    fill(depth * 10);
    stroke(255);
    rect(x, y, w, h);

    // coin toss
    if (random() < 0.5) {
        let nw = random(w);
        if (nw > limit && nw < w - limit) {
            halve(x, y, nw, h, depth + 1);
            halve(x + nw, y, w - nw, h, depth + 1);
        }
    } else {
        let nh = random(h);
        if (nh > limit && nh < h - limit) {
            halve(x, y, w, nh, depth + 1);
            halve(x, y + nh, w, h - nh, depth + 1);
        }
    }
}
