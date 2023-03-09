
function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

var b1 = 0;
var b2 = 0;
var b3 = 0;
var j = 360;
var colors = ['#FFFFFF', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008080', '#0000FF', '#000080', '#FF00FF','#ffc0cb', '#800080'];
var colorSwap = 0;

function draw() {
    background(0,255,255);
    flowerPot(width/2, height*0.9);
    flowerStem(width/2,height/2,b2);
    flower(width/2, 700-b2*2, 1, b1);
    bloom();
    rebirth();
}

function flower(x,y,s,b1){
    push();
    translate(x,y);
    scale(s);
    for(var i=0; i<j; i+=30){
        push();
        rotate(radians(i+millis()/100));
        fill(colorSwap);
        ellipse(0, 0-b1/2-50, 60, b3);
        pop();
        }
        fill(248, 249, 167);
        ellipse(0, 0, 130, 130);
        pop();
}

function flowerPot(x,y){
    noStroke();
    fill(177, 75, 37);
    ellipse(x,y,700, 150);
    ellipse(x,y+20,700, 150);
    rectMode(CENTER);
    fill(177, 75, 37);
    quad(x-650/2,y,x+650/2,y,x+650/4,y+150,x-650/4,y+150);
    rect(x,y+10,700, 20);
    fill(111,32,3);
    ellipse(x,y-10,650, 100);
}
 function flowerStem(x,y,b2){
    fill("green");
    rect(x,y+320-b2,50,10+b2*2);
 }

 function bloom(){
    if(mouseIsPressed && b1 <= 200){
        b1 = b1+1;
    }

    if(mouseIsPressed && b2 <= 200){
        b2 = b2+1;
    }

    if(mouseIsPressed && b3 <= 200){
        b3 = b3+1;
    }
 }

 function mousePressed(){
     if(dist(width/2, 700-b2*2, mouseX, mouseY) < 260/4){
        j -= 30;
     }
 }

 function rebirth(){
     if(j <= 0 && b2 >= 0){
         b2 -= 1;
     }

     if(b2 == 0){
         j = 360;
         b1 = 0;
         b2 = 0;
         b3 = 0;
         colorSwap = colors[int(random(0, colors.length))];
     }
 }