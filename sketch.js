let shapeSize;
let maxSize;
let minSize;
let growing = false;
let growthSpeed = 1;
let red = 255;
let randomGreen;
let randomBlue;
let brightening = true;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.995);
  background(51);
  noStroke();
  maxSize = width / 2;
  minSize = 100;
  shapeSize = (minSize + maxSize) / 2;

  randomGreen = random(256);
  randomBlue = random(256);
}

function draw() {
  fill(red, randomGreen, randomBlue);

  ellipse(mouseX, mouseY, shapeSize, shapeSize);

  if (mouseIsPressed) {
    // Size oscillation---------------------------
    // checking whether it should grow
    if (shapeSize >= maxSize || shapeSize <= minSize) {
      growing = !growing;
    }

    // growing or shrinking
    shapeSize += growing ? growthSpeed : -growthSpeed;

    // Color oscillation--------------------------
    // checking whether it should darken
    if (red == 255 || red == 0) {
      brightening = !brightening;
    }

    // brightening or darkening
    red += brightening ? 1 : -1;
  }
}
