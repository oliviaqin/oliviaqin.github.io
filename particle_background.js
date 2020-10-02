var particle = document.querySelector('.particle');

const setColor = () => {
  var r = Math.random()*360;
  console.log(r);
  particle.style.backgroundColor = `hsl(${r}, 70%, 50%)`
}

const setSize = () => {
  var s = Math.random()*5 + 5;
  console.log(s);
  particle.style.height = `${s}px`;
  particle.style.width = `${s}px`;
}

const setTransform = () => {
  var x = Math.random()* window.innerWidth;
  var y = Math.random()* window.innerHeight;
  var z = Math.random()*100;

  console.log(x, y, z);

  particle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`

}

const setOpacity = () => {
  var o = Math.random();
  console.log(o);

  particle.style.opacity = o;
}

setColor();
setSize();
setTransform();
setOpacity();

var x = Math.random()* window.innerWidth;
var y = Math.random()* window.innerHeight;
var z = Math.random()*100;

particle.animate([
  {opacity: 0},
  {opacity: 1}
])
