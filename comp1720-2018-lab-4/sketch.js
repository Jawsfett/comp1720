function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
}

function draw() {
    // your "draw loop" code goes here
    background(255);
    strokeWeight(10);
    stroke(255);
    fill(0);
    rect(100, 100, 300, 300);
    line(100, 250, 400, 250);
    line(250, 100, 250, 400);

    ellipse(700, 250, 300,300);
    line(400, 250, 1000, 250);
    line(700, 100, 700, 400);

    rect(1000, 100, 300, 300, 150, 150, 0, 0);
    line(1000, 250, 1300, 250);
    line(1150, 100, 1150, 400);

    if(mouseX >= 100 && mouseX <=400 && mouseY >= 100 && mouseY <=400){
        noStroke();
        background(0);
        fill("yellow");
        ellipse(random(width),random(height), 20, 20);
        }

}
