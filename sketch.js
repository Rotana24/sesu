const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}