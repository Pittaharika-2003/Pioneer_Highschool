
// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navContainer = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

// SMOOTH SCROLL
document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

  });

});

// 🔥 PERFECT SCROLL SPY (FINAL FIX)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.classList.add("active");
        }
      });

    }
  });
}, {
  threshold: 0.6   // 👈 important (60% visible = active)
});

sections.forEach(section => {
  observer.observe(section);
});


const aboutCard = document.getElementById("aboutCard");

// Toggle ON/OFF on tap (mobile + desktop click)
aboutCard.addEventListener("click", () => {
  aboutCard.classList.toggle("active");
});


const cards = document.querySelectorAll(".premium-card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});

const ultraCards = document.querySelectorAll(".ultra-card");

ultraCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});