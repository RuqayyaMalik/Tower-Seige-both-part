class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png")
        this.visiblity = 225
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<2){

          imageMode(CENTER)
          image( this.image, pos.x, pos.y , 80,60);

        }
        else{

          World.remove(world, this.body);

          push();
        this.visiblity = this.visiblity - 5
        tint(255,this.visiblity)
        image( this.image, pos.x, pos.y , 80,60);
        pop();
        }
        
      }
}
