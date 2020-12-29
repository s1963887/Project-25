
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paperBall;
var dustBin1, dustBin2, dustBin3;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 670, 1600, 20);
	paperBall = new Paper(200,200,30);
	dustBin1 = new Dustbin(1100,550,200,20); 
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  ground.display();
  paperBall.display();
  dustBin1.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Body.applyForce(paperBall.body,paperBall.body.position,{x:220,y:-175});
	}
}


