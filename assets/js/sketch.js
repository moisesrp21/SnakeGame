let snake;
let fruit;
let WIDTH;
let HEIGHT;
let gameOver = false;
let paused = false;

function setup() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    createCanvas(WIDTH, HEIGHT);
    snake = new Snake(7,7,SNAKE);
    let x = Math.trunc(random(15));
    let y = Math.trunc(random(15));
    fruit = new Fruit(x,y);
    console.log(GAMEOVER.frames.length);
}

function draw() {
    background(0,0,0);
    fill(color(255,204,0));
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            rect(30 + j*(55+10), 20 + i*(55+10), 55, 55);
        }
    }
    if (!gameOver) {
        if (!paused) {
            snake.update();
            gameStatus();
            snake.draw();
            fruit.draw();
        }
        else {
            PAUSED.update();
            PAUSED.draw(0,300);
        }
    }
    else {
        image(GAMEOVER.frames[0].image,0,0);
        GAMEOVER.update();
        GAMEOVER.draw(3,5);
        PAUSED.update();
        PAUSED.draw(0,300);
    }
}

function gameStatus() {
    if (snake.x < 0 || snake.x > 14
        || snake.y < 0 || snake.y > 14
        || snake.didItAteItself) {
        snake.restart();
        gameOver = true;
    }
    if (snake.x == fruit.x && snake.y == fruit.y) {
        snake.eatsFruit();
        fruit.update();
    }
}

function keyPressed() {
    switch(keyCode) {
    case UP_ARROW:
        // snake.y = constrain(snake.y-1,0,14);
        snake.vy = -1;
        snake.setNoHor();
        break;
    case DOWN_ARROW:
        snake.vy = 1;
        snake.setNoHor();
        // snake.y = constrain(snake.y+1,0,14);
        break;
    case LEFT_ARROW:
        snake.vx = -1;
        snake.setNoVer();
        // snake.x = constrain(snake.x-1,0,14);
        break;
    case RIGHT_ARROW:
        snake.vx = 1;
        snake.setNoVer();
        // snake.x = constrain(snake.x+1,0,14);
        break;
    case 32:
        if (!gameOver)
            paused = !paused;
        gameOver = false;
        break;
    }
}

// start game
// if player presses touches all game over
//     if the players presses spacebar start the game
// if player presses spacebar pause the game
