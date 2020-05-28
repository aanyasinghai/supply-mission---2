
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package1Body,package2Body;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	package1Sprite=createSprite(width/2, 200, 10,10);
	package1Sprite.addImage(packageIMG)
	package1Sprite.scale=0.2

	package2Sprite=createSprite(width/2, 200, 10,10);
	package2Sprite.addImage(packageIMG)
	package2Sprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = new Box(400,660,400,10);
	box2 = new Box(200,630,20,100);
	box3 = new Box(600,630,20,100);

	engine = Engine.create();

	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	package1Body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, package1Body);
	package2Body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, package2Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);

	keyPressed();

}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  

  package1Sprite.x= package1Body.position.x 
  package1Sprite.y= package1Body.position.y  

  package2Sprite.x= package2Body.position.x 
  package2Sprite.y= package2Body.position.y  

  drawSprites();

  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);   
    Matter.Body.setStatic(package1Body,false);   
    Matter.Body.setStatic(package2Body,false);   
  }
}