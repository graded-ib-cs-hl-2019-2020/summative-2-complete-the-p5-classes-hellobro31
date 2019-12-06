import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
let stoppage = false;
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    Ball.load();
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let d = 0; d < numBubbles; d++) {
        bubbles[d] = new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50));
    }
    for (let w = 0; w < numFlakes; w++) {
        snowflakes.push(new Snowflake(random(width), random(height), random(5, 20)));
    }
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        if (balls[i].touchingMouse() && mousePressed)
            balls[i].stop();
        else if (!balls[i].touchingMouse() && !mousePressed)
            balls[i].go();
    }
    for (let d = 0; d < bubbles.length; d++) {
        bubbles[d].draw();
        bubbles[d].move();
    }
    for (let w = 0; w < snowflakes.length; w++) {
        snowflakes[w].draw();
        snowflakes[w].move();
    }
}
function mousePressed() {
    if (mousePressed && !stoppage) {
        for (let i = 0; i < 10; i++) {
            balls[i].stop();
            bubbles[i].stop();
            snowflakes[i].stop();
            stoppage = true;
        }
    }
    else if (mousePressed && stoppage) {
        for (let i = 0; i < 10; i++) {
            balls[i].go();
            bubbles[i].go();
            snowflakes[i].go();
            balls[i].move();
            bubbles[i].move();
            snowflakes[i].move();
            stoppage = false;
        }
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map