const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  g1=new Ground(200,300,400,20);
b1=new Box(200,200,50,50);
   b2=new Box(200,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
   g1.display();
b1.display();
    b2.display();
}