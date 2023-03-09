var bloomers = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  bloomers.push({x: width/2, y: height/2, width: 0, height: 0, hasBloomed: false, playSound: false})
  // set up the sound stuff
  setupSound();
}

function draw() {
  background(0);

  // map the "drawBloomer" and "updateBloomer" functions over the bloomer array
  // although these functions don't do anything yet - you need to write them (see below)
  bloomers.map(drawBloomer);
  bloomers.map(updateBloomer);
}

function mouseReleased() {
  bloomers.push({x: mouseX, y: mouseY, width: 0, height: 0, hasBloomed: false})
  // write some code here that pushes a new bloomer to the array
}

function drawBloomer(b) {
  // code which draws the bloomer goes in here
  // the bloomer object will be passed in as the `b` parameter
  fill(255);
  if (b.hasBloomed) {
    fill('red');
  }
  ellipse(b.x, b.y, b.width, b.height);

  
}

function updateBloomer(b) {
  // all code which updates parameters in the bloom goes in here
  // the bloomer object will be passed in as the `b` parameter

  // write some code that makes the bloomer grow

  // write a condition that makes the bloomer 
  if(b.hasBloomed == false){
    for (var i = 0; i <= 10; i += 1){
       b.width += 1;
       b.height += 1;
     }
    }

  if (b.width >= 250 && b.height >= 250){
    b.hasBloomed = true;
    b.playSound = true;
    
  }
  
  if(b.playSound == true){
    playBoop();
  }
}
