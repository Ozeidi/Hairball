// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// Simple Particle System

class Particle {

  constructor(x, y) {
    this.acceleration = createVector(1,-1)//createVector(random(-0.05,0.05),random(-0.05,0.05));
    this.velocity = createVector(); //random(-1,1), random(-1, 1)
    this.position = createVector(x, y);
    this.last_pos = createVector(x,y);
    this.size =random()*1
    this.lifespan = 10.0;

  }

  run(acc,color) {
    // console.log(this.position.x,this.position.y)
    this.update(acc);
    this.display(color);
  }

  // Method to update position
  update(acc) {

    // this.acceleration = acc
    // this.velocity.add(this.acceleration);
    this.velocity = acc;
    // if (this.velocity.mag() > 4) {
    //   this.velocity.setMag(4);
    // }     
    this.position.add(this.velocity);
    this.lifespan -= .001;
    // this.bounce();    

  }

  // Method to display
  display(mycolor) {
    // console.log(this.position.x,this.position.y)
    let c = color(mycolor)
    c.setAlpha(this.lifespan);
    stroke(c)
    
    strokeWeight(1);
    fill(c)
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }



  
}