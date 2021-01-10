class Ball{

    constructor(x,y,width,height) {
        var option={
           
           // restitution:0.3,
            density:2.0,
            friction:1
        }
        this.body =  Bodies.circle(x,y,width,height); 
        this.width = width;
        this.height = height;
        this.image =loadImage("images/paper.png")
        World.add(world, this.body);  
    }
    

    display(){

        var pos = this.body.position;

        //ellipseMode(CENTER);
        fill("brown");
        //ellipse(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
    }

}