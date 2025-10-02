  // fade in up
  gsap.utils.toArray(".fade-up").forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // khi element chạm 80% viewport
        toggleActions: "play none none reverse"
      }
    });
  });

   // fade in down
  gsap.utils.toArray(".fade-down").forEach(el => {
    gsap.from(el, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // fade in left
  gsap.utils.toArray(".fade-left").forEach(el => {
    gsap.from(el, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // fade in right
  gsap.utils.toArray(".fade-right").forEach(el => {
    gsap.from(el, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

    // rds0 scroll
    ScrollTrigger.create({
    trigger: ".rds0",
    start: "top-=80 top",
    end: () => "+=" + (document.querySelector(".rds0_right").offsetHeight - document.querySelector(".rds0_left").offsetHeight),
    pin: ".rds0_left",
    pinSpacing: false,
    ease: "power3.out"
  });


  // section-x (card scroll stack)
  const cards = document.querySelectorAll(".card-x");

  cards.forEach((c, i) => {
    c.style.zIndex = cards.length - i;
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".test-x",
      start: "top 160px",   // sticky cách top 80px
      end: "+=2880",       // đủ dài để chạy hết 6 card
      scrub: true,
      pin: ".test-x",        // sticky cả block .test-x
      pinSpacing: true,
    }
  });

  cards.forEach((card, i) => {
    if (i === 0) return;

    tl.to(cards[i - 1], {
      y: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, i - 1);

    // Card hiện tại zoom in + fade in
    tl.to(card, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }, i - 1 + 0.1);
  });