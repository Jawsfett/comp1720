var pictureFilenames = [
    "assets/alex-mccarthy-250127.jpg",
    "assets/daria-nepriakhina-340852.jpg",
    "assets/elizabeth-lies-6698.jpg",
    "assets/federica-diliberto-17923.jpg",
    "assets/jennifer-pallian-322024.jpg",
    "assets/milada-vigerova-348433.jpg",
    "assets/nirzar-pangarkar-28869.jpg",
    "assets/ryan-pouncy-52372.jpg",
    "assets/yvens-banatte-71993.jpg"
]

// this is the array we'll store our grains in
var grains = [];

function preload() {
    worldMap = loadImage('assets/2543px-World_map_with_four_colours.svg.png');
    // put the image loading stuff in here (because it's slow)
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    worldMap.filter(BLUR, 5);
}

function draw() {
    
    background(worldMap);
    // your background code goes here

    // your "draw all the grains" code goes here
    grains.map(drawGrain);
    // every second, create a new grain (if there are any pictures left)
    if(frameCount%60==1 && pictureFilenames.length > 0){
        grains.push(createGrain(pictureFilenames.pop(), random(width), random(height)));
    }
    // call this function at the end of the draw loop to draw the fps speedo in the bottom-right corner
    drawSpeedo();
}

function createGrain(filename, x, y) {
    // your grain creation code goes here
    var img = loadImage(filename);
    var object = {
        X: x, Y: y, image: img
    } 
    return object;
    // make sure you return the grain object at the end
}

function drawGrain(object){
    image(object.image, object.X, object.Y);
}
// just a helper function - no need to understand it all today
function drawSpeedo() {
    let fr = round(frameRate());
    let fractionOfMaxSpeed = fr/60;
    // start a new drawing context (colours, etc.)
    push();
    // draw the coloured "speedo" bar
    noStroke();
    // make it red when we're fast, grey when we're slow
    fill(255*fractionOfMaxSpeed, 50, 50);
    rect(width-150, height-100, 100*fractionOfMaxSpeed, 50);
    // draw the framerate number
    stroke(0);
    fill(255);
    strokeWeight(3);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(fr, width-100, height-75);
    // restore the previous drawing context (colours, etc.)
    pop();
}
