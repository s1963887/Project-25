class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,200,213,options);
      this.width = 200;
      this.height = 213;
      this.image = loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
    
    }
  };