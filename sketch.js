const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,boat;

var ground,bgImg,tower,cannon,cannonball;
var balls;
var boats;

function preload() {
  bgImg = loadImage("./assets/background.gif")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,580,1500,20);

  tower = new Tower(160,350,160,310);
  
  angleMode(DEGREES)
  angle = 20 ;

  cannon = new Cannon(180,110,130,100,angle);

  balls = [];
  boats = [];
  //boat = new Boat(width,height-50,200,200,-50);
}

function draw() {
  background(189);

  image(bgImg,0,0,1200,600);

  tower.display();

  cannon.display();
  
  //balls[0].display,balls[1] ,.... balls[length-1]
  for( i = 0 ;i <= balls.length-1 ; i += 1){
      showCannonBalls(balls[i],i);
      collisionWithBoat(i);
  }
  Engine.update(engine);
  
  //boat.display();
  //boat = new Boat(width,height-50,200,200,-50);
 showBoats(); 
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
      balls[balls.length-1].shoot();
    }
}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
   cannonball = new CannonBall(cannon.x,cannon.y);
   balls.push(cannonball)
   //balls.push(new CannonBall(cannon.x,cannon.y))
  }
}

function showCannonBalls(ball,index){
  
  if(ball.body.position.x >  width || ball.body.position.y > height -60){
    World.remove(world,ball);
    balls.splice(index,1)
  }

  if(ball){
    ball.display();
  }
  
}

function showBoats(){
  //If boats are already present then display
  //else create first boat
  if(boats.length > 0){
    //If the last element in boats array position && 
    if(boats[boats.length-1].body.position.x < width -300 && boats.length < 4){
      var positions = [-30,-45,-25,-35]
      var ran = random(positions);
      boat = new Boat(width,height+ran,200,200,ran);
      boats.push(boat);
    }
   for(var i = 0 ; i <= boats.length -1 ; i++){
     boats[i].display();
     Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0})
   }
    
    
  }
  else{
    boat = new Boat(width,height-50,200,200,-50);
    boats.push(boat);
    //ArrName.push(boat)
  }
}

function collisionWithBoat(index){
  for( var i = 0 ; i <= boats.length-1 ; i++){
    if(balls[index] !== undefined && boats[i] !== undefined){
      var collision = Matter.SAT.collides(balls[index].body,boats[i].body);
      if(collision.collided === true ){
        boats[i].remove(i);
        Matter.Body.setVelocity(balls[index].body, { x : 0, y : 0});
        balls[index].remove(index);
          //Remove the boat from the world & array
          //Same for the annon ball
      }
    }
  }
}