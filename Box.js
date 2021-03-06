class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width
        this.height = height
        this.visibility = 255
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position
        var angle = this.body.angle
        if (this.body.speed < 7){
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            strokeWeight(5)  
            stroke("orange") 
            fill("blue")
            rect(0,0,this.width,this.height);
            pop()      
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility = this.visibility - 5
            pop()
        }

    }
    score(){
        if(this.visibility < 0 && this.visibility > -105){
            score = score + 1
        }
    }
} 
