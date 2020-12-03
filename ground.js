class Ground {
    constructor (x,y,w,h){
         var option = {
            isStatic : true     
        }
    this.ground = Bodies.rectangle(x,y,w,h,option);
    this.width = w ;
    this.height = h ; 
    World.add(world,this.ground)
    }
    Display(){
        rectMode(CENTER);
        fill("green");
        rect(this.ground.position.x , this.ground.position.y , this.width , this.height);
    }
}