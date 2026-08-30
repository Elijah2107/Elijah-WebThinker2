let box;

function setup() {
    new Canvas(600,1000)
}

function draw() {
    if (mouse.presses()) {
        box = new Sprite(mouseX,mouseY,50,50)
    }
}