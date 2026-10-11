let birdImg;
let backgroundImg;
let bird;

function preload() {
    backgroundImg = loadImage('assets/background-night.png');
    birdImg = loadImage('assets/bluebird-midflap.png');
}

function setup() {
    new Canvas(400,600);
    
    bird = new Sprite();
    bird.x = width / 2;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.image = birdImg;
}

function draw() {
    image(backgroundImg, 0, 0, width, height);


    
}