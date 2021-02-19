
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,paper2,paper3,paper4,paper5;
var box;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(100,100)
	paper2 = new paper(125,100)
	paper3 = new paper(150,100)
	paper4 = new paper(175,100)
	paper5 = new paper(200,100)

	chain1 = new chain(paper1.body,{x:100, y:200})
	chain2 = new chain(paper2.body,{x:125, y:200})
	chain3 = new chain(paper3.body,{x:150, y:200})
	chain4 = new chain(paper4.body,{x:175, y:200})
	chain5 = new chain(paper5.body,{x:200, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
	paper1.display();
	paper2.display();
	paper3.display();
	paper4.display();
	paper5.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	


  drawSprites();
 
}



