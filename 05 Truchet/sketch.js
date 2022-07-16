let countX = 8;
let countY = 8;
let size = 32; // size of tile

function setup() {
    createCanvas(countX * size, countY * size);
    background(250);
    angleMode(DEGREES);

    for(let x=0; x<countX; x++) {
        for(let y=0; y<countY; y++) {
            push();

            translate(x * size, y * size);
            
            translate(size / 2, size / 2);
            rotate(random([0, 90, 180, 270]));
            translate(-size / 2, -size / 2);

            square(0, 0, size);
            square(0, 0, size / 2);
            
            pop();
        }
    }
}