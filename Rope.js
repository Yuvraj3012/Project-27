class Rope{
    constructor(body1,body2.,offsetx,offsetY){

        this.offsetx=offsetx
    this.offsetY=offsetY
        var option = {
            bodyA :body1,
         
          pointB:{X:this.offsetx,y:this.offsetY}
               } 
            this.rope  = Constraint.create(option)
             World.add(world,this.rope)
    
    }
    display(){
    
    var pointa = this.rope.bodyA.position
    var pointb = this.rope.bodyB.position
    strokeWeight(5)
    line(pointa.x,pointa.y,pointb.x,pointb.y)
    }
    }