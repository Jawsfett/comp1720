function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
}

function draw() {
    // your "draw loop" code goes here
    
    background(0,191,255);
    stroke("white");
    strokeWeight(10);
    line(70,60,300,50);
    strokeWeight(2);
    line(70,100,500,200);
    strokeWeight(7);
    line(70,200,600,300);

    noStroke();
    fill(255,map(sin(frameCount/50), -1, 1, 0,255));
    ellipse(1000,300,400,400);
}
