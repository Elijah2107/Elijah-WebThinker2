let birdImg;
let backgroundImg;
let bird;

function preload() {
    backgroundImg = loadImage('assets/background-night.png');
    birdImg = loadImage('assets/bluebird')
}

function setup() {
    new Canvas(600,400);
    
    bird = new Sprite;
}