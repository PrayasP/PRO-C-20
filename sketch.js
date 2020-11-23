var fixedR,movingR;

function setup() {
  createCanvas(800,400);
  fixedR = createSprite(400,200,40,70);
  fixedR.shapeColor = "green";
  movingR = createSprite(200,100,30,60);
  movingR.shapeColor = "red";
}

function draw() {
  background("yellow");  

movingR.x = mouseX;
movingR.y = mouseY;

if(movingR.x - fixedR.x < fixedR.width/2 + movingR.width/2 &&
  fixedR.x - movingR.x < fixedR.width/2 + movingR.width/2 &&
  movingR.y - fixedR.y < fixedR.width/2 + movingR.width/2 &&
  fixedR.y - movingR.y < fixedR.width/2 + movingR.width/2){
  
  fixedR.shapeColor = "blue";
  movingR.shapeColor = "blue";

}else {
  fixedR.shapeColor = "green";
  movingR.shapeColor = "red";
}

  drawSprites();
}