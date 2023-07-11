gsap.from("#home>.homediv", {
    opacity: 0,
    duration: 1,
    x: -120,
    ease: "power1.out",
  });
  gsap.from("#home>.hometextdiv", {
    opacity: 0,
    duration: 1,
    x: 100,
    ease: "power1.out",
  });
  
  gsap.from("#filmsubmission>.hometextdiv",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    },
    "-=1"
  );
  
  gsap.from(".youtubediv",
    {
      x: 100,
      opacity: 0,
      duration: 1,
  
      ease: Expo.easeInOut,
    },
    "-=1"
  );
  
  gsap.from(".f1", {
    scrollTrigger: {
       start:"top 50%",
      scroller: "#main",
      trigger: "#filmsubmission",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: Expo.easeInOut,
    skewY: 3,
  
  });