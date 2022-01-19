gsap.registerPlugin(ScrollTrigger);

// ---------------------- clouds -----------------------
//  Pokus prvni , tento prehraje celou animaci a neraguje tolik na scrollbar, 
//  ale funguje mi na vice elementu
let scene = gsap.timeline();
ScrollTrigger.create({
    animation: scene,
    trigger:".cloud-01",
    start: "top top",
    end: " 20% bottom",
    scrub: 3,
    markers: true,
})

scene.to(".cloud-03", {
    x:400,
    ease: "none",
    duration: 3
});


scene.to(".cloud-02", {
    x:-200,
    ease: "none",
    duration: 3
});

scene.to(".cloud-04", {
    x:200,
    ease: "none",
    duration: 3
});

scene.to(".cloud-05", {
    x:-200,
    ease: "none",
    duration: 3
});

// Pokus druhy , tento presne reaguje na scrollbar ale
//  funguje mi jen na jeden element pak uz ne

var tl = gsap.timeline({
    scrollTrigger: {
      scrub: 1
    },

  });
  tl.to("#cl1",{
    x: -500,
    ease: "none"
  })
  tl.to("#cl2",{
    x: -500,
    ease: "none"
  })
  .to("#cl3",{
    x: -500,
  }, );

  gsap.to(".waves",{
    scrollTrigger: {
    trigger: ".waves",
    start:"bottom bottom"
      },
      y: 200,
      duration: 3,
  });


//---------------------- stars -----------------------/ /
var canvas = document.querySelector("#starfield"),
context = canvas.getContext("2d"),
stars = 200;

for (var i = 0; i < stars; i++) {
    x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight;
   context.fillStyle = "white";
    context.fillRect(x,y,2,2);
}
