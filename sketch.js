
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(250,300,20)
	bob2=new Bob(300,300,20)
	bob3=new Bob(350,300,20)
	bob4=new Bob(400,300,20)
	bob5=new Bob(450,300,20)
roof=new Roof(350,100,300,30)
s1=new Suspender(bob1.body,roof.body,-50*2,0)
s2=new Suspender(bob2.body,roof.body,-25*2,0)
s3=new Suspender(bob3.body,roof.body,0*2,0)
s4=new Suspender(bob4.body,roof.body,25*2,0)
s5=new Suspender(bob5.body,roof.body,50*2,0)

	
  
}


function draw() {
	

  Engine.update(engine)
  background("lightblue");
 
 
  drawSprites();
  
 roof.display()
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 s1.display()
 s2.display()
 s3.display()
 s4.display()
 s5.display()
}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-45});

	}
}

 

