// write your codes here
let dojoBG;

function preload() {
    dojoBG = loadImage('assets/dojobackground.png')
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;
}