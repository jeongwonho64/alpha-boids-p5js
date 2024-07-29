class Boid {
    constructor(a, b, c, mousePressed) {
        //init variables
        this.position = random([
            createVector(random(width), random(height / 2 - 50)),
            createVector(random(width), random(height / 2 + 50, height)),
        ]);
        this.velocity = p5.Vector.random2D();
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 4;
        this.filler = createVector(a, b, c);
        this.health = b;
        this.r = 16;
        this.moused = mousePressed;
        if (this.moused == true) {
            this.position.set(mouseX, mouseY);
        }
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);

        // Wrap around the canvas
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    show() {
        //show boid
        let theta = this.velocity.heading() + PI / 2;
        stroke(255);
        strokeWeight(2);
        fill(255, 255, 255, 50);
        push();
        translate(this.position.x, this.position.y);
        fill(this.filler.x, this.filler.y, this.filler.z, 75);
        rotate(theta);
        beginShape();
        vertex(0, -this.r);
        vertex(this.r / 2, this.r);
        vertex(-this.r / 2, this.r);
        endShape(CLOSE);
        pop();
    }
}
