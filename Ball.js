class Ball{
    constructor(x,y){
        this.body = Bodies.circle(x,y,25); 
        this.radius = 25;
        World.add(world,this.body);
    } 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(5);
        stroke("blue");
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop() 
    }  
}