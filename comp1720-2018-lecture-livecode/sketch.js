/*function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    background(0);
}

function draw(){
    noStroke();
    var size = random(0,20);
    //var x = random(0,windowWidth);
    //var y = random(0, windowHeight);
    fill(random(0,255),random(0,255),random(0,255));
    // fill(y/windowHeight*255,
    //     x/windowWidth*255,
    //     255 - y/windowHeight*255,
    // );
    ellipse(mouseX,mouseY,size,size);
}

function keyTyped() {
    if (key === " ") {
        function draw(){
            fill(0,0,0);
        }
    }
  }
==============================================================================================================================



  function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(240, 50, 10);
}

function draw() {
    background(255);

    if(mouseX <= width/2) {
        fill(0,250,0);
    }
    else {
        fill(240,50,100)
    }

    arc(width/2-100, height/2-100, 250, 250, PI, TWO_PI);
    arc(width/2+100, height/2-100, 250, 250, PI, TWO_PI);
    triangle(width/2-225, height/2-100, width/2+225, height/2-100, width/2, height/2+200);
 
}
==============================================================================================================================



function setup() {
    createCanvas(800, 600);
    noStroke();
    frameRate(5);
  }
  
  function draw() {
    background(30);
  
    var x = 0;
    while (x < width) {
      fill(x/2, random(255), 255);
      rect(x, 0, random(10), random(height));
      x += random(10);
    }
  }
  ==============================================================================================================================



 
  function setup(){
      createCanvas(windowWidth, windowHeight);
  }
  
  var fibreX = 0;
  var fibreY = 0;

  function draw() {
    background(30, 10);
      if(frameCount%100==0){
      fibreX = mouseX;
      fibreY = mouseY;
    }

    if(frameCount>60*10){
        stroke(200,255,40);
        drawBjork(mouseX, mouseY);
      }
      else{
        stroke(255);
      }

      line(fibreX, fibreY, mouseX, mouseY);

  }

  function drawBjork(x, y){
      fill(200,255,40);
      ellipse(x, y, 100 ,100);
      fill(0);
      ellipse(x-15, y-15, 10, 10);
      ellipse(x+15, y-15, 10, 10);
      ellipse(x, y+15, 30,10);

      for(var i = 0; i < height; i = i + 100){
          line(0, i, x, y);
          line(width, i, x, y);
      }
  }
  ==============================================================================================================================

  function setup(){
      createCanvas(windowWidth, windowHeight);
  }

  function draw(){
      background(30);

      if(button(30,30,80,40)){
          background(255,0,0);
      }
  }

  function button(x, y, w, h){
    rect(x,y,w,h);

    return mouseIsPressed && 
    mouseX > x && 
    mouseX < x + w && 
    mouseY > y && 
    mouseY < y + h;
  }

  ==============================================================================================================================


  function setup(){
    createCanvas(windowWidth, windowHeight);
  }

  var segments = [];

  function draw() {
      background(150,255,0);

      segments.unshift([mouseX, mouseY]);
      segments.map(drawSegment);

      if(segments.length > 150){
          segments.pop();
      }
  }

  function drawSegment(point, idx){
      strokeWeight(segments.length-idx);
      stroke(255, 50);
      fill(30, 150);
      ellipse(point[0], point[1], 30, 30);
  }
  
 ==============================================================================================================================
 var position, momentum;

 function setup(){
    createCanvas(windowWidth, windowHeight);
    background(25);
    position = createVector(width/2, height/8);
    momentum = createVector(0,0);
  }  

  function draw(){

    /* var apple = {
        colour: "red",
        shape: "round",
        edible: true
    }

    var door ={
        locked: false,
        marterial: "wood",
        shape: "rectangle",
        sign:"EXIT"
    }

    var kangaroo = {
        animalVegetableMineral: "animal",
        moves: "bounces",
        fluffy: true
    } 
    background(25);
    ellipse(position.x, position.y, 40, 40);

    position.add(momentum);

    momentum.add(createVector(0,1));

    if(position.y > height -20){
        momentum.y = momentum.y * -1;
        
    }
    momentum.mult(0,9);

  }
  ==============================================================================================================================
  */
  var brushes = [];

  function setup(){
      creatCanvas(windowWidth, windowHeight);
      for(var i=0; i < 400; i++){
          brushes.push(createVector(random(width),random(height)));
      }
      background(25);
      noStroke();
  }

  function draw(){
      brushes.map(drawBrushes);
      brushes.map(moveBrushes);
  }

  function drawBrushes(b,i){
      var blue = color(60,99,169);
      var yellow = color(244,201,50);
      var n = sin(noise(b.x/nscale,b.y/nscale)*TWO_PI*nscale);
      fill(lerpColor(blue, yellow, n));

      ellipse(b.x, b.y, sin(frameCount/40 + i)*7);
  }

  function moveBrushes(b){
      b.x += sin(noise(b.x/nscale,b.y/nscale)*TWO_PI*nscale)*0.4
      b.y += cos(noise(b.x/nscale,b.y/nscale)*TWO_PI*nscale)*0.4
  }