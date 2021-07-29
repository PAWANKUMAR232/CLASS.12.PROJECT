var track, trackImage;
var jaxon, jaxon_running;
var invisibleWall1,invisibleWall2;
var bomb, bombImage, coin, coinImage;
var edges;


function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");

  trackImage = loadImage("path.png");

  bombImage = loadImage("bomb.png");

  coinImage = loadImage("coin.png");
}


function setup(){
  createCanvas(400,400);
  
  //create sprites here
  track = createSprite(200, 200, 400, 400);
  track.addImage("infiniteMovement", trackImage);
  track.velocityY = 4;
  track.scale = 1;

  jaxon = createSprite(180, 340, 50, 170)
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 1;
  jaxon.x = 200;

  bomb = createSprite(110, 200, 50, 50);
  bomb.addImage("bombObstacle", bombImage);
  bomb.scale = 0.1;

  coin = createSprite(300, 100, 50, 50);
  coin.addImage("coinPoint", coinImage);
  coin.scale = 0.5;

  invisibleWall1 = createSprite(20, 200, 5, 400);
  invisibleWall1.visible = false;

  invisibleWall2 = createSprite(380, 200, 5, 400);
  invisibleWall2.visible = false;

  edges = createEdgeSprites();
}


function draw() {
  background("black");

  //jaxon moves left and right along with your mouse
  jaxon.x = World.mouseX;

  //code to reset background
  if(track.y > 400) {
    track.y = height/2;
  }

  jaxon.collide(invisibleWall1);
  jaxon.collide(invisibleWall2);
  
  drawSprites();
}

