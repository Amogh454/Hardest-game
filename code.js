var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5b2a6444-be5c-459a-8dba-c88a190c9398","1a3d4981-1a5c-448b-b3bf-7fe04e7ec1f1","b4103e63-e4bd-402e-a65e-a6f0453ce474"],"propsByKey":{"5b2a6444-be5c-459a-8dba-c88a190c9398":{"name":"green_monster_1","sourceUrl":null,"frameSize":{"x":211,"y":211},"frameCount":1,"looping":true,"frameDelay":12,"version":"9LTCkKQxkMA.QA3NF_fqTVxH7aV8AZHZ","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":211},"rootRelativePath":"assets/5b2a6444-be5c-459a-8dba-c88a190c9398.png"},"1a3d4981-1a5c-448b-b3bf-7fe04e7ec1f1":{"name":"cactus_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"b4103e63-e4bd-402e-a65e-a6f0453ce474":{"name":"brown_cat_1","sourceUrl":null,"frameSize":{"x":190,"y":190},"frameCount":3,"looping":true,"frameDelay":12,"version":"l6eyzsTfNv3DMja8NdSEI80lAwnCU5Fn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":380},"rootRelativePath":"assets/b4103e63-e4bd-402e-a65e-a6f0453ce474.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Game coded by Amogh p kaushik
//Thanks to whitehatjr and teacher roopa mam
//The worlds hardest game 

//creating walls 
//top wall
var wall1 = createSprite(250, 130, 300, 5);


//bottom wall
var wall2 = createSprite(150, 270, 300, 5);

//player ball
var greenBall = createSprite(20, 335, 15, 15);
greenBall.shapeColor = "green";


//bottom section balls
var ball1 = createSprite(80, 335, 10, 10);
var ball2 = createSprite(120, 335, 10, 10);
var ball3 = createSprite(160, 335, 10, 10);
var ball4 = createSprite(200, 335, 10, 10);
var ball5 = createSprite(240, 335, 10, 10);
var ball6 = createSprite(280, 335, 10, 10);
ball1.shapeColor = "red";
ball2.shapeColor = "red";
ball3.shapeColor = "red";
ball4.shapeColor = "red";
ball5.shapeColor = "red";
ball6.shapeColor = "red";

//doors which bounce at two corners of wall
var sDoor1 = createSprite(360, 270, 50, 8);
var sDoor2 = createSprite(40, 130, 50, 8);
sDoor1.shapeColor = "red";
sDoor2.shapeColor = "red";

//middle section of red one
var line1 = createSprite(125, 200, 50, 7);
var line2 = createSprite(200, 200, 50, 7);
var line3 = createSprite(275, 200, 50, 7);
line1.shapeColor = "red";
line2.shapeColor = "red";
line3.shapeColor = "red";

//top section
var ball7 = createSprite(200, 100, 10, 10);
var ball8 = createSprite(250, 100, 10, 10);
var ball9 = createSprite(200, 50, 10, 10);
var ball10 = createSprite(250, 50, 10, 10);
ball7.shapeColor = "red";
ball8.shapeColor = "red";
ball9.shapeColor = "red";
ball10.shapeColor = "red";

//trophy
var objective = createSprite(360, 75, 20, 20);
objective.shapeColor = "yellow";

//score
var score = 0;

//game states
var gameState = "play";







playSound("assets/category_music/clear_evidence_loop1.mp3", true);

velocity();

function draw() {
  background("lightblue");
  bounce();
  if(keyDown("left")){
   greenBall.x = greenBall.x-3;
   gameState = "play";
  }
  if(keyDown("right")){
    greenBall.x = greenBall.x+3;
    gameState = "play";
  }
  if(keyDown("up")){
    greenBall.y = greenBall.y-3;
    gameState = "play";
  }
  if(keyDown("down")){
    greenBall.y = greenBall.y+3;
    gameState = "play";
  }
  
  text("DEATHS: "+score, 10, 10);
  
  
  if(greenBall.collide(ball1)||greenBall.collide(ball2)||greenBall.collide(ball3)||greenBall.collide(ball4)
     ||greenBall.collide(ball5)||greenBall.collide(ball6)||greenBall.collide(ball7)||
     greenBall.collide(ball8)||greenBall.collide(ball9)||greenBall.collide(ball10)||
     greenBall.collide(sDoor1)||greenBall.collide(sDoor2)||greenBall.collide(line1)||
     greenBall.collide(line2)||greenBall.collide(line3)){
    reset();
    score = score+1;
  }
  
  if(greenBall.collide(objective)){
    gameState = "over";
    text("YOU WIN!",200, 200);
    greenBall.velocityX = 0;
    greenBall.velocityY = 0;
    score = 0;
    text("press R to restart", 200, 220);
  }
  
  if(keyDown("R")&&gameState === "over"){
    reset();
  }
  
  createEdgeSprites();
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball7.bounceOff(edges);
  ball8.bounceOff(edges);
  ball9.bounceOff(edges);
  ball10.bounceOff(edges);
  sDoor1.bounceOff(edges);
  sDoor2.bounceOff(edges);
  greenBall.bounceOff(edges);
  
  
  ball1.bounceOff(wall2);
  ball2.bounceOff(wall2);
  ball3.bounceOff(wall2);
  ball4.bounceOff(wall2);
  ball5.bounceOff(wall2);
  ball6.bounceOff(wall2);
  
  sDoor1.bounceOff(wall2);
  sDoor2.bounceOff(wall1);
  
  line1.bounceOff(wall1);
  line1.bounceOff(wall2);
  line2.bounceOff(wall1);
  line2.bounceOff(wall2);
  line3.bounceOff(wall1);
  line3.bounceOff(wall2);
  line1.bounceOff(edges);
  line2.bounceOff(edges);
  line3.bounceOff(edges);
  
  ball7.bounceOff(wall1);
  ball8.bounceOff(wall1);
  ball9.bounceOff(wall1);
  ball10.bounceOff(wall1);
  
  greenBall.bounceOff(wall1);
  greenBall.bounceOff(wall2);
  
  

  
  drawSprites();
  
}
















function reset(){
  greenBall.x = 20;
  greenBall.y = 335;
  greenBall.velocityX = 0;
  greenBall.velocityY = 0;
}


function velocity(){
  
  
  ball1.velocityY = 10;
  ball2.velocityY = -10;
  ball3.velocityY = 10;
  ball4.velocityY = -10;
  ball5.velocityY = 10;
  ball6.velocityY = -10;
  ball7.velocityY = 10;
  ball8.velocityX = -10;
  ball9.velocityX = 10;
  ball10.velocityY = -10;
  line1.velocityY = 5;
  line2.velocityY = -5;
  line3.velocityY = 5;
  sDoor1.velocityX = 3;
  sDoor2.velocityX = -3;
}



function bounce(){
}









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
