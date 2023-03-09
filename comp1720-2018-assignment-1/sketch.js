function setup() {
  
  createCanvas(800, 600);

  stroke('white');
  strokeWeight(5);
  rect(0, 0, width, height);
  
}

function draw() {

  fill(237,35,93);
  rect(0, 0, width, 150, 55, 55, 0, 0);
  rect(0, 450, width, 150, 0, 0, 55, 55);
  
  fill(247,132,159);
  textSize(500);
  text("*", 0, 590);

  fill(237,35,93);
  textSize(150);
  text("Joseph", 200, 350);

  for (var i = 50; i <= 770; i += 100) {
    fill('white');
    ellipse(i, 50, 40, 40);
  }

  for (var i = 100; i <= 770; i += 100) {
    fill('white');
    ellipse(i, 100, 40, 40);
  }

  for (var i = 50; i <= 770; i += 100) {
    fill('white');
    ellipse(i, 500, 40, 40);
  }

  for (var i = 100; i <= 770; i += 100) {  
    fill('white');
    ellipse(i, 550, 40, 40);
  }
 
}

function keyTyped() {
  if (key === " ") {
	saveCanvas("nametag.png");
  }
}
