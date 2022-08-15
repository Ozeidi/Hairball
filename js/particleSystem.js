// Particle System
// Omar Al Zeidi


const noiseScale = 0.01/2;

class particleSystem {

  constructor (x, y, r, n, color) {
    this.origin = createVector(x, y);
    this.r = r;
    this.n = n
    this.color= color
    this.particles =[];
    this.noiseScale = map(r, 20,500, 0.005, .01)
    for(let i = 0; i < this.n; i ++) {
      this.addParticle();
    }
    noFill()
    stroke(color)
    ellipse(this.origin.x, this.origin.y, this.r*2);
  }

  addParticle = (x, y) =>{
    if (x !== undefined && y !== undefined) {
      this.particles.push(new Particle(x, y));
      console.log('Omar')
    } else {

      let a = random(0, 2*PI);
      let r = this.r * sqrt(random());
      let x = this.origin.x + r * cos(a);
      let y = this.origin.y + r * sin(a);
      this.particles.push(new Particle(x, y));
      
    }
  }

  run() {
    // Run every particle
    // ES6 for..of loop

    this.particles.forEach(p=>{
      let {x,y} = {...p.position};
      let dis = dist(this.origin.x, this.origin.y, x, y);


      let v;
      if (dis<=this.r){
        
        let n = noise(p.position.x*this.noiseScale, p.position.y*this.noiseScale, frameCount * this.noiseScale**2)
        let a = TAU * n;
        v = createVector(cos(a),sin(a));
        p.run(v,this.color)
        // p.position.x += cos(a);
        // p.position.y += sin(a);
        // p.run(v);
      }else{
        let a = random(0, 2*PI);
        let r = this.r * sqrt(random());
        let x = this.origin.x + r * cos(a);
        let y = this.origin.y + r * sin(a);
        p.position= createVector(x,y);
      }
      // ellipse(p.position.x, p.position.y);

    })


    // Filter removes any elements of the array that do not pass the test
    this.particles = this.particles.filter(particle => !particle.isDead());
  }

  }
