let box;

function setup() {
    new Canvas(1000,600)
}

function draw() {
    if (mouse.presses()) {
        box = new Sprite(mouseX,mouseY,50,50)
    }
}