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
      div.className = "absolute inset-0 transition-opacity duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) " + (i === 0 ? "opacity-100 z-10" : "opacity-0 z-0");
      div.innerHTML = `<img src="${slide.src}" alt="${slide.alt}" class="w-full h-full object-cover" loading="${i === 0 ? "eager" : "lazy"}">`;
      container.appendChild(div);
    });

    const slides = container.children;
    if (slides.length < 2) return;

    heroTimer = setInterval(() => {
      slides[heroIndex].classList.remove("opacity-100", "z-10");
      slides[heroIndex].classList.add("opacity-0", "z-0");
      heroIndex = (heroIndex + 1) % slides.length;
      slides[heroIndex].classList.remove("opacity-0", "z-0");
      slides[heroIndex].classList.add("opacity-100", "z-10");
    }, 5500);
  }

  /* ---- Portfolio Grid (Updated with Glassmorphism markup tags) ---- */
  function renderPortfolio() {
    const grid = $("#portfolio-grid");
    if (!grid) return;

    grid.innerHTML = portfolioItems
      .map(
        (item, index) => `
      <article class="portfolio-item glass-card p-1.5 flex flex-col group cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] transform [animation:animationIn_0.8s_ease-out_both] animate-on-scroll" role="listitem" data-index="${index}" data-category="${item.category}">
        <div class="relative overflow-hidden aspect-[4/3] rounded-[1.25rem] bg-zinc-900">
          <img src="${item.src}" alt="${item.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
        </div>
        <div class="px-5 py-5 flex flex-col gap-1 relative z-20">
          <p class="text-lg font-medium font-geist tracking-tight text-white">${item.title}</p>
          <p class="text-xs font-normal text-zinc-500">${categoryLabels[item.category]}</p>
        </div>
        <div class="glass-highlight"></div>
      </article>`
      )
      .join("");

    grid.addEventListener("click", onPortfolioClick);
    updateVisiblePortfolio();
    
    // Wire items to engine animations directly
    if (window.initInViewAnimations) {
      window.initInViewAnimations(".portfolio-item");
    }
  }

  function updateVisiblePortfolio() {
    const items = $$(".portfolio-item");
    visiblePortfolio = [];

    items.forEach((el) => {
      const cat = el.dataset.category;
      const show = currentFilter === "all" || cat === currentFilter;
      
      if (show) {
        el.style.display = "flex";
        visiblePortfolio.push({
          src: portfolioItems[Number(el.dataset.index)].src,
          title: portfolioItems[Number(el.dataset.index)].title,
        });
      } else {
        el.style.display = "none";
      }
    });
  }

  function onPortfolioClick(e) {
    const item = e.target.closest(".portfolio-item");
    if (!item || item.style.display === "none") return;

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
          const isActive = b === btn;
          b.classList.toggle("bg-white/10", isActive);
          b.classList.toggle("text-white", isActive);
          b.classList.toggle("text-zinc-400", !isActive);
          b.setAttribute("aria-selected", isActive ? "true" : "false");
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
      if (!lb || lb.hidden) return;
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
    lb.classList.remove("hidden");
    lb.classList.add("flex");
    document.body.style.overflow = "hidden";
    updateLightboxImage();
    $("#lightbox-close")?.focus();
  }

  function closeLightbox() {
    const lb = $("#lightbox");
    if (!lb) return;
    lb.classList.remove("flex");
    lb.classList.add("hidden");
    lb.hidden = true;
    document.body.style.overflow = "";
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
        if (window.scrollY > 40) {
          header?.classList.add("bg-black/60", "backdrop-blur-xl", "py-2");
          header?.classList.remove("bg-black/20", "backdrop-blur-md");
        } else {
          header?.classList.remove("bg-black/60", "backdrop-blur-xl", "py-2");
          header?.classList.add("bg-black/20", "backdrop-blur-md");
        }

        const scrollPos = window.scrollY + 120;
        let currentNav = "home";

        scrollSections.forEach(({ id, nav }) => {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPos) currentNav = nav;
        });

        navLinks.forEach((link) => {
          const isActive = link.dataset.section === currentNav;
          link.classList.toggle("text-white", isActive);
          link.classList.toggle("text-zinc-400", !isActive);
        });
      },
      { passive: true }
    );
  }

  /* ---- Mobile Navigation Panel ---- */
  function initMobileNav() {
    const toggle = $("#nav-toggle");
    const menu = $("#nav-menu");

    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      
      if (!open) {
        menu?.classList.remove("hidden");
        menu?.classList.add("fixed", "inset-0", "bg-[#09090b]/95", "backdrop-blur-2xl", "flex", "flex-col", "items-center", "justify-center", "gap-8", "text-2xl", "z-40");
        document.body.style.overflow = "hidden";
        // Turn hamburger into absolute item over overlay
        toggle.classList.add("fixed", "top-6", "right-6", "z-50");
      } else {
        closeMobileMenu(menu, toggle);
      }
    });

    $$("#nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        if (toggle?.getAttribute("aria-expanded") === "true") {
          closeMobileMenu(menu, toggle);
        }
      });
    });
  }

  function closeMobileMenu(menu, toggle) {
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.classList.remove("fixed", "top-6", "right-6", "z-50");
    menu?.classList.remove("fixed", "inset-0", "bg-[#09090b]/95", "backdrop-blur-2xl", "flex", "flex-col", "items-center", "justify-center", "gap-8", "text-2xl", "z-40");
    menu?.classList.add("hidden");
    document.body.style.overflow = "";
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
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      });
    });
  }

  /* ---- Contact Form Handling ---- */
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

  /* ---- Footer active timestamp generator ---- */
  function initFooter() {
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---- System boot sequence initialization ---- */
  function init() {
    initHero();
    renderPortfolio();
    initFilters();
    initLightbox();
    initScrollSpy();
    initMobileNav();
    initSmoothNav();
    initContactForm();
    initFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
