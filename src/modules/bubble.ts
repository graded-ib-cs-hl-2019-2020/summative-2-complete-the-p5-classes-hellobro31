
export class Bubble {
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-3, 3);
    private ySpeed: number = random(-3, 3);
    private stopped: boolean = false;
    private color: string;
    private borderColor: string;

    /* TODO REQUIRED - What's missing here? Add it! */
    constructor(x: number, y: number, size: number, color: string = "#FFFFFF7A", borderColor: string = "blue") {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.color = color;
        this.borderColor = borderColor;


    }


    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {
        /* TODO REQUIRED - draw the bubbles */
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size)
    }

    public move(): void {
        /* TODO REQUIRED - Make the bubbles move as long as they aren't stopped. Model after ball behavior. */
        /* The doBorderBehavior is built in for you below. */
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}

