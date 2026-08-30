let box;
let floor;
function setup() {
    new Canvas(1000,600)
    floor = new Sprite()
}

function draw() {
    if (mouse.presses()) {
        box = new Sprite(mouseX,mouseY,50,50)
    }
}