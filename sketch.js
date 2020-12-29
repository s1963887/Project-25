
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paperBall;
var dustBin1, dustBin2, dustBin3;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 670, 800, 20);
	paperBall = new Paper(200,200,30);
	dustBin1 = new Dustbin(600,650,200,20);
	dustBin2 = new Dustbin(700,610,20,100);
	dustBin3 = new Dustbin(500,610,20,100);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paperBall.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Body.applyForce(paperBall.body,paperBall.body.position,{x:120,y:-120});
	}
}


