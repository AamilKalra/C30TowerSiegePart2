class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    this.image=loadImage("download.jpg")
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed);
    var pos =this.body.position;
    
    if(this.body.speed<5){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    image(this.image, 0,0, this.width, this.height);
    pop();
    }
    else{
    World.remove(world,this.body);
    push()
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
    pop()
  }
  }

}