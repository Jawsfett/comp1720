var elipseX = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(120);
    //background('yellow');
    // any additional setup code goes here
}

function draw() {
    // your "draw loop" code goes here

   /* stroke(60, 204, 48);
    triangle(30, mouseY % 75, frameCount, 20, width, 75);
    line(30,58, mouseY % 20,75);
    strokeWeight(4);
    triangle(30, 80, 200, 782, frameCount % 926, 75);
    ellipse(60, 60, 60, 60);
    arc(mouseY % 550, 50, 80, 80, 0, PI + QUARTER_PI)
    fill('#fae');
    */
   //background('yellow', 0.3);

   noStroke();
   fill(255, 100, 40, 30);
   rect(0,0,width,height);
   fill('#fae');
   stroke('green');
   ellipse(random(1, 500), 600, mouseY, mouseY);
   
}