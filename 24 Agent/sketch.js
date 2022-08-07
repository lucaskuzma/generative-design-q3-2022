let table;
let canvasSize = 520;
let agentCount = 20;
let agents = [];

class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(4) - 2;
        this.vy = random(4) - 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.vx = -this.vx;
        if (this.y < 0) this.vy = -this.vy;

        if (this.x > canvasSize) this.vx = -this.vx;
        if (this.y > canvasSize) this.vy = -this.vy;
    }

    draw() {
        circle(this.x, this.y, 5);
    }
}

function setup() {
    createCanvas(canvasSize, canvasSize);

    let x = canvasSize / 2;
    let y = canvasSize / 2;

    for (let a = 0; a < agentCount; a++) {
        agents.push(new Agent(x, y));
    }
}

function draw() {
    for (let a = 0; a < agentCount; a++) {
        agents[a].update();
        agents[a].draw();
    }
}
