let birdImg;
let backgroundImg;
let bird;

function preload() {
    backgroundImg = loadImage('assets/background-night.png');
    birdImg = loadImage('assets/bluebird-midflap.png');
}

function setup() {
    new Canvas(600,400);
    
    bird = new Sprite();
    bird.x = width / 2;
    bird.y = 200;
    bird.width = 30;
    bird.he
}