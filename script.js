// HERO SECTION ANIMATION
gsap.from(".hero-content h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".cta-btn", {
  opacity: 0,
  scale: 0,
  duration: 0.8,
  delay: 0.6,
  ease: "back.out(1.7)"
});

gsap.from(".hero-img img", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  delay: 0.4,
  ease: "power2.out"
});

// FEATURES SCROLL ANIMATION
gsap.utils.toArray(".feature-box").forEach((box, index) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: index * 0.2,
    ease: "power2.out"
  });
});

// TESTIMONIALS SCROLL
gsap.utils.toArray(".testimonial").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    delay: i * 0.3,
    ease: "power2.out"
  });
});

// CONTACT FORM FADE-IN
gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out"
});
