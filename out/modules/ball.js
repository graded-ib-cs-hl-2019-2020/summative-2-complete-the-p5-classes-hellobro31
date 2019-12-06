export class Ball {
    constructor(x, y, size, color = "red", borderColor = "black") {
        this.stopped = false;
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-3, 3);
        this.ySpeed = random(-3, 3);
        this.color = "rgb(" + Math.floor(random(0, 256)) + "," + Math.floor(random(0, 256)) + "," + Math.floor(random(0, 256)) + ")";
        this.borderColor = borderColor;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    static load() {
        Ball.img = loadImage('assets/11-Metapod.png');
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        image(Ball.img, this.x, this.y, this.size, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    setColor(c) {
        this.color = c;
    }
    doBorderBehavior() {
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map