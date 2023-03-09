var bluePillList = [];
var redPillList = [];
var backgroundList = [];
var pickedColor = 0;
var score = 0;
var highScore = 0;
var crossHair;
var colorPointer;

function preload() {
  crossHair = loadImage("assets/5d7025ac03720b020333d8583743048b.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  happyFace0 = {x: width/2, y: height/2, colour: "blue", hit: false}
  happyFace1 = {x: width/2, y: height/2, colour: "blue", hit: false}
  happyFace2 = {x: width/2, y: height/2, colour: "blue", hit: false}
  happyFace3 = {x: width/2, y: height/2, colour: "blue", hit: false}
  happyFace4 = {x: width/2, y: height/2, colour: "blue", hit: false}
  happyFace5 = {x: width/2, y: height/2, colour: "blue", hit: false}

  angryFace0 = {x: width/2, y: height/2, colour: "red", hit: false}
  angryFace1 = {x: width/2, y: height/2, colour: "red", hit: false}
  angryFace2 = {x: width/2, y: height/2, colour: "red", hit: false}
  angryFace3 = {x: width/2, y: height/2, colour: "red", hit: false}
  angryFace4 = {x: width/2, y: height/2, colour: "red", hit: false}
  angryFace5 = {x: width/2, y: height/2, colour: "red", hit: false}

  bluePillList = [happyFace0,happyFace1,happyFace2,happyFace3,happyFace4,happyFace5];
  redPillList = [angryFace0,angryFace1,angryFace2,angryFace3,angryFace4,angryFace5];

  backgroundList = ["#fff", "#e1e2e3", "#c6c7c9", "#acadb2", "#949599", "#7c7d80", "#636466", "#474748", "#231d20"];
  colorPointer = 4;
}

function draw() {
  background(pickedColor);
  
  
  drawEntity(bluePillList[0]);
  drawEntity(bluePillList[1]);
  drawEntity(bluePillList[2]);
  drawEntity(bluePillList[3]);
  drawEntity(bluePillList[4]);
  drawEntity(bluePillList[5]);

  drawEntity(redPillList[0]);
  drawEntity(redPillList[1]);
  drawEntity(redPillList[2]);
  drawEntity(redPillList[3]);
  drawEntity(redPillList[4]);
  drawEntity(redPillList[5]);

  updateEntity(bluePillList[0]);
  updateEntity(bluePillList[1]);
  updateEntity(bluePillList[2]);
  updateEntity(bluePillList[3]);
  updateEntity(bluePillList[4]);
  updateEntity(bluePillList[5]);

  updateEntity(redPillList[0]);
  updateEntity(redPillList[1]);
  updateEntity(redPillList[2]);
  updateEntity(redPillList[3]);
  updateEntity(redPillList[4]);
  updateEntity(redPillList[5]);

  textAlign(CENTER)
  text("Move your mouse around and aim for the pills, shooting a red pill will darken the background, shooting a blue pill will do the opposite",width/2, height/8);
  text(score, width/8, height/8);
  text(highScore, width/8 + 50, height/8);
  
  imageMode(CENTER);
  image(crossHair, mouseX, mouseY, crossHair.width/2, crossHair.height/2);
  
 
}

function drawEntity(aEntity){
  fill(aEntity.colour);
  ellipse(aEntity.x, aEntity.y, 50, 50);
}


function updateEntity(aEntity){


  if (aEntity.hit == false) {
    aEntity.x += 0.05*width*cos(frameCount*0.01)*randomGaussian(0, 0.1);
    aEntity.y += 0.05*height*cos(frameCount*0.011)*randomGaussian(0, 0.1);
    }

    if (aEntity.hit == true) {
        stroke(0);
        fill("purple");
        ellipse(aEntity.x, aEntity.y, 50, 50); 
    }

  pickedColor = backgroundList[colorPointer];
    
    
  if (mouseIsPressed && aEntity.hit == false && 
      mouseX > aEntity.x - 50 &&
      mouseX < aEntity.x + 50 &&
      mouseY > aEntity.y - 50 &&
      mouseY < aEntity.y + 50) {
        if(aEntity.colour == "blue" && colorPointer > 0)
        {colorPointer --;}
        else if (aEntity.colour == "red" && colorPointer < 8){
          colorPointer ++;
        }
        score = score + 1;
        aEntity.hit = true;
      }
        
      if (score > highScore){
        highScore = score;
    
}

}