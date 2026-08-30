let box;
let floor;
function setup() {
    new Canvas(1000,600)
    floor = new Sprite(500,900)
}

function draw() {
    if (mouse.presses()) {
        box = new Sprite(mouseX,mouseY,50,50)
    }
}