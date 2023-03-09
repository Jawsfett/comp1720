function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
}

function draw() {
    // your "draw loop" code goes here
    background(mouseX, mouseY, mouseX/mouseY);
    translate(windowWidth/2, windowHeight/2);
    var numRotations = 10;
    for(var i = 0; i < numRotations; i++) {
    rotate(TWO_PI/numRotations);
    drawShape(mouseY/2, mouseX/2);
    } 

}

function drawShape(x, y){
    fill(mouseY, mouseX, mouseY/mouseX);
    ellipse(x, y, 300, 300);  
}