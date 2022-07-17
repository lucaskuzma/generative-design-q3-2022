function setup() {
    createCanvas(400, 400);
    background(200);

    let greeting = 'Hello';
    let x = 24;
    let y = 96;
    y = y + 100;

    text(x + ',' + y, x, y);

    y = y + 20;
    text(x + ',' + y, x, y);

    y = y + 100;
    text(x + ',' + y, x, y);
}
