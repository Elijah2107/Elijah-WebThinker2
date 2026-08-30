let box;
let floor;
function setup() {
    new Canvas(1000,600)
    floor = new Sprite(500,500,800,40)
    world.gravity.y = 10
    floor.collider = "static"
    for (let i = 1; i <= 10; 1++) {
        console.log
    }
}

function draw() {
    if (mouse.presses()) {
        box = new Sprite(mouseX,mouseY,50,50)
    }
    background("black")
}