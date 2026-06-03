(function () {
  "use strict";

  /* Hero slideshow images — best dramatic production shots */
  const heroSlides = [
    { src: "images/featured/IMG_3506.jpg", alt: "Live concert performance under dramatic blue stage lighting" },
    { src: "images/featured/IMG_3504.jpg", alt: "Live stage production with atmospheric lighting" },
    { src: "images/featured/IMG_3502.jpg", alt: "Concert stage environment with professional lighting design" },
    { src: "images/featured/IMG_3505.jpg", alt: "Live event performance on stage" },
    { src: "images/featured/IMG_3503.jpg", alt: "Theatre and concert stage production" },
    { src: "images/featured/IMG_3507.jpg", alt: "Live entertainment production with stage lighting" },
    { src: "images/lighting-design/789cbe1b-5dcf-4dcd-8389-026bdb4f86ed.JPG", alt: "Dynamic stage lighting design in live performance" },
    { src: "images/lighting-design/6ec472fb-eaef-46b1-9043-96e2fe6c706b.JPG", alt: "Concert lighting atmosphere and visual impact" },
  ];

  /* Portfolio gallery — every supplied image */
  const portfolioItems = [
    /* Featured / live productions */
    { src: "images/featured/IMG_3502.jpg", title: "Live Production", category: "instrument-performance" },
    { src: "images/featured/IMG_3503.jpg", title: "Concert Stage", category: "instrument-performance" },
    { src: "images/featured/IMG_3504.jpg", title: "Stage Performance", category: "instrument-performance" },
    { src: "images/featured/IMG_3505.jpg", title: "Live Event", category: "instrument-performance" },
    { src: "images/featured/IMG_3506.jpg", title: "Concert Experience", category: "instrument-performance" },
    { src: "images/featured/IMG_3507.jpg", title: "Live Entertainment", category: "instrument-performance" },
    /* Stage design */
    { src: "images/stage-design/aa98b367-5a70-4856-bb3e-647f19f5ca56.JPG", title: "Stage Environment", category: "stage-design" },
    { src: "images/stage-design/c754e5c0-6476-469b-8570-d0afe5cec142.JPG", title: "Event Stage Setup", category: "stage-design" },
    { src: "images/stage-design/fc482797-14c8-4043-ae1a-dc497b65260b.JPG", title: "Production Stage Design", category: "stage-design" },
    /* Instrument performance */
    { src: "images/hero/85420451-728a-4144-9637-c1316f741566.JPG", title: "Bass Performance", category: "instrument-performance" },
    { src: "images/instruments/2dfc1519-0d36-4dea-bda8-cddc077f70f9.JPG", title: "Live Instrumental Set", category: "instrument-performance" },
    { src: "images/instruments/3080bb48-fa0c-4241-b79a-060194ae6587.JPG", title: "Instrument Performance", category: "instrument-performance" },
    { src: "images/instruments/450d31ce-6ab9-4e60-a08f-809ff432ae65.JPG", title: "On Stage Performance", category: "instrument-performance" },
    { src: "images/instruments/8a3fce47-cb7d-42cf-aaf3-ae1b5e38ffe7.JPG", title: "Live Music Performance", category: "instrument-performance" },
    { src: "images/instruments/a26d9913-1eee-4f16-92df-eb5ac841fee1.JPG", title: "Musical Performance", category: "instrument-performance" },
    /* Lighting design */
    { src: "images/lighting-design/03e2f8ee-09d7-4012-b59d-6a2379f0da09.JPG", title: "Lighting Atmosphere", category: "lighting-design" },
    { src: "images/lighting-design/12bc5961-a8bc-4d65-bd02-0d06ac3fa760.JPG", title: "Stage Wash Lighting", category: "lighting-design" },
    { src: "images/lighting-design/1f68049c-13ae-4f89-aae3-70f88e8b7ed4.JPG", title: "Event Lighting", category: "lighting-design" },
    { src: "images/lighting-design/202c8cb4-0240-473d-99aa-781651ace04a.JPG", title: "Spotlight Design", category: "lighting-design" },
    { src: "images/lighting-design/23fff392-624f-4826-a32f-d2f54a6f0ca7.JPG", title: "Concert Lighting", category: "lighting-design" },
    { src: "images/lighting-design/2722c861-a154-4888-af18-f8b600e58be7.JPG", title: "Production Lighting", category: "lighting-design" },
    { src: "images/lighting-design/397365a5-0109-454e-bf0b-6d9a5dfa8efe.JPG", title: "Ambient Stage Light", category: "lighting-design" },
    { src: "images/lighting-design/41bbd570-bd3d-4fc8-a6c3-fbb1fc3e780b.JPG", title: "Colour Wash", category: "lighting-design" },
    { src: "images/lighting-design/45f61064-7660-4968-8aa8-e345db5bb922.JPG", title: "Live Show Lighting", category: "lighting-design" },
    { src: "images/lighting-design/505c5198-ff64-4ecc-a31c-75007b9c0ffb.JPG", title: "Theatrical Lighting", category: "lighting-design" },
    { src: "images/lighting-design/51b01a9f-e82f-4d0f-bacc-e3ff17d6d624.JPG", title: "Stage Beam Design", category: "lighting-design" },
    { src: "images/lighting-design/5d567655-9005-4513-bcee-d727c913d834.JPG", title: "Performance Lighting", category: "lighting-design" },
    { src: "images/lighting-design/5e9096a8-48bc-44cf-9660-ae80e5cf5003.JPG", title: "Dynamic Light Cues", category: "lighting-design" },
    { src: "images/lighting-design/6ec472fb-eaef-46b1-9043-96e2fe6c706b.JPG", title: "Concert Light Show", category: "lighting-design" },
    { src: "images/lighting-design/789cbe1b-5dcf-4dcd-8389-026bdb4f86ed.JPG", title: "Stage Light Composition", category: "lighting-design" },
    { src: "images/lighting-design/78ecdeb1-c134-4f43-945d-c6170578888b.JPG", title: "Mood Lighting", category: "lighting-design" },
    { src: "images/lighting-design/79eb4232-52eb-42b0-a343-dc260917cef7.JPG", title: "Visual Impact Lighting", category: "lighting-design" },
    { src: "images/lighting-design/7b7fc53c-c237-4c2d-98dc-92c4b2a23085.JPG", title: "Stage Colour Design", category: "lighting-design" },
    { src: "images/lighting-design/7c46a795-fa26-4ea7-8a26-4da21f8ca845.JPG", title: "Live Event Illumination", category: "lighting-design" },
    { src: "images/lighting-design/8ac81359-f659-4fa6-b908-43e03eefdc21.JPG", title: "Lighting Concept", category: "lighting-design" },
    { src: "images/lighting-design/95db5db0-2331-4ea9-82f8-d41eec4b9910.JPG", title: "Atmospheric Lighting", category: "lighting-design" },
    { src: "images/lighting-design/98445061-f070-4486-85c8-803612405154.JPG", title: "Stage FX Lighting", category: "lighting-design" },
    { src: "images/lighting-design/9d24ffee-6dfd-4a64-b7b0-17234773f30a.JPG", title: "Show Lighting Design", category: "lighting-design" },
    { src: "images/lighting-design/a4ffaae7-0aaa-4398-80df-8da56af49d79.JPG", title: "Production Illumination", category: "lighting-design" },
    { src: "images/lighting-design/c32f1c58-8545-4cc5-b4cb-a1ec44a46292.JPG", title: "Creative Light Design", category: "lighting-design" },
    { src: "images/lighting-design/c9a604e9-6d5c-4857-b7ec-ff7be1e4bb19.JPG", title: "Stage Light Drama", category: "lighting-design" },
    { src: "images/lighting-design/ca63697d-3d6d-4766-a64b-eba04988c252.JPG", title: "Event Lightscape", category: "lighting-design" },
    { src: "images/lighting-design/ccbef241-5f69-447f-9588-e166ddb30e37.JPG", title: "Beam Lighting", category: "lighting-design" },
    { src: "images/lighting-design/d080666e-d072-41e1-94c5-45c101edf4d5.JPG", title: "Colour Mix Lighting", category: "lighting-design" },
    { src: "images/lighting-design/d2d547f5-7b7d-47c1-8472-0f29a57f07e3.JPG", title: "Stage Glow", category: "lighting-design" },
    { src: "images/lighting-design/d343b6f7-6c8d-4acf-bab4-f2997c2d743b.JPG", title: "Performance Illumination", category: "lighting-design" },
    { src: "images/lighting-design/e18d2f25-edb1-4af3-b48a-9cf891d94b8e.JPG", title: "Live Lighting Cues", category: "lighting-design" },
    { src: "images/lighting-design/e3dbb5c8-3947-4de7-85e7-353569ae8370.JPG", title: "Stage Ambience", category: "lighting-design" },
    { src: "images/lighting-design/e560038c-d0bf-4349-a8f4-9b809103f1d6.JPG", title: "Concert Illumination", category: "lighting-design" },
    { src: "images/lighting-design/ea86fad3-1997-4fac-beb7-052cd402e63b.JPG", title: "Lighting Visual Impact", category: "lighting-design" },
  ];

  const categoryLabels = {
    "stage-design": "Stage Design",
    "lighting-design": "Lighting Design",
    "instrument-performance": "Instrument Performance",
  };

  const scrollSections = [
    { id: "home", nav: "home" },
    { id: "about", nav: "about" },
    { id: "services", nav: "services" },
    { id: "featured", nav: "portfolio" },
    { id: "portfolio", nav: "portfolio" },
    { id: "social", nav: "contact" },
    { id: "contact", nav: "contact" },
  ];
  let currentFilter = "all";
  let visiblePortfolio = [];
  let lightboxIndex = 0;
  let heroIndex = 0;
  let heroTimer = null;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---- Hero Slideshow ---- */
  function initHero() {
    const container = $("#hero-slideshow");
    if (!container) return;

    heroSlides.forEach((slide, i) => {
      const div = document.createElement("div");
      div.className = "hero-slide" + (i === 0 ? " active" : "");
      div.innerHTML = `<img src="${slide.src}" alt="${slide.alt}" loading="${i === 0 ? "eager" : "lazy"}">`;
      container.appendChild(div);
    });

    const slides = $$(".hero-slide", container);
    if (slides.length < 2) return;

    heroTimer = setInterval(() => {
      slides[heroIndex].classList.remove("active");
      heroIndex = (heroIndex + 1) % slides.length;
      slides[heroIndex].classList.add("active");
    }, 5500);
  }

  /* ---- Portfolio Grid ---- */
  function renderPortfolio() {
    const grid = $("#portfolio-grid");
    if (!grid) return;

    grid.innerHTML = portfolioItems
      .map(
        (item, index) => `
      <article class="portfolio-item" role="listitem" data-index="${index}" data-category="${item.category}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" width="400" height="300">
        <div class="portfolio-item-overlay">
          <div>
            <p class="portfolio-item-title">${item.title}</p>
            <p class="portfolio-item-category">${categoryLabels[item.category]}</p>
          </div>
        </div>
      </article>`
      )
      .join("");

    grid.addEventListener("click", onPortfolioClick);
    updateVisiblePortfolio();
  }

  function updateVisiblePortfolio() {
    const items = $$(".portfolio-item");
    visiblePortfolio = [];

    items.forEach((el) => {
      const cat = el.dataset.category;
      const show = currentFilter === "all" || cat === currentFilter;
      el.classList.toggle("hidden", !show);
      if (show) {
        visiblePortfolio.push({
          src: portfolioItems[Number(el.dataset.index)].src,
          title: portfolioItems[Number(el.dataset.index)].title,
        });
      }
    });
  }

  function onPortfolioClick(e) {
    const item = e.target.closest(".portfolio-item");
    if (!item || item.classList.contains("hidden")) return;

    const index = visiblePortfolio.findIndex(
      (p) => p.src === portfolioItems[Number(item.dataset.index)].src
    );
    if (index >= 0) openLightbox(index);
  }

  /* ---- Portfolio Filters ---- */
  function initFilters() {
    $$(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        if (filter === currentFilter) return;

        $$(".filter-btn").forEach((b) => {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });

        currentFilter = filter;
        updateVisiblePortfolio();
      });
    });
  }

  /* ---- Lightbox ---- */
  function initLightbox() {
    $("#lightbox-close")?.addEventListener("click", closeLightbox);
    $("#lightbox-prev")?.addEventListener("click", () => navigateLightbox(-1));
    $("#lightbox-next")?.addEventListener("click", () => navigateLightbox(1));

    $("#lightbox")?.addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      const lb = $("#lightbox");
      if (!lb?.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    });
  }

  function openLightbox(index) {
    lightboxIndex = index;
    const lb = $("#lightbox");
    if (!lb) return;

    lb.hidden = false;
    requestAnimationFrame(() => {
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
      updateLightboxImage();
      $("#lightbox-close")?.focus();
    });
  }

  function closeLightbox() {
    const lb = $("#lightbox");
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      lb.hidden = true;
    }, 350);
  }

  function navigateLightbox(dir) {
    if (!visiblePortfolio.length) return;
    lightboxIndex = (lightboxIndex + dir + visiblePortfolio.length) % visiblePortfolio.length;
    updateLightboxImage();
  }

  function updateLightboxImage() {
    const item = visiblePortfolio[lightboxIndex];
    if (!item) return;
    const img = $("#lightbox-img");
    const cap = $("#lightbox-caption");
    if (img) {
      img.src = item.src;
      img.alt = item.title;
    }
    if (cap) cap.textContent = item.title;
  }

  /* ---- Sticky Nav & Active Section ---- */
  function initScrollSpy() {
    const header = $("#site-header");
    const navLinks = $$(".nav-link");

    window.addEventListener(
      "scroll",
      () => {
        header?.classList.toggle("scrolled", window.scrollY > 40);

        const scrollPos = window.scrollY + varHeaderOffset();

        let currentNav = "home";
        scrollSections.forEach(({ id, nav }) => {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPos) currentNav = nav;
        });

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === currentNav);
        });
      },
      { passive: true }
    );
  }

  function varHeaderOffset() {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) + 80;
  }

  /* ---- Mobile Nav ---- */
  function initMobileNav() {
    const toggle = $("#nav-toggle");
    const menu = $("#nav-menu");

    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu?.classList.toggle("open", !open);
      document.body.style.overflow = !open ? "hidden" : "";
    });

    $$(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        toggle?.setAttribute("aria-expanded", "false");
        menu?.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Smooth anchor offset (for fixed header) ---- */
  function initSmoothNav() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ---- Scroll Reveal ---- */
  function initReveal() {
    const reveals = $$(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* ---- Contact Form ---- */
  function initContactForm() {
    const form = $("#contact-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#name")?.value.trim() || "";
      const email = $("#email")?.value.trim() || "";
      const message = $("#message")?.value.trim() || "";
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:steventshefati@outlook.com?subject=${subject}&body=${body}`;
    });
  }

  /* ---- Footer year ---- */
  function initFooter() {
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---- Init ---- */
  function init() {
    initHero();
    renderPortfolio();
    initFilters();
    initLightbox();
    initScrollSpy();
    initMobileNav();
    initSmoothNav();
    initReveal();
    initContactForm();
    initFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
