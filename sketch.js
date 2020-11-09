var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
monkey = createSprite(80,315,20, 20);
  monkey.addAnimation ("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white")
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.collide (ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate()) ;
  text("Survival Time :" + survivalTime, 100, 50);
  
  spawnFood()
  spawnObstacles()
  
  drawSprites()
}

function spawnFood ( ){
  if (frameCount % 80 === 0){
   var banana = createSprite(200,200,20,20) ;
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4;
    banana.lifetime = 150;
    foodGroup.add(banana);
  }
}

function spawnObstacles ( ){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(200,200,20,20);
    obstacle.addImage(obstacleImage)
    obstacle.y = Math.round(random(120,200));
    obstacle.velocityX = -4;
    obstacle.lifetime  = 300;
    obstacleGroup.add(obstacle)
  }
}



