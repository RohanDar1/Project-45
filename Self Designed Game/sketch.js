const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var monkey1, walkingimg, dancingimg, bgimg;
var ground, platform;
var animal1
var sling;
var divisions = []
var divisionHeight = 300

function preload(){

  dancingimg = loadImage("sprites/dancingmonkey.png")
  bgimg = loadImage("sprites/bg.png")

}

function setup(){
  engine = Engine.create();
    world = engine.world;
  createCanvas(displayWidth-10, displayHeight-140)
 
monkey1 = new monkey(250, 250)
ground = new Ground(displayWidth/2, (displayHeight/2)+300, displayWidth, 10);
animal1 = new animal(910, 515)
platform = new Ground(150, 600, 500, 320)
sling = new SlingShot (monkey1.body, {x: 250, y: 250})


for (var i = 410; i<=width; i = i+210)
{
  divisions.push(new division(i, height-divisionHeight/2, 10, divisionHeight))
}

}
function draw(){
  Engine.update(engine);
  background("white");

  text (mouseX+","+mouseY, mouseX, mouseY)

  for (var i = 0; i<divisions.length; i+=1){
    divisions[i].display();

  }

  
    ground.display();
    monkey1.display();
   animal1.display();
   platform.display();
  sling.display();
}

function mouseDragged(){
      Matter.Body.setPosition(monkey1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  sling.fly();
}