const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground, ball;

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var groundOptions = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,380,800,20,groundOptions);
  World.add(myWorld,ground);

 var ballOptions = {
   restitution : 0.7
 }
  ball = Bodies.circle(400,100,50,ballOptions);
  World.add(myWorld,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  circle(ball.position.x,ball.position.y,100);
}

