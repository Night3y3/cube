Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hover-text", {
  videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/3.mp4"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: "#main",
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let secs = document.querySelectorAll(".fleftelm");
Shery.imageEffect("#images", {
  style: 2,
  slideStyle: (setScroll) => {
    secs.forEach(function (sec, index) {
      ScrollTrigger.create({
        trigger: sec,
        start: "top top",
        scrub: 1,
        onUpdate: function (progress) {
          setScroll(progress.progress + index);
        },
      });
    });
  },
});
