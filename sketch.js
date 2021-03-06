const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine,myWorld;
var box1;
var box2;
var box3;
var box4;
var box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24; 
var ground,ball,rope; 
var stand1,stand2,score

function setup() {
  createCanvas(1200,700);
engine =Engine.create();
world = engine.world;
score = 0

 ground = new Ground(600,height,1200,20);
 stand1 = new Ground(500,550,300,20);
 stand2 = new Ground(900,275,300,20);
 box1 = new Box(500,480,50,70)
 box2 = new Box(450,480,50,70)
 box3 = new Box(400,480,50,70)
 box4 = new Box(550,480,50,70)
 box5 = new Box(600,480,50,70)
 box6 = new Box(425,410,50,70)
 box7 = new Box(475,410,50,70)
 box8 = new Box(525,410,50,70)
 box9 = new Box(575,410,50,70)
 box10 = new Box(450,340,50,70)
 box11 = new Box(500,340,50,70)
 box12 = new Box(550,340,50,70)
 box13 = new Box(475,270,50,70)
 box14 = new Box(525,270,50,70)
 box15 = new Box(500,200,50,70)
 box16 = new Box(900,200,50,70)
 box17 = new Box(850,200,50,70)
 box18 = new Box(800,200,50,70)
 box19 = new Box(950,200,50,70)
 box20 = new Box(1000,200,50,70)
 box21 = new Box(900,130,50,70)
 box22 = new Box(850,130,50,70)
 box23 = new Box(950,130,50,70)
 box24 = new Box(900,60,50,70)
 ball = new Ball(100,500)
 rope = new Rope(ball.body,{x : 100, y : 400})
}

function draw() {
  background(0); 
  Engine.update(engine);  
  ground.display();   
  stand1.display();
  stand2.display();
 box1.display();
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()
 box17.display()
 box18.display()
 box19.display()
 box20.display()
 box21.display()
 box22.display()
 box23.display()
 box24.display()
 ball.display()
 rope.display()
 box1.score()
 box2.score()
 box3.score()
 box4.score()
 box5.score()
 box6.score()
 box7.score()
 box8.score()
 box9.score()
 box10.score()
 box11.score()
 box12.score()
 box13.score()
 box14.score()
 box15.score()
 box16.score()
 box17.score()
 box18.score()
 box19.score()
 box20.score()
 box21.score()
 box22.score()
 box23.score()
 box24.score()
 textSize(30)
 text("Score : " + score,580,100)
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
  rope.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){ 
     rope.attach(ball.body);
     Matter.Body.setPosition(ball.body,{x: 100, y: 400})
  }     
}