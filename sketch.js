var fixedRect, movingRect;
var square1, square2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  square1 = createSprite(100,100,50,50);
  square1.shapeColor = "purple";
  square2 = createSprite(400,100,50,50);
  square2.shapeColor = "black";
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(isTouching(movingRect, square2))
  {
    square2.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  else
  {
    square2.shapeColor = "cyan";
    movingRect.shapeColor = "cyan";
  }*/
  bounceOff(movingRect,fixedRect)
  drawSprites();
}

