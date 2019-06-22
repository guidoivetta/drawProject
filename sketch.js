let shapeSize = 100;
let growing = true;
let growthSpeed = 3;
let color = 255;
let darkening = true;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.8);
  background(51);

  var resetButton = createButton("reset");
  resetButton.mousePressed(resetSketch);
}

function draw() {
  fill(color);
  ellipse(mouseX, mouseY, shapeSize, shapeSize);

  if (mouseIsPressed) {
    //Size oscillation---------------------------
    // checking whether it should grow
    if (shapeSize >= width / 2 || shapeSize <= 50) {
      growing = !growing;
    }

    // growing or shrinking
    shapeSize += growing ? growthSpeed : -growthSpeed;
    
    
    //Color oscillation--------------------------
    if (color == 255 || color == 0) {
      darkening = !darkening;
    }

    // growing or shrinking
    color += darkening ? 1 : -1;
  }
}

function resetSketch() {
  background(51);
}
