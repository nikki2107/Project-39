
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var PLAY = 1
var END = 0
var gameState=1

function preload(){
monkey_running =               loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 bgg = loadImage("bg.png");
}



function setup() {
createCanvas(400,400)
background(220);
  monkey = createSprite(200,200,20,20)
  monkey.addAnimation("MON",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(0,380,800,7)
  ground.visible = false;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0
}


function draw() {
  background(bgg)
if (gameState===1){
  score =score + Math.round(getFrameRate()/60)
  if(ground.x<0)
   {ground.x=ground.width/2}
    ground.velocityX=-2
    console.log(monkey.y)
  
    camera.position.x = monkey.x
    camera.position.y = monkey.y
  if (keyDown("space" )&& monkey.y>=315){
      monkey.velocityY=-18
      }
  
  if (monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();   } 
  }
  
  if(monkey.isTouching(obstacleGroup)){
  gameState=END
}
  if( gameState===END){
  monkey.velocityX=0
  bananaGroup.destroyEach(); 
    obstacleGroup.destroyEach();
    ground.velocityX=0
    fill("red")
    textSize(20)
    text ("GAME OVER",200,200)
  }
monkey.velocityY=monkey.velocityY + 0.7
monkey.collide(ground )
banana1();
obstacle1();
drawSprites();
text ("survivalTime: " + score,10,40)

}
function banana1(){
if (frameCount%80===0){
 banana=    createSprite(400,Math.round(random(120,200)),20,20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
banana.lifetime=150
bananaGroup.add(banana)
}
}

function obstacle1(){
if (frameCount%300===0){
  obstacle= createSprite(400,360,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacle.velocityX=-3
  obstacle.lifetime=150
  obstacleGroup.add(obstacle)
}
}




