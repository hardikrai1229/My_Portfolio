// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Custom cursor animation
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
  });

  gsap.to(cursorFollower, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
  });
});

// Reveal text animation
gsap.utils.toArray(".reveal-text").forEach((text) => {
  gsap.from(text, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Skill cards animation
gsap.utils.toArray(".skill-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 100,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Project cards animation
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

// Section titles animation
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});
