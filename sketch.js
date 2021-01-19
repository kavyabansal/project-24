var ground,groundBody,boxbasr,boxleft,boxright;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=createSprite(450,455,900,10);
	ground.shapeColor=("yellow");

	groundBody = Bodies.rectangle(450,455,900,10,{isStatic:true});
	World.add(world,groundBody);

	boxPosition=650;
	boxY=400;

	boxleft=new Box(700,400,20,100);
	boxright=new Box(800,400,20,100);
	boxbase=new Box(750,440,117,20);

	ball=new Ball(200,440,10);

//	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
//	boxleftSprite.shapeColor=color(255,0,0);

//	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
//	boxBase.shapeColor=color(255,0,0);

//	boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
//	boxRightSprite.shapeColor=color(255,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
boxleft.display();
boxright.display();
boxbase.display();
ball.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}
