let countX = 8;
let countY = 8;
let size = 32; // size of tile

function setup() {
    createCanvas(countX * size, countY * size);
    background(250);

    for(let x=0; x<countX; x++) {
        push();
        for(let y=0; y<countY; y++) {
            square(0, 0, size);
            square(0, 0, size/4);
            translate(0, size);
        }
        pop();
        translate(size, 0);
    }
}