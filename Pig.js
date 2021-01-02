class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //completely make img visible
    this.Visibility=255;
  }

display(){
  //parent function

  if(this.body.speed<3){
  super.display();
  }
  //console.log(this.body.speed);
else{
  World.remove(world,this.body)


  push();
  this.Visibility=this.Visibility-5;
  //image takes 2nd value as visibility to create the slow effect
  tint(255,this.Visibility);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop();

}



}
};