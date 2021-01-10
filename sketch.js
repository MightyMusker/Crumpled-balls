
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var box1Sprite,box2Sprite,box3Sprite;
var dustbin;

function preload()
{
	dustbin=loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);
  

	engine = Engine.create();
	world = engine.world;

 /* box1Sprite=createSprite(300,640,200,20);
	box1Sprite.shapeColor="red";

	box2Sprite=createSprite(200,610,20,100);
	box2Sprite.shapeColor="red";

	box3Sprite=createSprite(400,610,20,100);
	box3Sprite.shapeColor="red";*/

  ball=new Ball(100,630,50,50);
  ground=new Ground(500,650,1000,5);

  box1=Bodies.rectangle(800,550,200,20,{isStatic:true});
  World.add(world,box1);

  box2=Bodies.rectangle(700,610,20,100,{isStatic:true});
  World.add(world,box2);

  box3=Bodies.rectangle(900,610,20,100,{isStatic:true});
  World.add(world,box3);

	
  
}


function draw() {
  ellipseMode(CENTER);
  background(255);
  Engine.update(engine);
   //ball.position.x=ballsprite.x;
   //ball.position.y=ballsprite.y;
   
   /*box1Sprite.x=box1.position.x
   box1Sprite.y=box1.position.y
 
   box2Sprite.x=box2.position.x
   box2Sprite.y=box2.position.y
 
   box3Sprite.x=box3.position.x
   box3Sprite.y=box3.position.y*/
    //image(imagename,x position,y position,width,height);
   rectMode(CENTER);
   imageMode(CENTER);
   image(dustbin, box1.position.x,box1.position.y,240,250)
   rect(box2.position.x,box2.position.y,20,100,)
   rect(box3.position.x,box3.position.y,20,100,)
   
   ball.display();
   ground.display();
  
  // drawSprites();

  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position,{x:1,y:-1});
    console.log(ball.body.position.x)
    console.log(ball.body.position.y)
   }
 
}



