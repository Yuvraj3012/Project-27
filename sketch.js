
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof,rope1;
var bob1,bob2,bob3,bob4,bobDiameter;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 20;
	bob1 = new Bob(235,665,30,30);
	bob2 = new Bob(295,665,30,30);
	bob3 = new Bob(355,665,30,30);
	bob4 = new Bob(415,665,30,30);
	
	roof = new Roof(330,300,290,20)

	rope1= new Rope(bob1.body,roof.body,bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();

 rope1.display();


  drawSprites();
 
}



