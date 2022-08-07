let table;
let canvasSize = 520;
let agentCount = 20;
let agents = [];

class Agent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.v = random(4) - 2;
        this.θ = random(360);
    }

    update() {
        this.avoid();

        this.x += this.v * cos(this.θ);
        this.y += this.v * sin(this.θ);

        this.constrain();
    }

    constrain() {
        if (
            this.x < 0 ||
            this.y < 0 ||
            this.x > canvasSize ||
            this.y > canvasSize
        )
            this.θ += 180;
    }

    avoid() {
        let threshold = 20;
        for (let a = 0; a < agentCount; a++) {
            let other = agents[a];
            if (
                dist(this.x, this.y, other.x, other.y) != 0 &&
                dist(this.x, this.y, other.x, other.y) < threshold
            ) {
                this.θ = random(360);
            }
        }
    }

    draw() {
        circle(this.x, this.y, 5);
    }
}

function setup() {
    createCanvas(canvasSize, canvasSize);
    angleMode(DEGREES);

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
