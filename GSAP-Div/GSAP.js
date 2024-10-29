gsap.to(".box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius:"50%",
    scale: 0.01,
    repeat:-1,
    yoyo:true
})

gsap.from(".box2", {
  x: 1000,
  duration: 2,
  delay: 3,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.01,
  repeat:-1,
  yoyo:true
});

gsap.from(".box3", {
  x: 1000,
  duration: 2,
  delay: 5,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.01,
  repeat:-1,
  yoyo:true
});

