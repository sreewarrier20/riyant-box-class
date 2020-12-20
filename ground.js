class Ground{
    constructor(x,y,width,height){
        
    var ground_options ={
        isStatic: true
    }

    this.ground = Bodies.rectangle(x,y,width,height,ground_options);
    this.w=width;
    this.h=height;
    World.add(world,this.ground);

    }
    display(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
    }
}