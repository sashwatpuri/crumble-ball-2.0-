
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , paperobject ;
var dustbin , dustbin2 , dustbin3 ,dustbinImage ; 
var ground ;  

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,100,30);

	dustbin = new Dustbin(680,670,200,20);
	dustbin2 = new Dustbin(580,605,20,150);
	dustbin3 = new Dustbin(780,605,20,150);

	ground = new Ground(400,680,800,10);


	Engine.run(engine);
  
	

}


function draw() {
  background(220);
  
  paper.Display();

  dustbin.Display();
  dustbin2.Display();
  dustbin3.Display();	

  ground.Display();

  drawSprites();

  image(dustbinImage , 680,570,240,225);
  
  console.log(mouseX , mouseY)

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body , paper.body.position,{x : 105 , y:-105 })
	}
	}