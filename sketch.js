var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 400, 50, 50);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="yellow"
}

function draw() {
  background(255,255,255); 
  movingRect.x= mouseX;
  movingRect.y= mouseY ;

  console.log(movingRect.x - fixedRect.x)

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="yellow"

}
  drawSprites();
}