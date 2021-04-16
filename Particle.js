class Particle{
    constructor(x){
        var options={
            isStatic:false
        }

        this.x=x;
        this.y=50;
        this.radius=10
        this.body=Bodies.circle(this.x,this.y,this.radius,options);

        World.add(world,this.body);
    }
    display(){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(rgb(random(round(0,255)),random(round(0,255)),random(round(0,255))));
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}