var player
var obstacle, fire, obstaclee, obstacle1, obstacle2
var ground, obstaclesGroup, obstaclesGroupp, obstaclesGrouppp, obstaclesGroup1, obstaclesGroup2

function preload(){
playerI = loadImage("player.png");
dragonI = loadImage("dragon.png");
dragonnI = loadImage("dragonn.png");
fireI = loadImage("fire.png");
leftdragonI = loadImage("leftdragon.png");
rightdragonI = loadImage("rightdragon.png");
}

function setup() {
player = createSprite(50,180,20,50);
player.addImage("pl", playerI)
ground = createSprite(200, 400, 500, 30)
ceiling = createSprite(200, -20, 500, 30)
wall1 = createSprite(-20, 200, 30, 500)
wall2 = createSprite(420, 200, 30, 500)
platform1 = createSprite(300, 325, 75, 20)
platform2 = createSprite(100, 300, 75, 20)
platform3 = createSprite(100, 225, 75, 20)
platform4 = createSprite(250, 200, 75, 20)
platform5 = createSprite(325, 125, 75, 20)
platform6 = createSprite(200, 50, 75, 20)
platform7 = createSprite(50, 125, 75, 20)
}

function draw() {
  background(200);
  spawnDragonsLeft();
  spawnDragonsRight();
  spawnFire();
  spawnBigDragonsLeft();
  spawnBigDragonsRight();
  player.velocityY=player.velocityY + 0.8
  player.collide(ground);
  player.collide(ceiling);
  player.collide(platform1);
  player.collide(platform2);
  player.collide(platform3);
  player.collide(platform4);
  player.collide(platform5);
  player.collide(platform6);
  player.collide(platform7);
  player.collide(wall1);
  player.collide(wall2);
  player.collide(obstaclesGroup);
  player.collide(obstaclesGroupp);
  player.collide(obstaclesGroup1);
  player.collide(obstaclesGroup2);
  obstaclesGroup = new Group();
  obstaclesGroup1 = new Group();
  obstaclesGroupp = new Group();
  obstaclesGrouppp = new Group();
  obstaclesGroup2 = new Group();
    if(keyDown("UP_ARROW")) {
      player.velocityY = -10;
    }
    if(keyDown("RIGHT_ARROW")){
      player.velocityX= 5
    }else{
      player.velocityX=0
    }
    if(keyDown("LEFT_ARROW")){
      player.velocityX= -5
    }
    
  drawSprites();
}
function spawnDragonsLeft() {
  if(frameCount % 30 === 0) {
    var obstacle = createSprite(0,0,10,40);
    obstacle.y=Math.round(random(0,475))
    //obstacle.debug = true;
    obstacle.velocityX = (8);
    
    obstacle.addImage(dragonI);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function spawnBigDragonsLeft() {
  if(frameCount % 60 === 0) {
    var obstacle1 = createSprite(0,0,10,40);
    obstacle1.y=Math.round(random(0,475))
    //obstacle.debug = true;
    obstacle1.velocityX = (8);
    
    obstacle1.addImage(leftdragonI);
    //assign scale and lifetime to the obstacle           
    obstacle1.scale = 3;
    obstacle1.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup1.add(obstacle1);
  }
}
function spawnBigDragonsRight() {
  if(frameCount % 60 === 0) {
    var obstacle2 = createSprite(500,0,10,40);
    obstacle2.y=Math.round(random(0,475))
    //obstacle.debug = true;
    obstacle2.velocityX = (-8);
    
    obstacle2.addImage(rightdragonI);
    //assign scale and lifetime to the obstacle           
    obstacle2.scale = 3;
    obstacle2.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup2.add(obstacle2);
  }
}

function spawnDragonsRight() {
  if(frameCount % 30 === 0) {
    var obstaclee = createSprite(500,0,10,40);
    obstaclee.y=Math.round(random(0,475))
    //obstacle.debug = true;
    obstaclee.velocityX = (-8);
    
    obstaclee.addImage(dragonnI);
    //assign scale and lifetime to the obstacle           
    obstaclee.scale = 1.5;
    obstaclee.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroupp.add(obstaclee);
  }}
  function spawnFire() {
    if(frameCount % 30 === 0) {
      var obstacleee = createSprite(50,0,10,40);
      obstacleee.x=Math.round(random(475,0))
      //obstacle.debug = true;
      obstacleee.velocityY = (8);
      
      obstacleee.addImage(fireI);
      //assign scale and lifetime to the obstacle           
      obstacleee.scale = 1.5;
      obstacleee.lifetime = 300;
      //add each obstacle to the group
      obstaclesGrouppp.add(obstacleee);
    }
}
