class Paper {
    constructor (x,y,radius){
        var options ={
           restitution: 0.3 ,
           friction:0.5,
           density:1.2 
         }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius ;
        World.add(world, this.body);
        
        this.paperi = loadImage("paper.png")
     }
     Display(){
        imageMode(CENTER);
        image(this.paperi,this.body.position.x , this.body.position.y , this.radius*2 , this.radius*2);
      }
}