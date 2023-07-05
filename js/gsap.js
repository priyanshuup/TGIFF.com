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
  
      // delay:.5,
      opacity: 0,
      duration: 1,
  
      ease: Expo.easeInOut,
    },
    "-=1"
  );
  
  gsap.from("#facilities", {
    scrollTrigger: {
       start:"top 20%",
        // end:"top 80%",
      //   pin: true,
      scroller: "#main",
      trigger: "#filmsubmission",
    },
    y: 20,
    opacity: 0,
  //   delay:5,
    duration: 1.2,
    ease: Expo.easeInOut,
    skewY: 3,
  
  });
