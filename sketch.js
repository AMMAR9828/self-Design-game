const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var backgroundImage;
var ground,invisibleground;
var player_walk, player;
var ground;



function preload(){
	backgroundImage = loadImage("bgImage.jpg");
	player_walk = loadAnimation("Walk-IMG/walk1.jpg","Walk-IMG/walk2.jpg","Walk-IMG/walk3.jpg","Walk-IMG/walk4.jpg","Walk-IMG/walk5.jpg","Walk-IMG/walk6.jpg","Walk-IMG/walk7.jpg","Walk-IMG/walk8.jpg");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// engine = Engine.create();
	// world = engine.world;

    //Create the Bodies Here.
	player=createSprite(50,height-70, 20,20);
	player.addAnimation("running",player_walk);
	player.setCollider("rectangle",20,40,240,350);
	player.scale = 0.5
	player.debug=true

	ground = createSprite(width/2,height,width);
	ground.shapeColor="blue";
	ground.x=width/2

	invisibleground =createSprite(width/2,height,width);
	invisibleground.shapeColor="blue"




	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

   
  if(keyDown("space") && player.y >= height-10 ){
   player.velocityY = -10 
  }
   player.velocityY = player.velocityY +0.8

   player.collide(invisibleground);
  
  drawSprites();
 
}



