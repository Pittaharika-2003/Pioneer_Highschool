
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
const aboutBg = aboutCard.querySelector(".about-bg");

// KEEP your click behavior
aboutCard.addEventListener("click", () => {
  aboutCard.classList.toggle("active");
});

// 🔥 Your slideshow images (use real school images if possible)
const images = [
  "https://res.cloudinary.com/dkhmpija5/image/upload/v1774347520/about_us_qetfpe.jpg",
  "https://res.cloudinary.com/dkhmpija5/image/upload/v1774537969/bf57db38-151d-4ad0-800d-1d8a7a0d2d2c_2_o0jyfa.png",
  "https://res.cloudinary.com/dkhmpija5/image/upload/v1774538334/1st_itaua2.jpg",
  "https://res.cloudinary.com/dkhmpija5/image/upload/v1774538346/22_qcugm6.jpg"
];

let index = 0;

// preload images (important for smoothness)
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

// set first image
aboutBg.style.backgroundImage = `url(${images[index]})`;

// 🔥 smooth fade slideshow
setInterval(() => {
  index = (index + 1) % images.length;

  // fade out
  aboutBg.style.opacity = "0";

  setTimeout(() => {
    aboutBg.style.backgroundImage = `url(${images[index]})`;

    // fade in
    aboutBg.style.opacity = "1";
  }, 400);

},3000); // change every 5 sec




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





function toggleButton(e, clickedBtn) {

  // Allow redirect only for map button
  if (!clickedBtn.classList.contains('map-btn')) {
    e.preventDefault();
  }

  // Toggle active
  if (clickedBtn.classList.contains('active')) {
    clickedBtn.classList.remove('active');
    return;
  }

  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.remove('active');
  });

  clickedBtn.classList.add('active');
}


const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop default redirect

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      successMessage.style.display = "block";

      // redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "#home"; // OR your full link
        // window.location.href = "https://pioneer-highschool.vercel.app/";
      }, 3000);
    } else {
      alert("Something went wrong!");
    }
  })
  .catch(() => {
    alert("Error submitting form");
  });
});


const facilityCards = document.querySelectorAll('.facility-card');

facilityCards.forEach(card => {
  card.addEventListener('click', () => {

    // Close all other cards
    facilityCards.forEach(c => {
      if (c !== card) {
        c.classList.remove('active');
      }
    });

    // Toggle current card
    card.classList.toggle('active');
  });
});

const schoolType = document.getElementById("schoolType");
const previousSchoolInput = document.getElementById("previousSchoolInput");

schoolType.addEventListener("change", function () {

  if (this.value === "Previous School") {
    previousSchoolInput.style.display = "block";
    previousSchoolInput.required = true;
  } else {
    previousSchoolInput.style.display = "none";
    previousSchoolInput.required = false;
    previousSchoolInput.value = "";
  }

});
