// MG Service — interacciones de sitio

document.addEventListener("DOMContentLoaded", () => {
  // Toggle de menú mobile
  const toggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Marcar link activo según la página actual
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });

  // Acordeón de FAQ
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        if (openItem !== item) openItem.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });

  // Carrusel de portada: pausa con hover/foco y no rota con movimiento reducido
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const heroSlides = Array.from(document.querySelectorAll(".h-hero-slide"));
  const heroDots = Array.from(document.querySelectorAll(".h-hero-dot"));
  const hero = document.querySelector(".h-hero");
  let heroIndex = 0;
  let heroPaused = false;

  const setHeroSlide = (nextIndex) => {
    heroIndex = nextIndex % heroSlides.length;
    heroSlides.forEach((slide, i) => slide.classList.toggle("is-active", i === heroIndex));
    heroDots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === heroIndex);
      dot.setAttribute("aria-pressed", String(i === heroIndex));
    });
  };

  heroDots.forEach((dot, i) => dot.addEventListener("click", () => setHeroSlide(i)));

  if (hero && heroSlides.length > 1 && !reduceMotion) {
    ["mouseenter", "focusin"].forEach((ev) => hero.addEventListener(ev, () => { heroPaused = true; }));
    ["mouseleave", "focusout"].forEach((ev) => hero.addEventListener(ev, () => { heroPaused = false; }));
    setInterval(() => {
      if (!heroPaused && !document.hidden) setHeroSlide(heroIndex + 1);
    }, 6000);
  }

  // Año dinámico en footer
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

// Servicios: la foto y el progreso siguen al servicio que está en foco
document.addEventListener("DOMContentLoaded", () => {
  const panels = Array.from(document.querySelectorAll(".svc-panel"));
  if (!panels.length) return;

  document.documentElement.classList.add("js");
  const images = Array.from(document.querySelectorAll(".svc-media img"));
  const current = document.querySelector(".svc-current");
  const fill = document.querySelector(".svc-bar-fill");

  const activate = (index) => {
    panels.forEach((panel, i) => panel.classList.toggle("is-active", i === index));
    images.forEach((img, i) => img.classList.toggle("is-active", i === index));
    current.textContent = panels[index].querySelector("h2").textContent;
    fill.style.width = `${((index + 1) / panels.length) * 100}%`;
  };

  let activeIndex = 0;
  let ticking = false;
  const update = () => {
    ticking = false;
    const middle = window.innerHeight / 2;
    let closest = 0;
    let closestDistance = Infinity;
    panels.forEach((panel, i) => {
      const rect = panel.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - middle);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    if (closest !== activeIndex) {
      activeIndex = closest;
      activate(closest);
    }
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
});

// Home: la ruta concierge avanza con el scroll (fija en desktop, por posición en mobile)
document.addEventListener("DOMContentLoaded", () => {
  const route = document.querySelector(".h-route");
  if (!route || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const steps = Array.from(route.querySelectorAll(".h-route-steps li"));
  const last = steps.length - 1;
  route.classList.add("is-live");

  const render = (t) => {
    steps.forEach((step, i) => {
      step.classList.toggle("is-reached", t >= i);
      step.style.setProperty("--fill", Math.min(Math.max(t - i, 0), 1));
    });
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const pin = window.innerWidth > 760 && window.innerHeight >= 640;
    route.classList.toggle("is-pinned", pin);

    if (pin) {
      const rect = route.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / (total * 0.85), 0), 1);
      render(progress * last);
      return;
    }

    const line = window.innerHeight * 0.65;
    const tops = steps.map((step) => step.getBoundingClientRect().top);
    let t = 0;
    for (let i = 0; i < last; i++) {
      const segment = (line - tops[i]) / (tops[i + 1] - tops[i]);
      if (segment <= 0) break;
      t = i + Math.min(segment, 1);
    }
    render(t);
  };

  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  update();
});

// Home: las piezas de "lo que recibís" entran una vez al llegar a la sección
document.addEventListener("DOMContentLoaded", () => {
  const proof = document.querySelector(".h-proof");
  if (!proof || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const check = () => {
    if (proof.getBoundingClientRect().top < window.innerHeight * 0.75) {
      proof.classList.remove("is-waiting");
      window.removeEventListener("scroll", check);
    }
  };
  if (proof.getBoundingClientRect().top >= window.innerHeight * 0.75) {
    proof.classList.add("is-waiting");
    window.addEventListener("scroll", check, { passive: true });
  }
});
