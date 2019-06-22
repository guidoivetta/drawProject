let shapeSize = 100;
let growing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  
  ellipse(mouseX, mouseY, shapeSize, shapeSize);
  
  if (mouseIsPressed) {
    if (growing) {
      shapeSize += 10;
    } else {
      shapeSize -= 10;
    }
    
    if (shapeSize >= width / 2) {
      growing = false;
    }
    if (shapeSize <= 50) {
      growing = true;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


