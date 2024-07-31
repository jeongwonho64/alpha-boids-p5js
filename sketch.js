const flock = [];
const objects = [];
const eagle = [];
const ringleads = [];

function setup() {
    createCanvas(800, 600);

    for (let i = 0; i < 100; i++) {
        flock.push(new Boid(0, 255, 0, false));
    }
    for (let i = 0; i < 5; i++) {
        eagle.push(new Boid(255, 0, 0, false));
    }

    for (let i = 0; i < 2; i++) {
        objects.push(new objec(i * 200 + 300, 300));
    }

    for (let i = 0; i < 2; i++) {
        ringleads.push(new Boid(255, 255, 0, false));
    }
}

function draw() {
    background(0, 0, 51);

    for (const boid of flock) {
        boid.flock(flock, objects, eagle, ringleads);
        boid.update();
        boid.show();
    }

    for (const boid of ringleads) {
        boid.flock(ringleads, objects, eagle, flock);
        boid.update();
        boid.show();
    }

    for (const obj of objects) {
        obj.show();
    }

    for (const kill of eagle) {
        kill.hunt(eagle, objects, flock);
        kill.update();
        kill.show();
    }
}

function mouseClicked() {
    let x = random([0, 1, 2]);
    if (x == 0) {
        flock.push(new Boid(0, 255, 0, true));
    } else if (x == 1) {
        eagle.push(new Boid(255, 0, 0, true));
    } else if (x == 2) {
        ringleads.push(new Boid(255, 255, 0, true));
    }
}
