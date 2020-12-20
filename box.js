class Box{
    constructor(x,y,width,height){
        this.object = Bodies.rectangle(x,y,width,height);
        World.add(world,this.object);
        this.w=width;
        this.h=height;
    }
    display(){
        rectMode(CENTER);
    rect(this.object.position.x,this.object.position.y,this.w,this.h);
    }
}