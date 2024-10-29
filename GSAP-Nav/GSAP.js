
var tl = gsap.timeline()

tl.from(".nav", {
  y: -30,
  opacity:0,
  duration: 1,
  delay: 0.5,

})


tl.from("h1", {
  y: -30,
  opacity:0,
  duration: 1,
  

})


tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3
  
});

tl.from(".name h1", {

  y:30,
  opacity: 0,
  duration: 0.5,
  rotate: 360,
  scale:0.2

  
  
});
