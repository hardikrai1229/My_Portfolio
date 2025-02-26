// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  if (html.getAttribute("data-bs-theme") === "dark") {
    html.setAttribute("data-bs-theme", "light");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    html.setAttribute("data-bs-theme", "dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Message sent successfully!");
    contactForm.reset();
  });
}

// Intersection Observer for navbar background
const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero-section");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  },
  { threshold: 0.1 }
);

if (heroSection) {
  navObserver.observe(heroSection);
}

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .project-card, .skill-card"
);
interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 2,
      duration: 0.3,
    });
    gsap.to(".cursor-follower", {
      scale: 1.5,
      duration: 0.3,
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(".cursor-follower", {
      scale: 1,
      duration: 0.3,
    });
  });
});
