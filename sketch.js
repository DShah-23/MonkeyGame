// Declaring monkey and ground variables
var monkey, monkeyAnimation, ground;

// Declaring banana and obstacles variables
var banana, bananaImg, obs, obsImg;

// Declaring ggroups
var foodGrp, obsGrp;

// Declaring game state variables
var PLAY = 0;
var END = 1;

// Declaring gameplay variables
var score, gameState

// Preload function
function preload() {
  
// Loading monkey animation
monkeyAnimation = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

// Loading banana and obstacles image
  bananaImg = loadImage("banana.png");
  obsImg = loadImage("obstacle.png");
}

// Setup function
function setup() {
  
// Creating canvas
  createCanvas(400, 400);
  
// Making monkey sprite
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkeyAnimation);
  monkey.scale = 0.1;
  
// Making ground sprite
  ground = createSprite(400, 350, 900, 10);
  
// Giving initial value to score
  score = 0;
  
// Making groups
  foodGrp = new Group();
  obsGrp = new Group();
}

// Draw function
function draw() {
  
// Giving background color
  background(225);
  
// Moving ground and making itinfinite
  ground.velocityX = -6;
  ground.x = ground.width / 2;
  
// Making monkey jump on pressing space
  if(keyDown("space") && monkey.y > 314) {
    monkey.velocityY = -18;
  }
  monkey.velocityY += 0.8;
  monkey.collide(ground);
  monkey.debug = true;
  
// Displaying score with value
  score += Math.round(getFrameRate() / 60);
  textSize(15);
  fill("red");
  text("Survival Time: " + score, 135, 20);
  
// Spawning bananas
  if(frameCount % 80 === 0) {
    food();
  }
  
// Spawning obstacles
  if(frameCount % 300 === 0) {
    obstacles();
  }
  
// Drawing sprites
  drawSprites();
}

// Obstacles function
function obstacles() {
  obs = createSprite(450, 330, 40, 40);
  obs.addImage(obsImg);
  obs.scale = 0.15;
  obs.velocityX = -6;
  obs.lifetime = 100;
  obs.setCollider("circle", 0, 0, 200);
  obs.debug = true
  obsGrp.add(obs)
}

// food function
function food() {
  var randY = Math.round(random(120, 200));
  banana = createSprite(450, 200, 10, 10);
  banana.y = randY;
  banana.addImage(bananaImg);
  banana.scale = 0.1;
  banana.velocityX = -6;
  banana.lifetime = 100;
  banana.setCollider("rectangle", 0, 0, 490, 350);
  banana.debug = true;
  foodGrp.add(banana);
}




