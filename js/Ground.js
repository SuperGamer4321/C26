class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.bodies = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodies);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}