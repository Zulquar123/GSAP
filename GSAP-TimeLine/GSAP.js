
var tl = gsap.timeline()

tl.to(".box1", {
  x: 1500,
  duration: 2,
  delay: 1,
  rotate:360,
  repeat:-1
})
tl.to(".box2", {
  x: 1500,
  duration: 2,
  rotate:360,
  repeat:-1
})
tl.to(".box3", {
  x: 1500,
  duration: 2,
  rotate:360,
  repeat:-1
})