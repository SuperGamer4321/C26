class Cannon{
    constructor(x,y,w,h,angle){
        this.x = x;
        this.y  = y;
        this.w = w;
        this.h = h;
        this.angle = angle; //radians 
        this.cannonBase = loadImage("../assets/cannonBase.png");
        this.cannon = loadImage("../assets/canon.png");

    }

    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER)
        image(this.cannon,0,0,this.w,this.h);
        pop();

        image(this.cannonBase,70,20,200,200);
        //if u press right arrow and the angle < 56
        if(keyIsDown(RIGHT_ARROW) && this.angle < 56){
         this.angle += 1;  
         
        }

        if(keyIsDown(LEFT_ARROW) && this.angle > -37){
            this.angle -= 1;
        }

        console.log(this.angle);
        
    }


}