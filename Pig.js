class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255; //if visiblity is 255 then it is completely visible, if visiblity is 0 then it become invisible
  }

  display() {
    console.log(this.body.speed); //check the speed of the pig
    if(this.body.speed<3) { // if the speed is less then 3 
      super.display(); // then display the pig
    }
    else{ // else vanish the pig
      World.remove(world,this.body); //remove the pig from the World
      push();
      this.visiblity = this.visiblity-5; // subtract 5 from visiblity everytime
      tint(255,this.visiblity); // to create fading effect
      image(this.image, this.body.position.x, this.body.position.y, 50,50); // to create fading effect on pigs picture
      pop();
    }
    
  }
}