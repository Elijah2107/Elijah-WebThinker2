// write your codes here
let dojoBG;
let fruitGroup;
let 

function preload() {
    dojoBG = loadImage('assets/dojobackground.png')
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;
}

function draw() {
    clear();
    image(dojoBG, 0, 0, width, height);
}