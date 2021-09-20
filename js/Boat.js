class Boat{
    constructor(x,y,width,height,boatPos){
        var option = {
            density : 1.0,
            friction : 1.0,
            restitution : 0.8
        }
       this.body = Bodies.rectangle(x,y,width,height,option);
       World.add(world,this.body);
       this.height = height;
       this.width = width;
       this.image = loadImage("../assets/boat.png");
       this.boatPos = boatPos;
    }    

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,this.boatPos,this.width,this.height);
     pop();
    }

    remove(index){
        World.remove(world,boats[index].body);
        boats.splice(index,1);
    }
}