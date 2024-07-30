class objec {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.r = 50;
    }

    show() {
        push();
        rectMode(CENTER);
        square(this.position.x, this.position.y, this.r * 2);
        pop();
    }
}
