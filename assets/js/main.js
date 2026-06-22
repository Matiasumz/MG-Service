// MG Service — interacciones de sitio

document.addEventListener("DOMContentLoaded", () => {
  // Toggle de menú mobile
  const toggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
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

  // Año dinámico en footer
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
