// Random Circle Pack
// Omar Al Zeidi


circlePack = (n, width,  height,r, allowOverlap=false)=>{
  let circles = []

  let protection = 6000000;
  let i = 0
  while (i <n ){
    i++;
    let newCricle = {
      x: random(0,width),
      y: random(0,height),
      r: random(0,r),
    } 
    let overlapping = false;
    for (const c of circles) {
      let d = dist(c.x,c.y, newCricle.x, newCricle.y)
      if (allowOverlap == true){
        overlapping = d < c.r + newCricle.r && d > abs(c.r-newCricle.r)
      }else{
        overlapping = d < c.r + newCricle.r 
      }
      
      if (overlapping === true){
        break;
      }
    }
    if (overlapping ===false){
      circles.push(newCricle);
    }
    
    if (i > protection){
      break;
    }
  }

  return(circles)
}