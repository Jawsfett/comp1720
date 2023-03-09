var sally; // declare a variable called sally
function setup() {
    createCanvas(windowWidth, windowHeight);
    // https://p5js.org/reference/#/p5/colorMode
    colorMode(HSB, 360, 100, 100);

    // initialise the sally variable here
    sally = {x: width/2, 
             y: height/2, 
             captured: false, 
             captureSound: loadSound("assets/pokeball-catch.mp3")}
}

function draw() {
    background(100, 80, 50);
    // your "draw loop" code goes here
    drawPokemon(sally);
    updatePokemon(sally);
    // what function(s) do you need to call in here, and with what parameters?

}

function drawPokemon(aPokemon) {
    noStroke();
    fill(0);
    ellipse(aPokemon.x, aPokemon.y, 50, 50);
}

function updatePokemon(aPokemon) {
    // this is just a bit of controlled randomness to make the pokemon move around the canvas
    if (aPokemon.captured == false) {
    aPokemon.x += 0.05*width*cos(frameCount*0.01)*randomGaussian(0, 0.1);
    aPokemon.y += 0.05*height*cos(frameCount*0.011)*randomGaussian(0, 0.1);
    }
    if (aPokemon.captured == true) {
        stroke(0);
        fill("white");
        ellipse(aPokemon.x, aPokemon.y, 50, 50);
        fill("red");
        arc(aPokemon.x, aPokemon.y, 50, 50, PI, TWO_PI, PIE);
        fill("white");
        ellipse(aPokemon.x, aPokemon.y, 10, 10);

        
    }
    if (mouseIsPressed &&
        mouseX > aPokemon.x - 50 &&
        mouseX < aPokemon.x + 50 &&
        mouseY > aPokemon.y - 50 &&
        mouseY < aPokemon.y + 50) {
            aPokemon.captured = true;
            aPokemon.captureSound.play();
        }
}
