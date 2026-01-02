document.addEventListener("DOMContentLoaded", () => {
  /* ---------- NAV BAR ANIMATION ON SCROLL ----------- */
  const nav = document.querySelector("nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  /* ---------- FADE SECTIONS ---------- */
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach((section) => observer.observe(section));

  /* ---------- CAROUSEL ---------- */
  const carousel = document.querySelector(".carousel");
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-card");
  const indicators = document.querySelectorAll(".carousel-indicators button");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (track && slides.length) {
    // carousel logic only

    let index = 0;
    let intervalId = null;

    function moveSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;

      indicators.forEach((indicator, i) => {
        const isActive = i === index;

        indicator.classList.toggle("active", isActive);

        if (isActive) {
          indicator.setAttribute("aria-current", "true");
        } else {
          indicator.removeAttribute("aria-current");
        }
      });
    }

    // 🔹 MAKE INDICATORS CLICKABLE
    indicators.forEach((indicator, i) => {
      indicator.addEventListener("click", () => {
        index = i;
        moveSlide();
      });
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      moveSlide();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      moveSlide();
    });

    indicators.forEach((line, i) => {
      line.addEventListener("click", () => {
        index = i;
        moveSlide();
      });
    });

    /* AUTO SLIDE */
    function startAutoSlide() {
      intervalId = setInterval(() => {
        index = (index + 1) % slides.length;
        moveSlide();
      }, 2250);

      carousel.classList.remove("paused");
    }

    function stopAutoSlide() {
      clearInterval(intervalId);
      intervalId = null;
      carousel.classList.add("paused");
    }

    /* INIT */
    moveSlide();
    startAutoSlide();

    /* PAUSE ON HOVER */
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);
  }

  /* ---------- POP - UP LOGIC ---------- */
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");

  // Open popup from any link pointing to #popup
  document.querySelectorAll('a[href="#popup"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  });

  // Close button
  popupClose.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // Click outside popup box
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });

  // ------------- MENU BAR FOR MOBILES -------------
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // ---------- ANIMATIONS FOR PROJECT CARDS ---------- //
  const projectObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // decide animation based on direction
        if (el.classList.contains("reverse")) {
          el.style.animation =
            "fadeIn-reverse 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards";
        } else {
          el.style.animation =
            "fadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards";
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  // observe both normal and reverse cards
  document.querySelectorAll(".project-card, .hero-flex").forEach((card) => {
    projectObserver.observe(card);
  });

  // ---------- END OF SCRIPT ---------- //
});
