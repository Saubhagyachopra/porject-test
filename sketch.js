
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1 
var bob
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,200,500,20);
    bob = new ball(400,500,r/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();
  bob.display();
  drawSprites();
 
}



