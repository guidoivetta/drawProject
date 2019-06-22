let shapeSize = 100;
let growing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);

  ellipse(mouseX, mouseY, shapeSize, shapeSize);

  if (mouseIsPressed) {
    // checking whether it should grow
    if (shapeSize >= width / 2 || shapeSize <= 50) {
      growing = !growing;
    }

    // growing or shrinking
    shapeSize = growing ? shapeSize + 3 : shapeSize - 3;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
