var pickedColor = 0;
var colors = ['#FFFFFF', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
var colorSwap = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    background(pickedColor);
    colorButton(width/2,height/2, 600, 600);
}

function colorButton(x, y, w, h){
    
    noStroke();
    fill("silver");
    rectMode(CENTER);
    rect(x, y, w, h, 10,10,10,10);

    fill("grey");
    stroke(0);
    ellipse(x/3, y/2.5, 50, 50);
    arc(x/3, y/2.5, 50, 50, radians(90), radians(270), CHORD);

    ellipse(x + x/1.5, y/2.5, 50, 50);
    arc(x + x/1.5, y/2.5, 50, 50, radians(0), radians(180), CHORD);

    ellipse(x/3, y + y/1.7, 50, 50);
    arc(x/3, y + y/1.7, 50, 50, radians(225), radians(45), CHORD);

    ellipse(x + x/1.5, y + y/1.7, 50, 50);
    arc(x + x/1.5, y + y/1.7, 50, 50, radians(292.5), radians(112.5), CHORD);

    noStroke();
    ellipse(x, y, w/1.4, h/1.4);

    if (frameCount % 30 == 0) {
        colorSwap = colors[int(random(0, colors.length))];
    }
    fill(colorSwap);
    strokeWeight(1.5);
    stroke(0);
    ellipse(x, y, w/1.5, h/1.5, h/1.5);

    strokeWeight(1);
    fill('#ADD5D5');
    textSize(80);
    textAlign(CENTER);
    text("Press Me", x, y + 25);
    
	if (dist(width/2, height/2, mouseX, mouseY) < h/3 && mouseIsPressed)
        {
            pickedColor = colorSwap;
        }
}