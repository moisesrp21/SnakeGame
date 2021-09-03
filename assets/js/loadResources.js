let GAMEOVER;
let PAUSED;
let SNAKE;
let flag;
let something;
function preload() {
    SNAKE = loadImage('assets/img/snake.png');

    GAMEOVER = new Animation();
    GAMEOVER.addFrame(loadImage("assets/img/G1.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G2.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G3.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G4.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G5.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G6.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G7.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G8.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G9.png"), 1000/9);
    GAMEOVER.addFrame(loadImage("assets/img/G10.png"), 1000/9);

    PAUSED = new Animation();
    PAUSED.addFrame(loadImage("assets/img/PAUSED0.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED1.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED2.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED3.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED4.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED5.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED6.png"), 1000/7);
    PAUSED.addFrame(loadImage("assets/img/PAUSED7.png"), 1000/7);
}
