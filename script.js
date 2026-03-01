// ==============================
// MOBILE NAVIGATION TOGGLE
// ==============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

// ==============================
// WHATSAPP LINKS SETUP (FIXED FOR MOBILE)
// ==============================
function setupWhatsAppLinks() {
  // Deteksi perangkat mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  // Temukan semua link WhatsApp
  const whatsappLinks = document.querySelectorAll(
    '[href*="whatsapp"], .btn-inquiry, .float-whatsapp, .btn-submit',
  );

  whatsappLinks.forEach((link) => {
    // Pastikan semua link WhatsApp terbuka di tab baru
    if (link.tagName === "A" && link.href.includes("whatsapp")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

// ==============================
// FORM SUBMISSION (FIXED FOR MOBILE)
// ==============================
const inquiryForm = document.getElementById("inquiryForm");

inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value;

  // Create WhatsApp message
  const whatsappMessage = `Halo PANDOWO MOTOR,%0A%0ASaya ${name}%0AEmail: ${email}%0ANomor WhatsApp: ${phone}%0AMinat Produk: ${interest}%0A%0APesan: ${message}%0A%0A_*Pesan ini dikirim melalui website PANDOWO MOTOR*_`;

  // Deteksi perangkat untuk format URL yang tepat
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  // Gunakan format yang tepat berdasarkan perangkat
  let whatsappURL;
  if (isMobile) {
    whatsappURL = `https://api.whatsapp.com/send?phone=6281314437878&text=${whatsappMessage}`;
  } else {
    whatsappURL = `https://web.whatsapp.com/send?phone=6281314437878&text=${whatsappMessage}`;
  }

  // Buka WhatsApp
  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  // Reset form
  inquiryForm.reset();

  // Show success message
  setTimeout(() => {
    alert(
      "Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan.",
    );
  }, 300);
});

// ==============================
// SCROLL ANIMATION
// ==============================
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll(".fade-in, .slide-in").forEach((el) => {
  observer.observe(el);
});

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.backgroundColor = "rgba(10, 26, 51, 0.98)";
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.backgroundColor = "rgba(10, 26, 51, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// ==============================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ==============================
// TRUCK CARD HOVER EFFECT
// ==============================
const truckCards = document.querySelectorAll(".truck-card");

truckCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      card.style.transform = "translateY(-10px) scale(1.02)";
      card.style.transition = "transform 0.3s ease";
    }
  });

  card.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      card.style.transform = "translateY(0) scale(1)";
    }
  });
});

// ==============================
// SERVICE CARD ANIMATION ON SCROLL
// ==============================
const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animated");
        }, index * 200);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".service-card").forEach((card) => {
  serviceObserver.observe(card);
});

// ==============================
// INITIALIZE ANIMATIONS ON PAGE LOAD
// ==============================
window.addEventListener("DOMContentLoaded", () => {
  // Setup WhatsApp links
  setupWhatsAppLinks();

  // Animate hero elements
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const heroBtn = document.querySelector(".btn-hero");

  setTimeout(() => {
    heroTitle.classList.add("visible");
  }, 500);

  setTimeout(() => {
    heroSubtitle.classList.add("visible");
  }, 1000);

  setTimeout(() => {
    heroBtn.classList.add("visible");
  }, 1500);

  // Add loading animation
  document.body.classList.add("loaded");
});

// ==============================
// FORM VALIDATION ENHANCEMENT
// ==============================
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("0")) {
      value = "62" + value.substring(1);
    }
    e.target.value = value;
  });
}

// ==============================
// WINDOW RESIZE HANDLER
// ==============================
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Reset truck card transforms on mobile
    if (window.innerWidth <= 768) {
      truckCards.forEach((card) => {
        card.style.transform = "none";
      });
    }
  }, 250);
});
