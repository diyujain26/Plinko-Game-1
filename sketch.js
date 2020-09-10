const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var canvas

var ground;
var division1,division2,division3,division4,division5,division6,division7,division8;
var particles = [];
var plinkos = [];

function setup() {
  canvas = createCanvas(500,600);

  engine = Engine.create();
  world = engine.world;

  for (var i = 40; i<= width; i = i+40 ){
     plinkos.push(new Plinko(i , 150));
  }

  for (var i = 15; i<= width; i = i+40 ){
    plinkos.push(new Plinko(i , 50));
 }

 for (var i = 15; i<= width; i = i+40 ){
  plinkos.push(new Plinko(i , 250));
}

for (var i = 40; i<= width; i = i+40 ){
  plinkos.push(new Plinko(i , 350));
}
  
  ground = new Ground(250,590,500,10)
  //createSprite(400, 200, 50, 50);

  division1 = new Divisions(0,485,10,200);
  division2 = new Divisions(70,485,10,200);
  division3 = new Divisions(140,485,10,200);
  division4 = new Divisions(210,485,10,200);
  division5 = new Divisions(280,485,10,200);
  division6 = new Divisions(350,485,10,200);
  division7 = new Divisions(420,485,10,200);
  division8 = new Divisions(490,485,10,200);
}

function draw() {
  Engine.update(engine);
  background(0);

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2 - 30,width/2 +30),10,10));
  
  }
  for  (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  ground.display();
  division1.display(); 
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  drawSprites();
}