var pickedColor = 0;
var colors = ['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
var colorSwap = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    background(pickedColor);
    colorPallete(windowWidth/2,windowHeight/2, 700, 700);
}

function colorPallete(x, y, w, h){
    noStroke();
    fill('#F4F6F6');
    rectMode(CENTER);
    rect(x, y, w, h, 10,10,10,10);

    if (frameCount % 20 == 0) {
        colorSwap = colors[int(random(0, colors.length))];
    }
    fill(colorSwap);
    rect(x, y-25, w/2, h/4, 10,10,10,10);

    stroke(0);
    fill('#ADD5D5');
    textSize(80);
    textAlign(CENTER);
    text("Press Me", x, y);
    
    
    if (mouseIsPressed && 
        mouseX > (x - w/4) && 
        mouseX < (x + w/4) && 
        mouseY > (y - h/8) && 
        mouseY < (y + (h/8 - 25))) 
        {
            pickedColor = colorSwap;
        }
    
}

// function mouseClicked(){
    
//             console.log("Colour changed")
//             pickedColor = colorSwap;
        
// }

// function colorSwap(){
//         pickedColor = colors[int(random(0, colors.length))];
    
// }





