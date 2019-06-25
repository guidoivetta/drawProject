let shapeSize = 100;
let growing = true;
let growthSpeed = 3;
let color = 255;
let red = 255;
let randomGreen;
let randomBlue;
let darkening = true;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.995);
  background(51);
  noStroke();
  
  randomGreen = random(256);
  randomBlue = random(256);
}

function draw() {
  fill(color, randomGreen, randomBlue);

  ellipse(mouseX, mouseY, shapeSize, shapeSize);

  if (mouseIsPressed) {
    // Size oscillation---------------------------
    // checking whether it should grow
    if (shapeSize >= width / 2 || shapeSize <= 50) {
      growing = !growing;
    }

    // growing or shrinking
    shapeSize += growing ? growthSpeed : -growthSpeed;

    // Color oscillation--------------------------
    // checking whether it should darken
    if (red == 255 || red == 0) {
      darkening = !darkening;
    }

    // brightening or darkening
    red += darkening ? 1 : -1;
  }
}
