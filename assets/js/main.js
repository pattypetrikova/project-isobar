gsap.registerPlugin(ScrollTrigger);

// ---------------------- clouds -----------------------

  gsap.to("#cl2",{
    scrollTrigger : {
        scrub: 3
    },
    x: -500,
});


gsap.to("#cl1",{
    scrollTrigger : {
        scrub: 1
    },
    x: -500,
});

gsap.to("#cl3",{
    scrollTrigger : {
        scrub: 2
    },
    x: 500,
});

gsap.to("#cl4",{
    scrollTrigger : {
        scrub: 1
    },
    x: 500,
});

//---------------------- waves -----------------------/ /
  gsap.to(".waves",{
    scrollTrigger: {
    trigger: ".waves",
    start:"bottom bottom",
    scrub: 3,
      },
      x: -800,
      duration: 3,
  });

//---------------------- mountain -----------------------/ /

  gsap.to("#mountain",{
      scrollTrigger : {
        trigger: ".onceupontime",
          scrub: 1
      },
      y: -500,
  })

  gsap.to(".mountain-bg",{
    scrollTrigger : {
        scrub: 1
    },
    y: -500,
})
  
//---------------------- coral -----------------------/ /
let tl = gsap.timeline({
    scrollTrigger : {
        scrub: 3,
        trigger: ".wrapper"
    },
   
});

tl

.to(".coral-bg02", {
    y: 200
});




//---------------------- dream -----------------------/ /
let tl02 = gsap.timeline({
    scrollTrigger : {
        scrub: 3,
        trigger: ".mountain",
        start: "top top",
        end: "bottom bottom",
    },
});

tl02
.to(".dream", {scale: 0.7, rotation:45, autoAlpha: 0.5})
.to(".dream02", {scale: 0.7, rotation:45, autoAlpha: 0.5})
.to(".dream03", {scale: 0.7, rotation:45, autoAlpha: 0.5});

//---------------------- fishes -----------------------/ /
gsap.to(".scene-ready",{
    scrollTrigger : {
        scrub: 12,
        trigger: ".fish" ,
        start:"top top",
    },
    y: 1000,
    
})

gsap.to(".fish-sc1",{
    scrollTrigger : {
        scrub: 1,
    },
    x: 300,
    
})

//---------------------- Fishgroup -----------------------/ /

gsap.to(".dori",{
    scrollTrigger : {
        scrub: 1,
        trigger: ".wrapper"
    },
    x: 100,
    
})

gsap.to(".fugu",{
    scrollTrigger : {
        scrub: 1,
        trigger: ".wrapper"
    },
    x: 70,
    
})


gsap.to(".crab",{
    scrollTrigger : {
        scrub: 1,
        trigger: ".wrapper"
    },
    x: 50,
    
})
gsap.to(".fish",{
    scrollTrigger : {
        scrub: 7,
        trigger: ".trigger",
    },
    x: "70vw",
    duration: 7
    
})

gsap.to(".fish",{
    scrollTrigger : {
        scrub: 7,
        trigger: ".trigger"
    },
    x: "70vw",
    duration: 5
    
})

let tl3 = gsap.timeline({
    scrollTrigger : {
        scrub: 3,
        trigger: ".sky",
        start: "top top",
        end: "bottom bottom",
    },
});

tl3
.to(".city-front", {scale: 1.2,})


//---------------------- sky -----------------------/ /



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
