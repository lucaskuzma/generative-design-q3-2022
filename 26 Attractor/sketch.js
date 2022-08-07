let table;
let canvasSize = 520;
let agentCount = 6;
let agents = [];

class Agent {
    constructor() {
        this.reincarnate();
    }

    update() {
        this.avoid();

        this.px = this.x;
        this.py = this.y;
        this.x += this.vx;
        this.y += this.vy;

        if (mouseIsPressed) {
            this.vx = 0.9 * this.vx + 0.1 * (mouseX - this.x);
            this.vy = 0.9 * this.vy + 0.1 * (mouseY - this.y);
        }

        this.constrain();
    }

    constrain() {
        if (this.x < 0) this.vx = -this.vx;
        if (this.y < 0) this.vy = -this.vy;

        if (this.x > canvasSize) this.vx = -this.vx;
        if (this.y > canvasSize) this.vy = -this.vy;
    }

    reincarnate() {
        this.x = random(canvasSize);
        this.y = random(canvasSize);
        this.px = this.x;
        this.py = this.y;
        this.vx = random(4) - 2;
        this.vy = random(4) - 2;
        circle(this.x, this.y, 10);
    }

    avoid() {
        let threshold = 3;
        for (let a = 0; a < agentCount; a++) {
            let other = agents[a];
            if (
                dist(this.x, this.y, other.x, other.y) != 0 &&
                dist(this.x, this.y, other.x, other.y) < threshold
            ) {
                this.reincarnate();
            }
            // attract each other
            this.vx = 0.999 * this.vx + 0.001 * (other.x - this.x);
            this.vy = 0.999 * this.vy + 0.001 * (other.y - this.y);
        }
    }

    draw() {
        stroke(this.vx * 10, this.vy * 10, 100);
        line(this.px, this.py, this.x, this.y);
    }
}

function setup() {
    createCanvas(canvasSize, canvasSize);

    let x = canvasSize / 2;
    let y = canvasSize / 2;

    for (let a = 0; a < agentCount; a++) {
        agents.push(new Agent());
    }
}

function draw() {
    for (let a = 0; a < agentCount; a++) {
        agents[a].update();
        agents[a].draw();
    }
}
