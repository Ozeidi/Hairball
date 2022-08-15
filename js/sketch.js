// A placeholder for color pallete
let data;
// color pallete index
let ix = 0;
// list for particle systems
let ps =  [];
// max circle radius
const r =500;
//Number of particles in a system
const n = 200;

function preload() {
  data = loadJSON("../styles/pallets.json");b 
  
}
function setup() {
  // create list of circle packs
  let cp = circlePack(n, windowWidth, windowHeight, r,allowOverlap=false);
  createCanvas(windowWidth, windowHeight);

  // clear();
  background(0)
  // get random index for a pallete from our pallete
  ix = floor(random(data.palettes.length));
  let pallete = data.palettes[ix];

  // stroke(220,10);
  strokeWeight(1)
  let color ="";
  for (i=0; i<cp.length;i++){
    color = pallete[floor(random(pallete.length))]
    console.log(color);
    
    let x = map(random(), 0,1,r, windowWidth-r);
    let y = map(random(), 0,1,r,  windowHeight-r);
    // for the number of particles we will use the circle radius (r)
    // This is basically to have proportional number of particles based on circle size.
    ps.push( new particleSystem(cp[i].x,cp[i].y,cp[i].r,cp[i].r,color))
  }
  strokeWeight(1)

}


function draw() {
  // background(0, 10);
  // ps.run();
  ps.forEach(p=>{
    p.run()
  
  })

}


  function mouseReleased() {
    // noiseSeed(millis());
  }
  