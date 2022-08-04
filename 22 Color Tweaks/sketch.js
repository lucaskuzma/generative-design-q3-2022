let colors;
let freq = 440;
let ph = 0;
let amp = 100;
let zoom = 0.01;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();

    angleMode(DEGREES);
    colorMode(HSB);
    colors = ['#283d3b', '#197278', '#edddd4', '#c44536', '#772e25'];
}

function draw() {
    background(255);
    translate(width / 2, height / 2);

    let t = frameCount;

    let angle = sin(zoom * t * freq + ph) * amp;
    // text(angle, 0, -120);

    let colorA = color(colors[0]);
    let colorB = color(colors[2]);
    let mix = map(angle, -amp, amp, 0, 1);
    let mixColor = lerpColor(colorA, colorB, mix);
    fill(mixColor);

    rotate(angle);
    rect(0, 0, 100);

    let colorC = color(colors[2]);
    let hueTweak = map(angle, -amp, amp, -20, 20);
    let colorD = color(
        hue(colorC) + hueTweak,
        saturation(colorC),
        brightness(colorC)
    );
    fill(colorD);
    circle(0, 0, 50);
}
