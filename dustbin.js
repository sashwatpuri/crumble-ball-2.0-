class Dustbin {
    constructor (x,y,w,h){
        var options={
            isStatic : true 
        }
        this.Body = Bodies.rectangle(x,y,w,h,options)
        this.width = w; 
        this.height = h ; 
        World.add(world,this.Body);      
    }

    Display(){  
        push();
        rectMode(CENTER);
        fill("brown") ; 
        rect(this.Body.position.x , this.Body.position.y , this.width , this.height);
        pop();
    }
}